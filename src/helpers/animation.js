export const getScrollThresholds = maxIterations => {
  let thresholdList = [];
  for (let step = 0; step <= 1; step = step + maxIterations) {
    thresholdList.push(step);
  }
  return thresholdList;
};
