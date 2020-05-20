const fs = require('fs');
const path = require('path');
const { parse, print, prettyPrint } = require("recast");

const ast = parse(fs.readFileSync(path.resolve(__dirname, './vueScript.js'), 'utf8'))
const declaration = ast.program.body.find(item => item.type === 'ExportDefaultDeclaration').declaration

if (declaration.type === 'ObjectExpression') {
  const methods = declaration.properties.find(item => item.key.name === 'methods')
//   console.log(methods.value.properties[0].value)

  methods.value.properties.forEach(property => {
    //   property.value = ast.program.body
    let comment
    if (property.value.body.body.length) {
        if (property.value.body.body[0].comments.length) {
            comment = property.value.body.body[0].comments[0].value.trim()
        }
    } else if (property.value.body.comments.length) {
        comment = property.value.body.comments[0].value.trim()
    }
    if (comment && comment.startsWith('ai-disallow-concurrent')) {
        const field = comment.substring('ai-disallow-concurrent'.length).trim()
        let code = print(property.value.body).code.trim()
        code = code.substring(1, code.length - 1)
        code = `
            if (this.${field}) {
                return
            }
            try {
                this.${field} = true
                ${code}
            } finally {
                this.${field} = false
            }
        `
        const ast2 = parse(code)
        property.value.body.body = ast2.program.body
    }
  })

//   console.log(print(methods.value.properties[0].value).code);
}

console.log(prettyPrint(ast, { tabWidth: 2 }).code);