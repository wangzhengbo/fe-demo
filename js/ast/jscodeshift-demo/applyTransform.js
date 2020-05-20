// const applyTransform = require('jscodeshift/dist/testUtils').applyTransform;
const runInlineTest = require('jscodeshift/dist/testUtils').runInlineTest;

const applyTransform = (module, options, input) => {
	// Handle ES6 modules using default export for the transform
	const transform = module.default ? module.default : module;

	let jscodeshift = require('jscodeshift/dist/core');
	if (module.parser) {
		jscodeshift = jscodeshift.withParser(module.parser);
	}

console.log('transform', transform, input)
	const output = transform(
		input,
		{
			jscodeshift,
			stats: () => {}
		},
		options || {}
	);

    return output
};

const transform = require('./reverse-identifiers');
const transformOptions = {};

// runInlineTest(transform, transformOptions, {
//     source: 'var emaNa = 1;'
// }, 'xxx')

const output = applyTransform(transform, transformOptions, {
    source: 'var emaNa = 1;'
});
console.log('output', output);
