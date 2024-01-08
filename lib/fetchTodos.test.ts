import { rest } from 'msw';
import { BASE_URL } from '../mocks/handlers';
import { server } from '../mocks/server';
import { fetchTodos } from './fetchTodos';

describe('Todo', () => {
  it('should return correct numbers of todos', async () => {
    const todos = await fetchTodos();
    expect(todos.length).toEqual(3);
  });

  it('should return correct numbers of todos', async () => {
    server.use(
      rest.get(BASE_URL + '/todos', (req, res, ctx) => {
        return res(ctx.status(500, 'failed'), ctx.json([]));
      })
    );
    try {
      await fetchTodos();
    } catch (err) {
      expect(err).toEqual({ message: 'error', status: 500 });
    }
  });
});
