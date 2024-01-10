export const addAll = (numbers: number[]): number => {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers[0] + addAll(numbers.slice(1));
};

export const reverseStr = (str: string) => {
  return str.split('').reverse().join('');
};

export const quickSort = (arr: number[]): number[] => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};
