const DIRECTIONS = ['ASC', 'DESC'];

export function buildOrderBy(column, direction = 'ASC') {
  const dir = DIRECTIONS.includes(direction.toUpperCase()) ? direction.toUpperCase() : 'ASC';
  return `ORDER BY ${column} ${dir}`;
}