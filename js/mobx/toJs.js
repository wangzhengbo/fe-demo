import { observable, toJS, isObservableObject } from 'mobx'

var obj = observable({
    x: 1
});


var clone = toJS(obj);

console.log(isObservableObject(obj)); // true
console.log(isObservableObject(clone)); // false
console.log('obj', obj)
console.log('clone', clone)
console.log(obj.x)