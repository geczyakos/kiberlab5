import { escapeIdentifier } from './escapeIdentifier';

export function updateQuery(table, data, whereClause) {
  const keys = Object.keys(data);
  const setClause = keys.map((key, i) => `${escapeIdentifier(key)} = $${i + 1}`).join(', ');
  const values = keys.map((key) => data[key]);
  return {
    text: `UPDATE ${escapeIdentifier(table)} SET ${setClause} ${whereClause.clause}`,
    values: [...values, ...whereClause.values],
  };
}