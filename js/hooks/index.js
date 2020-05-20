const { hooks } = require('@feathersjs/hooks');

const logRuntime = async (context, next) => {
  const start = new Date().getTime();

  await next();

  const end = new Date().getTime();

  console.log(`Function '${context.method || '[no name]'}' returned '${context.result}' after ${end - start}ms`);
}

const validateName = async (context, next) => {
  const [ name ] = context.arguments;

  if (!name || name.trim() === '') {
    throw new Error('Name is not valid');
  }

  // Always has to be called
  await next();
}

// Hooks can be used with a function like this:
const sayHello = hooks(async name => {
  return `Hello ${name}!`;
}, [
  logRuntime,
  validateName
]);

// And on an object or class like this
class Hello {
  async sayHi (name) {
    return `Hi ${name}`
  }
}

hooks(Hello, {
  sayHi: [
    logRuntime,
    validateName
  ]
});

(async () => {
  console.log(await sayHello('David'));

  // The following would throw an error
  // await sayHello('   ');

  const hi = new Hello();

  console.log(await hi.sayHi('Dave'));
})();
