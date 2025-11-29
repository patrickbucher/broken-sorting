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
    numbers.push(Math.floor(Math.random() * (upper - lower + 1)) + lower);
  }
  return numbers;
}
