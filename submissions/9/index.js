const { Client } = require("pg");
const client = new Client({
  host: "localhost",
  port: 5432,
  database: "sample",
  user: "root",
  password: "",
});

const data = [
  {
    campaignId: 5550,
    views: 3,
    metadata: {
      overrideDate: "2022-12-13T17:51:54Z",
      incrementInteger: 4,
      ignoredDate: "2022-01-01T10:00:00Z",
    },
  },
  {
    campaignId: 5551,
    views: 23,
    metadata: {
      overrideDate: "2022-12-15T17:51:54Z",
      incrementInteger: 1,
      ignoredDate: "2022-02-01T10:00:00Z",
    },
  },
  {
    campaignId: 5552,
    views: 56,
    metadata: {
      overrideDate: "2022-12-1717:51:54Z",
      incrementInteger: 6,
      ignoredDate: "2022-03-01T10:00:00Z",
    },
  },
];

const stringifiedData = JSON.stringify(data);
console.log(stringifiedData);

// Custom logic can be be inserted here
const sql = `
WITH upsert AS (
    UPDATE campaign_stats
    SET views = campaign_stats.views + src.views,
  --      metadata = jsonb_set(campaign_stats.metadata, '{overrideDate}', to_jsonb(src.metadata->>'overrideDate'), true)
        metadata = jsonb_set(campaign_stats.metadata, '{incrementInteger}', to_jsonb((campaign_stats.metadata->>'incrementInteger')::integer + (src.metadata->>'incrementInteger')::integer), true)
    FROM (
      SELECT *
      FROM jsonb_array_elements(
        '${stringifiedData}'
      ) as src(data) left join campaign_stats
      on src.data->>'campaignId'::text = campaign_stats."campaignId"::text
    ) src
    WHERE campaign_stats."campaignId"::text = src.data->>'campaignId'::text
    RETURNING src.data
  )
  INSERT INTO campaign_stats ("campaignId", views, metadata)
  SELECT (src.data2->>'campaignId')::bigint, (src.data->>'views')::integer, to_jsonb(src.data->>'metadata')
  FROM (
    SELECT *
    FROM jsonb_array_elements(
      '${stringifiedData}'
    ) as src(data2)
    LEFT JOIN upsert ON src.data2->>'campaignId'::text = upsert.data->>'campaignId'::text
    WHERE upsert.data IS NULL
  ) src
`;

console.log(sql);

const run = async () => {
  await client.connect();
  await client.query(sql);
  await client.end();
};

run();
