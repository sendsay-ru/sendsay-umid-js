var genRandomHash = function genRandomHash(len) {
  return Math.random().toString(36).substr(2, len).toUpperCase();
};

var genUMID = function genUMID() {
  return Array(4).fill(null).map(function () {
    return genRandomHash(8);
  }).join('-');
};

var UMID_KEY = 'SENDSAY_UMID_KEY';

var get = function get() {
  return new Promise(function (resolve, reject) {
    try {
      var umid = localStorage.getItem(UMID_KEY);

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

var setKey = function setKey(key) {
  if (!key) {
    return;
  }

  UMID_KEY = key;
};

var UMID = {
  get: get,
  setKey: setKey
};

export { UMID };
