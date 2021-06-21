import { genUMID } from './utils';

let UMID_KEY = 'SENDSAY_UMID_KEY';

const get = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      let umid = localStorage.getItem(UMID_KEY);

      if (!umid) {
        umid = genUMID();
        localStorage.setItem(UMID_KEY, umid);
      }

      resolve(umid);
    } catch (e) {
      reject(e);
    }
  });
};

const setKey = (key: string): void => {
  if (!key) {
    return;
  }

  UMID_KEY = key;
};

export const UMID = {
  get,
  setKey,
};
