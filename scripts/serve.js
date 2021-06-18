/* eslint-disable import/no-extraneous-dependencies, no-console */

const superstatic = require('superstatic').server;

console.log('Use a static server in production instead...');
console.log();

const DEFAULT_PORT = process.env.PORT || 7878;

const app = superstatic({ port: DEFAULT_PORT });

app.listen(() => {
  console.log(`Listening on http://localhost:${DEFAULT_PORT}`);
});
