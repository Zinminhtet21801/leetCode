function moveZeroes(nums) {
  let zeroes = 0;
  let newArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroes++;
    } else {
      newArray.push(nums[i]);
    }
  }
  for (let i = 0; i < zeroes; i++) {
    newArray.push(0);
  }
  return newArray;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
console.log(moveZeroes([0, 0]));
