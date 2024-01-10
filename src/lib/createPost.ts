import axios from 'axios';
import { BASE_URL } from './../mocks/handlers';

export type Post = {
  userId: number;
  title: string;
  body: string;
};

export const createPost = async (data: Post) => {
  const { userId } = data;
  if (!userId) {
    return {};
  }
  const response = await axios.post(`${BASE_URL}/posts`, { data });
  return response.data;
};
