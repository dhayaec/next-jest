import {
  addAll,
  lazyRange,
  quickSort,
  reverseStr,
  simpleGenerator,
} from './utils';

describe('utils', () => {
  test('addAll should add all numbers', () => {
    expect(addAll([1, 2, 3])).toEqual(6);
  });
  test('reverseStr', () => {
    expect(reverseStr('abc')).toEqual('cba');
  });
});

describe('QuickSort', () => {
  it('should sort an array of numbers in ascending order', () => {
    const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const sortedArray = quickSort(unsortedArray);
    const expectedArray = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9];
    expect(sortedArray).toEqual(expectedArray);
  });

  it('should handle an empty array', () => {
    const unsortedArray: number[] = [];
    const sortedArray = quickSort(unsortedArray);
    expect(sortedArray).toEqual([]);
  });

  it('should handle an array with a single element', () => {
    const unsortedArray = [42];
    const sortedArray = quickSort(unsortedArray);
    expect(sortedArray).toEqual([42]);
  });

  it('should handle an array with repeated elements', () => {
    const unsortedArray = [5, 5, 5, 5, 5, 5, 5, 5, 5];
    const sortedArray = quickSort(unsortedArray);
    expect(sortedArray).toEqual([5, 5, 5, 5, 5, 5, 5, 5, 5]);
  });

  it('should handle an array that is already sorted', () => {
    const unsortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const sortedArray = quickSort(unsortedArray);
    expect(sortedArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should handle a large array', () => {
    const unsortedArray = Array.from({ length: 1000 }, () =>
      Math.floor(Math.random() * 1000)
    );
    const sortedArray = quickSort(unsortedArray);
    expect(sortedArray).toEqual([...unsortedArray].sort((a, b) => a - b));
  });
});

describe('simpleGenerator', () => {
  it('should generate values in sequence', () => {
    const generator = simpleGenerator();

    expect(generator.next().value).toBe(1);
    expect(generator.next().value).toBe(2);
    expect(generator.next().value).toBe(3);
    expect(generator.next().value).toBeUndefined();
  });
});

describe('lazyRange', () => {
  it('should generate values in the specified range', () => {
    const generator = lazyRange(1, 5);
    const result = Array.from(generator);

    expect(result).toEqual([1, 2, 3, 4]);
  });
});
