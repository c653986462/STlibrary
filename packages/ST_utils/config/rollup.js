import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'
import nodeGlobals from 'rollup-plugin-node-globals'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import nodePolyfills from 'rollup-plugin-node-polyfills'

const env = process.env.NODE_ENV

export default {
  external: [
    'crypto-js'
  ], // 外部依赖
  globals: {
    cryptoJs: 'crypto-js'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    nodeResolve({
      browser: true // Default: false
    }),
    commonjs({ include: /node_modules/ }),
    nodeGlobals(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    nodePolyfills()
  ]
}
