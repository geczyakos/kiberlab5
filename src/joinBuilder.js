import { escapeIdentifier } from './escapeIdentifier';

export function buildJoin(type, table, onClause) {
  const validTypes = ['INNER', 'LEFT', 'RIGHT', 'FULL'];
  const joinType = validTypes.includes(type) ? type : 'INNER';
  return `${joinType} JOIN ${escapeIdentifier(table)} ON ${onClause}`;
}