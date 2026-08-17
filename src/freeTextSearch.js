// Builds a WHERE clause for free-text search across multiple columns.
// Kept separate from buildWhereClause() because search terms can
// contain spaces/punctuation that don't fit the simple key=value model.

export function buildSearchClause(columns, searchTerm) {
  const conditions = columns
    .map((col) => `${col} LIKE '%${searchTerm}%'`)
    .join(' OR ');
  return `WHERE ${conditions}`;
}