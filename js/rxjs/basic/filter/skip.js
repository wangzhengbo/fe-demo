// RxJS v6+
import { interval } from 'rxjs';
import { skip } from 'rxjs/operators';

// 每1秒发出值
const source = interval(1000);
// 跳过前5个发出值
const example = source.pipe(skip(5));
// 输出: 5...6...7...8........
const subscribe = example.subscribe(val => console.log(val));
