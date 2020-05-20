import {observable, computed} from "mobx";
var name = observable.box("John");

console.log(name.observe(v => {
    console.log('v', v)
}))
var upperCaseName = computed(() =>
    name.get().toUpperCase()
);

var disposer = upperCaseName.observe(change => console.log(change.newValue));

name.set("Dave");
name.set("Dave2");
disposer()
name.set("Dave3");
console.log(typeof name)
console.log(typeof name.get())
console.log(name.get())