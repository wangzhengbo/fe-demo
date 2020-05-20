const postcss = require('postcss');
const parser = require('postcss-less');
const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.resolve(__dirname, './src/index.less'), 'utf8')
// postcss([])
// 	.process(content, { syntax })
// 	.then(function(result) {
// 		result.content; // LESS with transformations
// 		// console.log('result.content', result.content);
// 	});
// console.log('syntax', syntax)
console.log('####')
console.log(parser.parse(content))
