import base from './rollup'
import path from 'path'

const resolveFile = function (filePath) {
  return path.join(__dirname, '..', filePath)
}

const resolveOutput = function (type) {
  const v = `/lib/index.${type}.js`
  return {
    file: resolveFile(v),
    format: type
  }
}

export default {
  ...base,
  input: resolveFile('/packages/main.js'),
  output: [
    { ...resolveOutput('umd'), name: '$st_utils' },
    resolveOutput('amd'),
    resolveOutput('cjs')
  ]
}
