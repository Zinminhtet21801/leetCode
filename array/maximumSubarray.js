//leetcode.com/problems/maximum-subarray/description/
function maxSubArray(nums) {
  let prev = 0;
  let max = -Number.MAX_VALUE;

  for (let i = 0; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i]);
    max = Math.max(max, prev);
    console.log({ prev, max, num: nums[i] });
  }
  return max;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
// console.log(maxSubArray([1]));
