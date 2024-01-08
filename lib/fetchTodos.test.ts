import { fetchTodos } from './fetchTodos';

describe('Todo', () => {
  it('should return correct numbers of todos', async () => {
    const todos = await fetchTodos();
    expect(todos.length).toEqual(3);
  });
});
