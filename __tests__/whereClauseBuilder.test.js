import { buildWhereClause } from '../src/whereClauseBuilder';

test('returns an empty clause for no conditions', () => {
  expect(buildWhereClause()).toEqual({ clause: '', values: [] });
});

test('builds a parameterized clause from conditions', () => {
  const result = buildWhereClause({ id: 1, active: true });
  expect(result.clause).toBe('WHERE id = $1 AND active = $2');
  expect(result.values).toEqual([1, true]);
});