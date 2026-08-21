# query-builder-toolkit

A small, dependency-light SQL query builder for Node.js: SELECT/INSERT/UPDATE
builders, parameterized WHERE clauses, joins, pagination, and transaction helpers.

## Installation

​```
npm install query-builder-toolkit
​```

## Utilities

- `escapeIdentifier` – safely quotes a table/column name
- `selectQuery` – builds a SELECT statement
- `buildWhereClause` – builds a parameterized WHERE clause
- `insertQuery` – builds a parameterized INSERT statement
- `buildSearchClause` – builds a free-text search WHERE clause
- `updateQuery` – builds a parameterized UPDATE statement
- `buildOrderBy` – builds an ORDER BY clause
- `isSafeIdentifier` – validates a dynamically-supplied identifier
- `paginate` – builds a LIMIT/OFFSET clause
- `buildJoin` – builds a JOIN clause
- `withTransaction` – wraps a function in BEGIN/COMMIT/ROLLBACK
- `createPoolConfig` – default connection pool configuration
- `registerShutdownHandler` – graceful SIGTERM handling
- `mapRows` – maps raw query result rows

## Usage

​```js
import { selectQuery, buildWhereClause } from 'query-builder-toolkit';

const { clause, values } = buildWhereClause({ id: 42 });
const sql = `${selectQuery('users')} ${clause}`;
// sql: SELECT * FROM "users" WHERE id = $1, values: [42]
​```

## License

MIT