// https://webassembly.js.org/docs/example-add-wast.html
const webassemblyjs = require('webassemblyjs')

const wastCode = `
(module
    (func $add (param i32) (param i32) (result i32)
      (get_local 0)
      (get_local 1)
      (i32.add)
    )
    (export "add" (func $add))
  )
`

// node_modules/.bin/wasm2wast ../demo/example-add.wasm
// const code = `
// (module
//     (type (func (param i32) (param i32) (result i32)))
//     (func (param i32) (param i32) (result i32)
//       (get_local 0)
//       (get_local 1)
//       (i32.add)
//     )
//     (export "add" (func 0))
//   )
// `

var module = webassemblyjs.instantiateFromSource(wastCode);
var res = module.exports.add(1, 1);
console.log('res', res)

// var module2 = webassemblyjs.instantiateFromSource(code);
// console.log('module2.exports.add(1, 1)', module2.exports.add(1, 1))
