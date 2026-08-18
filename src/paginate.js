export function paginate(page = 1, pageSize = 20) {
  const limit = pageSize;
  const offset = (page - 1) * pageSize;
  return `LIMIT ${limit} OFFSET ${offset}`;
}