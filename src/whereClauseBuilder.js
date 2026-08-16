export function buildWhereClause(conditions = {}) {
  const keys = Object.keys(conditions);
  if (keys.length === 0) return { clause: '', values: [] };

  const clause = 'WHERE ' + keys.map((key, i) => `${key} = $${i + 1}`).join(' AND ');
  const values = keys.map((key) => conditions[key]);
  return { clause, values };
}