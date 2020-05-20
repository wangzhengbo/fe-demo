// RxJS v6+
import { interval } from 'rxjs';
import { take, ignoreElements } from 'rxjs/operators';

// 每100毫秒发出值
const source = interval(100);
// 略所有值，只发出 complete
const example = source.pipe(
  take(5),
  ignoreElements()
);
// 输出: "COMPLETE!"
const subscribe = example.subscribe(
  val => console.log(`NEXT: ${val}`),
  val => console.log(`ERROR: ${val}`),
  () => console.log('COMPLETE!')
);
