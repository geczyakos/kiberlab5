export function paginate(page = 1, pageSize = 20) {
  const safePage = Math.max(1, page);
  const limit = pageSize;
  const offset = (safePage - 1) * pageSize;
  return `LIMIT ${limit} OFFSET ${offset}`;
}