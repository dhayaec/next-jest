import { rest } from 'msw';
import { todos } from './todosData';

export const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const todoHandlers = [
  rest.get(BASE_URL + '/todos', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(todos));
  }),
];
