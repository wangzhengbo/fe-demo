const fs = require('fs')
// wat2wasm simple.wat -o simple.wasm
const compiled = new WebAssembly.Module(fs.readFileSync(__dirname + "/simple.wasm"));
// WebAssembly
//     .instantiate(fs.readFileSync(__dirname + "/example-add.wasm"))
//     .then((module) => {
//       var res = module.instance.exports.add(1, 1);
//       console.log('res', res)
//     });
console.log(compiled)

const imports = {
  env: {
    abort(_msg, _file, line, column) {
       console.error("abort called at index.ts:" + line + ":" + column);
    }
  },
  imports: { i: arg => console.log('####', arg) }
};

const e = new WebAssembly.Instance(compiled, imports)
console.log(e.exports.e(10))
console.log(e.exports.e())