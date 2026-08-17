import { escapeIdentifier } from './escapeIdentifier';

export function insertQuery(table, data) {
  const keys = Object.keys(data);
  const columns = keys.map(escapeIdentifier).join(', ');
  const placeholders = keys.map((_, i) => `$${i + 1}`).join(', ');
  const values = keys.map((key) => data[key]);
  return {
    text: `INSERT INTO ${escapeIdentifier(table)} (${columns}) VALUES (${placeholders})`,
    values,
  };
}