import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const GLOBAL_NAME = 'SENDSAY';

const extensions = [
  '.js', '.ts',
];

const ENTRY_POINT = './src/index.ts';

export default [
  {
    input: ENTRY_POINT,

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
      sourcemap: true,
      format: 'iife',
      globals: {},
      extend: true
    }, {
      file: pkg.min,
      name: GLOBAL_NAME,
      format: 'iife',
      plugins: [terser()],
      globals: {},
    }],
  },
  {
    input: ENTRY_POINT,
    plugins: [dts()],
    output: [{ 
      file: pkg.types,
      format: "es" 
    }]
  }
];
