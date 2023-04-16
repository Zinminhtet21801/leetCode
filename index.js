const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "a", "d", "e"];

function findCommonItem(arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) {
    return false;
  }
  const map1 = new Map(arr1.map((item, index) => [item, index]));
  const map2 = new Map(arr2.map((item, index) => [item, index]));
  const shortMap = map1.size < map2.size ? map1 : map2;
  const longMap = map1.size < map2.size ? map2 : map1;
  for (const [key, value] of shortMap) {
    if (longMap.has(key)) {
      return true;
    }
  }
  return false;
}

console.log(findCommonItem(array1, array2));


