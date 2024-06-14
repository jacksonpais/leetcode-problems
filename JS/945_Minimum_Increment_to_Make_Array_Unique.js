var minIncrementForUnique = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let steps = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        nums[j] += 1;
        steps += 1;
      } else {
        break;
      }
    }
  }
  return steps;
};

let nums = [3, 2, 1, 2, 1, 7];
minIncrementForUnique(nums);
