// postService.test.ts

import axios from 'axios';
import { getPostById } from './postService';

// Mock Axios
jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

// Mock data
const mockPost: any = {
  userId: 1,
  id: 1,
  title: 'Mocked Post',
  body: 'This is a mocked post for testing purposes.',
};

// Test case
describe('getPostById', () => {
  it('fetches successfully data from an API', async () => {
    // Mock Axios response
    mockedAxios.get.mockResolvedValueOnce({ data: mockPost });

    // Call the function
    const result = await getPostById(1);

    // Assert the result
    expect(result).toEqual(mockPost);
  });

  it('handles errors when fetching data from an API', async () => {
    // Mock Axios response with an error
    const errorMessage = 'Network Error';
    mockedAxios.get.mockRejectedValueOnce(new Error(errorMessage));

    const consoleSpy = jest.spyOn(console, 'log');

    // Call the function
    const result = await getPostById(1);

    // Assert the result
    expect(result).toBeNull();
    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith(errorMessage);
    jest.clearAllMocks();
  });
});
