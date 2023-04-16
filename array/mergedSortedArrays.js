function mergeSortedArrays(arr1, arr2) {
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  const shortArr = arr1.length < arr2.length ? [...arr1] : [...arr2];
  const longArr = arr1.length >= arr2.length ? [...arr1] : [...arr2];
  const result = [];
  let innerIndex = 0;
  let bigger = false;
  for (let i = 0; i < longArr.length; i++) {
    while (innerIndex < shortArr.length) {
      // console.log({
      //   innerIndex,
      //   i,
      //   longArr: longArr[i],
      //   shortArr: shortArr[innerIndex],
      //   result,
      // });
      if (arr1.length !== arr2.length && innerIndex === i - 1) {
        result.push(longArr[i]);
        break;
      }
      if (bigger) {
        innerIndex++;
        bigger = false;
      }
      if (longArr[i] < shortArr[innerIndex]) {
        bigger = false;
        result.push(longArr[i]);
        break;
      } else if (longArr[i] === shortArr[innerIndex]) {
        if (arr1.length === arr2.length && innerIndex === longArr.length) {
          result.push(longArr[i]);
          result.push(shortArr[innerIndex]);
          continue;
        } else {
          result.push(longArr[i]);
          bigger = false;
          innerIndex++;
          continue;
        }
      } else {
        bigger = true;

        result.push(shortArr[innerIndex]);
        continue;
      }
    }
  }

  return result;
}

// console.log(mergeSortedArrays([4, 6, 30, 31], [0, 3, 4, 31]));
console.log(mergeSortedArrays([0, 3, 4, 31, 32], [4, 6, 30, 31, 50]));
// console.log(mergeSortedArrays([4, 6, 30, 31, 50], [0, 3, 4, 31, 32]));
