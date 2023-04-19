function containsDuplicate(nums) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] === undefined) {
      hash[nums[i]] = false;
    } else {
      hash[nums[i]] = true;
    }
  }
  for (let i in hash) {
    if (hash[i]) {
      return true;
    }
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log(containsDuplicate([1]));
console.log(containsDuplicate([2, 14, 18, 22, 22]));
