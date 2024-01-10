import { addAll, reverseStr } from './utils';

describe('utils', () => {
  test('addAll should add all numbers', () => {
    expect(addAll([1, 2, 3])).toEqual(6);
  });
  test('reverseStr', () => {
    expect(reverseStr('abc')).toEqual(6);
  });
});
