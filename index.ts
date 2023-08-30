// 1. Write a program that uses filter to remove all negative numbers from an array of numbers,
function removeNegativeNumbers(numbers: number[]): number[] {
    return numbers.filter(num => num >= 0);
}

const inputArray: number[] = [3, -2, 5, -8, 0, 9, -1];
const filteredArray: number[] = removeNegativeNumbers(inputArray);

console.log("Original Array:", inputArray);
console.log("Filtered Array:", filteredArray);

// 2. Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
const originalArray: number[] = [1, 2, 3, 4, 5];

const doubledArray: number[] = originalArray.map(num => num * 2);

console.log("Original Array:", originalArray);
console.log("Doubled Array:", doubledArray);

// 3. Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
const fruits: string[] = ["apple", "banana", "cherry", "date", "grape"];

const longFruits: string[] = fruits.filter(fruit => fruit.length > 5);

console.log("Original Fruits:", fruits);
console.log("Long Fruits:", longFruits);

// 4. Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenSquares: number[] = numbers
    .filter(num => num % 2 === 0) // Filter even numbers
    .map(evenNum => evenNum * evenNum); // Map to their squares

console.log("Original Numbers:", numbers);
console.log("Even Squares:", evenSquares);

// 5. Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
const celsiusTemperatures: number[] = [0, 10, 20, 30, 40];

const fahrenheitTemperatures: number[] = celsiusTemperatures.map(celsius => (celsius * 9/5) + 32);

console.log("Celsius Temperatures:", celsiusTemperatures);
console.log("Fahrenheit Temperatures:", fahrenheitTemperatures);

// 6. Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
const number = [3, 6, 9, 12, 15, 18];

const doubledOddNumbers = numbers
  .filter(number => number % 2 !== 0) // Filter out even numbers
  .map(oddNumber => oddNumber * 2);   // Double the odd numbers

console.log(doubledOddNumbers); // Output: [6, 18, 30]

// 7. Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
const names = ["Alice", "Bob", "Charlie", "David", "Emily"];

names.forEach(name => {
  console.log(name + "!");
});







