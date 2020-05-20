const compiler = require('vue-template-compiler')

const ast = compiler.compile('<Button disabled :true-prop="true" :false-prop="false" readOnly=""></Button>')
console.log(ast)
console.log(ast.ast.attrsList)