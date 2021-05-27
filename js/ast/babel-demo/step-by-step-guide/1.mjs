import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import generate from '@babel/generator';

const code = 'const n = 1; function test() { const n = 2; console.log(n); }';

// parse the code -> ast
const ast = parse(code);

// transform the ast
traverse.default(ast, {
  enter(path) {
    // in this example change all the variable `n` to `x`
    if (path.isIdentifier({ name: 'n' })) {
      path.node.name = 'x';
    }
  },
});

// generate code <- ast
const output = generate.default(ast);
console.log(output.code); // 'const x = 1;'