import { evaluate, Function, Interpreter } from 'eval5'

const value = evaluate("1 + 1")
console.log('value', value)

// const func = new Function("a", "b", "return a + b;")
// console.log(func(1, 3), func)

// const func2 = Function("a", "b", "return a + b;")
// console.log(func2(1, 4), func2)

const ctx = {
    a: 1,
    b: 20
}
const interpreter = new Interpreter(ctx, {
	timeout: 1000,
});

let result;

try {
	result = interpreter.evaluate("a+b");
	console.log('result', result); //2
} catch (e) {
    //..
    console.log(e)
}

const ctx2 = Object.create(global);

ctx2.eval = Interpreter.eval;

const interpreter2 = new Interpreter(ctx2);

console.log('xxxxx', interpreter2.evaluate(`
    function test() {
        var a = 1;
        return eval('a+1')
    }
    test();
`))