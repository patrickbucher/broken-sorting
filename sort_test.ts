import { assertEquals } from "@std/assert";
import { bubbleSort, insertionSort, isSorted, selectionSort } from "./sort.ts";
import { generateRandomNumbers } from "./utils.ts";

const randLower = 1;
const randUpper = 999_999;
const randSize = 20_000;

Deno.test("Bubble Sort", () => {
  const numbers = [9, 1, 8, 0, 2, 7, 3, 6, 4, 5];
  const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  assertEquals(bubbleSort(numbers), expected);
});

Deno.test("Bubble Sort Randomized", () => {
  const numbers = generateRandomNumbers(randLower, randUpper, randSize);
  const expected = numbers.toSorted((a, b) => a - b);
  assertEquals(bubbleSort(numbers), expected);
});

Deno.test("Insertion Sort", () => {
  const numbers = [9, 1, 8, 0, 2, 7, 3, 6, 4, 5];
  const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  assertEquals(insertionSort(numbers), expected);
});

Deno.test("Insertion Sort Randomized", () => {
  const numbers = generateRandomNumbers(randLower, randUpper, randSize);
  const expected = numbers.toSorted((a, b) => a - b);
  assertEquals(insertionSort(numbers), expected);
});

Deno.test("Selection Sort", () => {
  const numbers = [9, 1, 8, 0, 2, 7, 3, 6, 4, 5];
  const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  assertEquals(selectionSort(numbers), expected);
});

Deno.test("Selection Sort Randomized", () => {
  const numbers = generateRandomNumbers(randLower, randUpper, randSize);
  const expected = numbers.toSorted((a, b) => a - b);
  assertEquals(selectionSort(numbers), expected);
});

Deno.test("Sorted", () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  assertEquals(isSorted(numbers), true);
});

Deno.test("Unsorted", () => {
  const numbers = [9, 1, 8, 0, 2, 7, 3, 6, 4, 5];
  assertEquals(!isSorted(numbers), true);
});
