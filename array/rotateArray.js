// function rotate(nums, k) {
//   const result = [];
//   let pushCount = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (pushCount < k) {
//       result.push(nums[nums.length - k + i]);
//       pushCount++;
//     }
//   }
//   for (let i = 0; i < nums.length - k; i++) {
//     result.push(nums[i]);
//   }
//   return result;
// }

// function rotate(nums, k) {
//   const length = nums.length;
//   let pushCount = 0;
//   for (let i = 0; i < length; i++) {
//     if (pushCount < k) {
//       nums.push(nums[nums.length - k]);
//       pushCount++;
//     }
//   }
//   for (let i = 0; i < length - k; i++) {
//     nums.push(nums[i]);
//   }
//   return nums.splice(length);
// }

// function rotate(nums, k) {
//   const isEven = k % 2 === 0 ? 0 : 1;
//   const splicedArray = nums.splice(0, k + isEven);
//   nums.push(...splicedArray);
//   return nums;
// }

function rotate(nums, k) {
  if (nums.length < k) {
    k %= nums.length;
  }
  const splicedArray = nums.splice(-k, k); // O(n)
  const firstPart = nums.splice(0, nums.length); // O(n)
  nums.push(...splicedArray, ...firstPart);
  return nums;
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([-1, -100, 3, 99], 2));
console.log(rotate([1, 2], 3));
console.log(rotate([1, 2, 3], 0));
