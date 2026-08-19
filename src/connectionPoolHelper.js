export function createPoolConfig(overrides = {}) {
  return {
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    ...overrides,
  };
}