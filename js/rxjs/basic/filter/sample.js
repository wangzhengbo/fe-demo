// RxJS v6+
import { interval } from 'rxjs';
import { sample } from 'rxjs/operators';

// 每1秒发出值
const source = interval(1000);
// 每2秒对源 observable 最新发出的值进行取样
const example = source.pipe(sample(interval(2000)));
// 输出: 0..2..4..6..8..
const subscribe = example.subscribe(val => console.log(val));
