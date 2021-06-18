/* eslint-disable @typescript-eslint/no-var-requires */
const commonjs = require('@rollup/plugin-commonjs');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const { babel } = require('@rollup/plugin-babel');
const { terser } = require('rollup-plugin-terser');
const pkg = require('./package.json');

const GLOBAL_NAME = 'SENDSAY';

const extensions = [
  '.js', '.ts',
];

module.exports = {
  input: './src/index.ts',

  external: [],

  plugins: [
    nodeResolve({ extensions }),

    commonjs(),

    babel({
      extensions,
      babelHelpers: 'runtime',
      include: ['src/**/*'],
    }),
  ],

  output: [{
    file: pkg.main,
    format: 'cjs',
  }, {
    file: pkg.module,
    format: 'es',
  }, {
    file: pkg.browser,
    name: GLOBAL_NAME,
    format: 'iife',
    globals: {},
  }, {
    file: pkg.min,
    name: GLOBAL_NAME,
    format: 'iife',
    plugins: [terser()],
    globals: {},
  }],
};
