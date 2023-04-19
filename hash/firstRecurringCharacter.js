function firstRecurringCharacter(nums) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = true;
    } else {
      return nums[i];
    }
  }
  return undefined;
}

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 3, 4, 5]));
console.log(firstRecurringCharacter([2, 2]));

// 7/13
