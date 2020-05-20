// RxJS v6+
import { from } from 'rxjs';

// 发出 promise 的结果
const promiseSource = from(new Promise(resolve => resolve('Hello World!')));
// 输出: 'Hello World'
promiseSource.subscribe(val => console.log(val));

// 使用 js 的集合
const map = new Map();
map.set(1, 'Hi');
map.set(2, 'Bye');

const mapSource = from(map);
// 输出: [1, 'Hi'], [2, 'Bye']
const subscribe = mapSource.subscribe(val => console.log(val));