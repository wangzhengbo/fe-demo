const fs = require('fs');
const path = require('path');

const applyTransform = (module, options, input) => {
	// Handle ES6 modules using default export for the transform
	const transform = module.default ? module.default : module;

	let jscodeshift = require('jscodeshift/dist/core');
	if (module.parser) {
		jscodeshift = jscodeshift.withParser(module.parser);
	}

	const output = transform(
		input,
		{
			jscodeshift,
			stats: () => {}
		},
		options || {}
	);

	return output;
};

const transform = function(file, api) {
	const j = api.jscodeshift;

    console.log('j(file.source)', j(file.source).nodes())

	return j(file.source)
		.find(j.Identifier)
		.replaceWith((p) => j.identifier(p.node.name.split('').reverse().join('')))
		.toSource();
};
const transformOptions = {};

const output = applyTransform(transform, transformOptions, {
	source: fs.readFileSync(path.resolve(__dirname, './vueScript.js'), 'utf8')
});
console.log(output);
