// RxJS v6+
import { from } from 'rxjs';
import { first } from 'rxjs/operators';

const source = from([1, 2, 3, 4, 5]);
// 没有值通过的话则发出默认值
const example = source.pipe(first(val => val > 5, 'Nothing'));
// 输出: 'Nothing'
const subscribe = example.subscribe(val => console.log(val));
