const fs = require('fs')
// const compiled = new WebAssembly.Module(fs.readFileSync(__dirname + "/hello.wasm"));
// // WebAssembly
// //     .instantiate(fs.readFileSync(__dirname + "/example-add.wasm"))
// //     .then((module) => {
// //       var res = module.instance.exports.add(1, 1);
// //       console.log('res', res)
// //     });
// console.log(compiled)

// const imports = {
//   env: {
//     abort(_msg, _file, line, column) {
//        console.error("abort called at index.ts:" + line + ":" + column);
//     }
//   }
// };

// const e = new WebAssembly.Instance(compiled, imports)
// console.log(e)


WebAssembly
    .instantiate(fs.readFileSync(__dirname + "/hello.wasm"))
    .then((module) => {
      var res = module.instance.exports.add(1, 1);
      console.log('res', res)
    });