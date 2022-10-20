var twoSum = function (nums, target) {
  let array = {};
  for (var i = 0; i < nums.length; i++) {
    if (array.hasOwnProperty(target - nums[i])) {
      return [array[target - nums[i]], i];
    }
    array[nums[i]] = i;
  }
  return [null, null];
};

function main() {
  const nums = [3, 2, 4];
  const target = 6;
  console.log(twoSum(nums, target));
}

main();
