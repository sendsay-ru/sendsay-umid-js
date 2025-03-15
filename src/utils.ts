import { getFingerprintId } from './fingerprintjs';

const genRandomHash = (len: number): string => (
  Math.random().toString(36).substr(2, len).toUpperCase()
);

const fingerprintIdToHash = (str: string): string => (
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  str.match(/([a-z0-9]){4}/g)!.join('-').toUpperCase()
);

export const genUMID = async (): Promise<string> => {
  try {
    const fingerprintId = await getFingerprintId();
    return fingerprintIdToHash(fingerprintId);
  } catch {
    return Array(4).fill(null).map(() => genRandomHash(8)).join('-');
  }
};
