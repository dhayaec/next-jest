import { add } from './add';

test('Test functions that import server-only', () => {
  const result = add(1, 2);
  expect(result).toBe(3);
});
