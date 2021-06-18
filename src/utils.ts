const genRandomHash = (len: number): string => (
  Math.random().toString(36).substr(2, len).toUpperCase()
);

export const genUMID = (): string => (
  Array(4).fill(null).map(() => genRandomHash(8)).join('-')
);
