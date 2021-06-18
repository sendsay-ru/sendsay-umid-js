/* eslint-disable import/no-extraneous-dependencies */

const { exec } = require('child_process');
const rollup = require('rollup');
const config = require('../rollup.config');

const watcher = rollup.watch(config);

watcher.on('event', (event) => {
  switch (event.code) {
    case 'START': {
      console.log('Compiling...');
      break;
    }

    case 'END': {
      console.log('Compiled successfully');
      exec('yarn exec gulp --tasks');
      break;
    }

    case 'ERROR': {
      console.log('Failed to compile');
      break;
    }

    default:
      break;
  }
});
