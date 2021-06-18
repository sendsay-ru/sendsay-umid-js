import { genUMID } from './utils';

const UMID_KEY = 'SENDSAY_UMID_KEY';

export const UMID = {
  get: (): Promise<string> => {
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
  }
}
