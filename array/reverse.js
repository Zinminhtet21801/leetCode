//Time-Complexity - O(n)
//Space-Complexity - O(1)
function reverse(str) {
  const splittedString = str.split("");
  const array = [];
  for (let i = splittedString.length - 1; i >= 0; i--) {
    array.push(splittedString[i]);
  }
  return array.join("");
}

// doesnt work because of js's stupid pass by reference for objects and arrays
function reverse2(str) {
  const splittedString = str.split("");
  for (let i = 0; i < splittedString.length / 2; i++) {
    const temp = splittedString[i];
    splittedString[i] = splittedString[splittedString.length - i - 1];
    splittedString[splittedString.length - 1] = temp;
  }
  return splittedString.join("");
}

function reverse3(str) {
  return str.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");
}

console.log(reverse("Hello"));
console.log(reverse2("Hello"));
console.log(reverse3("Hello"));
console.log("hello".split("").reverse().join(""));
