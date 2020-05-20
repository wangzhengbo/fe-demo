const fs = require('fs');

if (typeof WebAssembly !== 'object') {
	// console.log('Polyfill WebAssembly using wasm-polyfill.js')
	// WebAssembly = require('wasm-polyfill.js/wasm-polyfill.js')
	console.log('Polyfill WebAssembly using webassemblyjs');
	WebAssembly = require('webassemblyjs');
	console.log('Polyfilled WebAssembly', WebAssembly);
}

// https://webassembly.js.org/example-add.wasm
WebAssembly.instantiate(fs.readFileSync(__dirname + '/build/untouched.wasm')).then((module) => {
	var res = module.instance.exports.add(1, 1);
	console.log('res', res);
});

// const compiled = new WebAssembly.Module(fs.readFileSync(__dirname + '/example-add.wasm'));
// console.log('compiled', compiled);

// const imports = {
// 	env: {
// 		abort(_msg, _file, line, column) {
// 			console.error('abort called at index.ts:' + line + ':' + column);
// 		}
// 	}
// };

// console.log(new WebAssembly.Instance(compiled, imports).exports)
