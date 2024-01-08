import axios from 'axios';
import { BASE_URL } from './../mocks/handlers';

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const fetchTodos = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/todos`);
    return response.data as Todo[];
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return [];
  }
};
