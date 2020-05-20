const data = await new Promise(resolve => {
    resolve('hello top level await#s');
});
console.log(data);
export const a = 1;
