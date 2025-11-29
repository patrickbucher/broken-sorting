import { bubbleSort, insertionSort, selectionSort } from "./sort.ts";

function generateRandomNumbers(
  lower: number,
  upper: number,
  n: number
): Array<number> {
  const numbers: Array<number> = [];
  if (lower >= upper || n < 1) {
    return numbers;
  }
  for (let i = 0; i < n; i++) {
    numbers.push(Math.floor(Math.random() * (upper - lower + 1)) + lower);
  }
  return numbers;
}

const numbers = generateRandomNumbers(1, 100, 25);
console.log(`Original:       ${numbers.join(" ")}`);
console.log(`Built-In Sort:  ${numbers.toSorted((a, b) => a - b).join(" ")}`);
console.log(`Bubble Sort:    ${bubbleSort(numbers).join(" ")}`);
console.log(`Insertion Sort: ${insertionSort(numbers).join(" ")}`);
console.log(`Selection Sort: ${selectionSort(numbers).join(" ")}`);
