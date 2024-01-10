export const addAll = (numbers: number[]): number => {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers[0] + addAll(numbers.slice(1));
};

export const reverseStr = (str: string) => {
  return str.split('').reverse().join('');
};
