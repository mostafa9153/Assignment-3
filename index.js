//First Question

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(celsiusToFahrenheit(0)); // 32
console.log(celsiusToFahrenheit(25)); // 77

//Second Question

function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false

//Third Question

function sum(a, b) {
  return a + b;
}

console.log(sum(3, 4)); // 7
console.log(sum(10, 20)); // 30

//Forth Question

function findSmallestNum(arr) {
  let SmallestNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < SmallestNum) {
      SmallestNum = arr[i];
    }
  }

  return SmallestNum;
}

console.log(findSmallestNum([3, 5, 1, 9])); // 1
console.log(findSmallestNum([-1, -5, 0, 10])); // -5

//Fifth Question

function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (const char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("hello world")); // 3
console.log(countVowels("Javascript")); // 3

//Sixth Question

function getFirstElement(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  return arr[0];
}
console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"

//Seventh Question

function isArrayEmpty(arr) {
  return arr.length === 0;
}

console.log(isArrayEmpty([])); // true
console.log(isArrayEmpty([1, 2, 3])); // false

//Eighth Question

function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorialize(num - 1);
}

console.log(factorialize(5)); // 120
console.log(factorialize(7)); // 5040

//Ninth Question

function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"

//tenth Question

function toLowerCase(str) {
  let lowerCaseStr = "";
  for (let i = 0; i < str.length; i++) {
    lowerCaseStr += str[i].toLowerCase();
  }
  return lowerCaseStr;
}

console.log(toLowerCase("HELLO WORLD")); // "hello world"
console.log(toLowerCase("JavaScript")); // "javascript"

// Eleventh Question

function stringLength(str) {
  return str.length;
}

console.log(stringLength("hello")); // 5
console.log(stringLength("world")); // 5

//Twelfth Question

function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]

// Thirteenth Question

function getLastElement(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Argument must be an array");
  }

  return arr[arr.length - 1];
}
console.log(getLastElement([1, 2, 3])); // 3
console.log(getLastElement(["a", "b", "c"])); // "c"

//fourteenth Question

function getFirstCharacter(str) {
  if (!str) {
    return "";
  }
  return str.charAt(0);
}
console.log(getFirstCharacter("hello")); // "h"
console.log(getFirstCharacter("world")); // "w"

//

// Fifteenth Question

function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([-1, -2, -3, -4])); // -10
console.log(sumArray([1.5, 2.5, 3.5])); // 7.5
