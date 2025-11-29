export function generateRandomNumbers(
  lower: number,
  upper: number,
  n: number
): Array<number> {
  const numbers: Array<number> = [];
  if (lower >= upper || n < 1) {
    return numbers;
  }
  for (let i = 0; i < n; i++) {
    numbers.push(generateRandomNumber(lower, upper));
  }
  return numbers;
}

function generateRandomNumber(lower: number, upper: number): number {
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}
