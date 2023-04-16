// only works with distinct numbers
// function twoSum(nums, target) {
//   const mapNums = new Map(nums.map((num, index) => [num, index]));
//   let result = null;
//   for ([index, number] of mapNums) {
//     let remainder = target - index;
//     if (mapNums.has(remainder) && index !== remainder) {
//       return [number, mapNums.get(remainder)];
//     }
//   }
//   return result;
// }

function twoSum(nums, target) {
  let result = null;
  if (nums.length === 2) {
    if (nums[0] === nums[1]) {
      return [0, 1];
    }
  }
  const newObject = {};
  for (let i = 0; i < nums.length; i++) {
    newObject[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    let remainder = target - nums[i];
    if (newObject[remainder]) {
      return [i, newObject[remainder]];
    }
  }
  return result;
}

// function twoSum(nums, target) {
//   let hash = {};
//   for (let i = 0; i < nums.length; i++) {
//     hash[nums[i]] = i;
//   }
//   console.log(hash);

//   for (let i = 0; i < nums.length; i++) {
//     if (
//       hash[target - nums[i]] !== i &&
//       hash[target - nums[i]] &&
//       target - nums[i] !== undefined
//     ) {
//       return [i, hash[target - nums[i]]];
//     }
//   }
// }

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 4, 3], 6));
