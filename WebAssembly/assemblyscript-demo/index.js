const fs = require("fs");
const compiled = new WebAssembly.Module(fs.readFileSync(__dirname + "/build/optimized.wasm"));
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
console.log(new WebAssembly.Instance(compiled, imports).exports);
(async function() {
    const compiled2 = await WebAssembly.compile(fs.readFileSync(__dirname + "/build/optimized.wasm"));
    console.log(new WebAssembly.Instance(compiled2, imports).exports)
})()
