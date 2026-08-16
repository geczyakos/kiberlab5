import { escapeIdentifier } from './escapeIdentifier';

export function selectQuery(table, columns = ['*']) {
  const cols = columns.map((c) => (c === '*' ? '*' : escapeIdentifier(c))).join(', ');
  return `SELECT ${cols} FROM ${escapeIdentifier(table)}`;
}