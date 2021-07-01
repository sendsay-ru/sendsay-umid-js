import { genUMID } from './utils';

let UMID_KEY = 'SENDSAY_UMID_KEY';

const get = async (): Promise<string> => {
  let umid = localStorage.getItem(UMID_KEY);

  if (!umid) {
    umid = await genUMID();
    localStorage.setItem(UMID_KEY, umid);
  }

  return umid;
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
