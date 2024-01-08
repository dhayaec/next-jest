import { rest } from 'msw';
import { post } from '../lib/createPost.test';
import { todos } from './todosData';

export const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const todoHandlers = [
  rest.get(BASE_URL + '/todos', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(todos));
  }),
];

export const postHandlers = [
  rest.post(BASE_URL + '/posts', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(post));
  }),
];
