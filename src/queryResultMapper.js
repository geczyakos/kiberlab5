export function mapRows(rows, mapper) {
  return rows.map((row) => (typeof mapper === 'function' ? mapper(row) : row));
}