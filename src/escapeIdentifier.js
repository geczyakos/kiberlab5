const IDENTIFIER_RE = /^[a-zA-Z_][a-zA-Z0-9_]*$/;

export function escapeIdentifier(name) {
  if (!IDENTIFIER_RE.test(name)) {
    throw new Error(`Invalid identifier: ${name}`);
  }
  return `"${name}"`;
}