import { observable, computed, autorun } from 'mobx'

var numbers = observable([1,2,3]);
var sum = computed(() => numbers.reduce((a, b) => a + b, 0));

var disposer = autorun(() => console.log(Date.now(), sum.get()), {
    delay: 100
});
// 输出 '6'
numbers.push(4);
numbers.push(5);
numbers.push(6);
// 输出 '10'

// disposer();
numbers.push(5);
// setInterval(() => {
//     numbers.push(5);
// }, 10)
// 不会再输出任何值。`sum` 不会再重新计算。

const age = observable.box(10)

const dispose = autorun(() => {
    if (age.get() < 0)
        throw new Error("Age should not be negative")
    console.log("Age", age.get())
}, {
    onError(e) {
        // window.alert("Please enter a valid age")
    }
})
age.set(-1)
console.log(2)