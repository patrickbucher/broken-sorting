import { bubbleSort, insertionSort, selectionSort } from "./sort.ts";
import { generateRandomNumbers } from "./utils.ts";

const numbers = generateRandomNumbers(1, 100, 25);
console.log(`Original:       ${numbers.join(" ")}`);
console.log(`Built-In Sort:  ${numbers.toSorted((a, b) => a - b).join(" ")}`);
console.log(`Bubble Sort:    ${bubbleSort(numbers).join(" ")}`);
console.log(`Insertion Sort: ${insertionSort(numbers).join(" ")}`);
console.log(`Selection Sort: ${selectionSort(numbers).join(" ")}`);
