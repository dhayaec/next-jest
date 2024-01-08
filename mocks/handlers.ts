import { rest } from 'msw';

export const BASE_URL = 'https://jsonplaceholder.typicode.com';

const todos = [
  {
    userId: 1,
    id: 1,
    title: 'todo one',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'todo two',
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: 'todo three',
    completed: false,
  },
];

export const handlers = [
  rest.get(BASE_URL + '/todos', (req, res, ctx) => {
    const qp = req.url.searchParams;
    return res(ctx.status(200), ctx.json(todos));
  }),
];
