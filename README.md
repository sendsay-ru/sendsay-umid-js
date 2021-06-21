# sendsay-umid-js

Module for generate unique user id and save it in LocalStorage.

Key by default `SENDSAY_UMID_KEY`

## Usage

### Browser

```
  <script src="sendsay-umid.js"></script>
```

```
  <script>
    window.SENDSAY.UMID.get().then((umid) => console.log('current umid:', umid));
  </script>
```

### Modules

```
  yarn add git+https://github.com/sendsay-ru/sendsay-umid-js.git
```

```
  import { UMID } from 'sendsay-umid';

  const umid = UMID.get();
```

## API

### get(): Promise<string>

Get the current id. If it does not exist, then generate and write to localStorage.

```
  const umid = await UMID.get();
```

### setKey(key: string): void

Set key for LocalStorage

```
  UMID.setKey('MY_KEY');
```
