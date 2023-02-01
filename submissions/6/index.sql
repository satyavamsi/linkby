SELECT a.id AS account_id, 
       a.name AS account_name, 
       to_char(c.created_at, 'YYYY-MM') AS month, 
       count(c.id) AS num_clicks
FROM public.accounts a
JOIN public.campaigns cmp ON a.id = cmp.account_id
JOIN public.clicks c ON cmp.id = c.campaign_id
WHERE a.active = true 
  AND a.created_at >= NOW() - INTERVAL '6 months'
  AND cmp.start_date < cmp.end_date - INTERVAL '1 week'
GROUP BY a.id, a.name, to_char(c.created_at, 'YYYY-MM');
