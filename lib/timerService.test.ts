// timerService.test.ts

import { delayFunction } from './timerService';

jest.useFakeTimers();

describe('delayFunction', () => {
  beforeEach(() => {
    jest.clearAllTimers(); // Reset timers before each test
  });

  it('calls the callback after a specified delay', () => {
    // Arrange
    const callback = jest.fn();
    const delay = 1000;

    // Act
    delayFunction(callback, delay);
    delayFunction(callback, delay);

    // Assert
    expect(callback).not.toHaveBeenCalled(); // Callback should not be called immediately

    // Fast-forward time
    jest.advanceTimersByTime(delay);

    // Assert
    expect(callback).toHaveBeenCalled(); // Callback should be called after the delay
    expect(callback).toHaveBeenCalledTimes(2); // Callback should be called 2 times
  });
});
