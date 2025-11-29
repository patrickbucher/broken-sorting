export function bubbleSort(numbers: Array<number>): Array<number> {
  const xs = [...numbers];
  const n = xs.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (xs[j] > xs[j + 1]) {
        const swap = xs[j + 1];
        xs[j + 1] = xs[j];
        xs[j] = swap;
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
        const swap = xs[i];
        xs[i] = xs[j];
        xs[j] = swap;
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
      const swap = xs[i];
      xs[i] = xs[minIndex];
      xs[minIndex] = swap;
    }
  }
  return xs;
}
