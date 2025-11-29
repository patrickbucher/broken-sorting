export function bubbleSort(numbers: Array<number>): Array<number> {
  const xs = [...numbers];
  const n = xs.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n - 1; j++) {
      if (xs[j] > xs[j + 1]) {
        swap(xs, j, j + 1);
      }
    }
  }
  return xs;
}

export function insertionSort(numbers: Array<number>): Array<number> {
  const xs = [...numbers];
  const n = xs.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (xs[i] < xs[j]) {
        swap(xs, i, j);
      }
    }
  }
  return xs;
}

export function selectionSort(numbers: Array<number>): Array<number> {
  const xs = [...numbers];
  const n = xs.length;
  for (let i = 0; i < n; i++) {
    let min = Number.POSITIVE_INFINITY;
    let minIndex = i;
    for (let j = i; j < n; j++) {
      if (xs[j] < min) {
        min = xs[j];
        minIndex = j;
      }
    }
    if (minIndex != i) {
      swap(xs, i, minIndex);
    }
  }
  return xs;
}

export function isSorted(numbers: Array<number>): boolean {
  const n = numbers.length;
  if (n <= 1) {
    return true;
  }
  for (let i = 1; i < n; i++) {
    if (numbers[i] > numbers[i + 1]) {
      return false;
    }
  }
  return true;
}

function swap(numbers: Array<number>, i: number, j: number) {
  const swap = numbers[i];
  numbers[i] = numbers[j];
  numbers[j] = swap;
}
