import { setupServer } from 'msw/node';
import { postHandlers, todoHandlers } from './handlers';

export const server = setupServer(...todoHandlers, ...postHandlers);
