const getScrollThresholds = scrollIncrement => {
  let thresholdList = [];
  for (let step = 0; step <= 1; step = step + scrollIncrement) {
    thresholdList.push(step);
  }
  return thresholdList;
};

export const multiThresholdArray = getScrollThresholds(0.001);
