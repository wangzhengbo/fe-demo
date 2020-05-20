var Velocity = require('velocityjs');

console.log(Velocity.render('<div>${message}</div>', {
    message: 'Hello, velocityjs!'
}))

console.log(Velocity.render('<div>$message</div>', {
    message: 'Hello, velocityjs!'
}))

console.log(Velocity.render('<div>$message</div>', {
    mess: 'Hello, velocityjs!'
}))

console.log(Velocity.render('<div>${mess}age</div>', {
    mess: 'Hello, velocityjs!'
}))

console.log(Velocity.render('<div>$mess$age</div>', {
    mess: 'Hello, velocityjs!',
    age: 20
}))

console.log(Velocity.render('<div>$foo.bar</div>', {
    foo: {
        bar: 'Hello, velocityjs!'
    },
    age: 20
}))

console.log(Velocity.render('<div>${foo.bar}</div>', {
    foo: {
        bar: 'Hello, velocityjs!'
    },
    age: 20
}))

console.log(Velocity.render('<div>${foo}.bar</div>', {
    foo: {
        bar: 'Hello, velocityjs!'
    },
    age: 20
}))


// console.log(Velocity.render('<div>age=${(age + 1)}</div>', {
//     foo: {
//         bar: 'Hello, velocityjs!'
//     },
//     age: 20
// }))