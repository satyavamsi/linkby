const projects = [
  { id: 1, name: "Option 1", probability: 0.3 },
  { id: 2, name: "Option 2", probability: 0.5 },
  { id: 3, name: "Option 3", probability: 0.15 },
  { id: 4, name: "Option 4", probability: 0.05 },
];

const RUNS = 500;

const getRandom = () => {
  const result = {};
  const ids = projects.map((p) => p.id);
  const options = projects.map((p) => p.name);
  const probability = projects.map((p) => p.probability);
  const len = ids.length;

  let probSum = [];

  for (let i = 0; i < len; i++) {
    probSum.push(0);
  }

  probSum[0] = probability[0];
  for (let i = 1; i < len; i++) {
    probSum[i] = probSum[i - 1] + probability[i];
  }

  for (let i = 0; i < RUNS; i++) {
    let randomVal = Math.random(0, 1);
    let val = random(randomVal, probSum, len, ids);
    result[val] = result[val] ? result[val] + 1 : 1;
  }

  for (let i = 0; i < ids.length; i++) {
    console.log(options[i] + " ~ " + result[ids[i]]);
  }
};

const random = (randomVal, probSum, len, ids) => {
  if (randomVal < probSum[0]) {
    return ids[0];
  }
  for (let i = 1; i < len; i++) {
    if (randomVal > probSum[i - 1] && randomVal <= probSum[i]) {
      return ids[i];
    }
  }
  return -1;
};

getRandom();
