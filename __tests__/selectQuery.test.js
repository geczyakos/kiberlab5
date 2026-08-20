import { selectQuery } from '../src/selectQuery';

test('builds a basic select query', () => {
  expect(selectQuery('users')).toBe('SELECT * FROM "users"');
});

test('builds a select query with specific columns', () => {
  expect(selectQuery('users', ['id', 'email'])).toBe('SELECT "id", "email" FROM "users"');
});