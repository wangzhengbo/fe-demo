const fs = require("fs");

if (typeof WebAssembly !== 'object') {
  // console.log('Polyfill WebAssembly using wasm-polyfill.js')
  // WebAssembly = require('wasm-polyfill.js/wasm-polyfill.js')
  console.log('Polyfill WebAssembly using webassemblyjs')
  WebAssembly = require('webassemblyjs')
  console.log('Polyfilled WebAssembly', WebAssembly)
}

// var funcs = WebAssembly.instantiate(fs.readFileSync(__dirname + "/build/optimized.wasm"))
// console.log('funcs', funcs)
// funcs.then(a => {
//   console.log('a', a)
// }).catch(e => {
//   console.error('----------error', e)
// })

// const compiled = new WebAssembly.Module(fs.readFileSync(__dirname + "/build/optimized.wasm"));

// https://webassembly.js.org/example-add.wasm.
const compiled = new WebAssembly.Module(fs.readFileSync(__dirname + "/example-add.wasm"));
WebAssembly
    .instantiate(fs.readFileSync(__dirname + "/example-add.wasm"))
    .then((module) => {
      var res = module.instance.exports.add(1, 1);
      console.log('res', res)
    });


const imports = {
  env: {
    abort(_msg, _file, line, column) {
       console.error("abort called at index.ts:" + line + ":" + column);
    }
  }
};

Object.defineProperty(module, "exports", {
  get: () => new WebAssembly.Instance(compiled, imports).exports
});
