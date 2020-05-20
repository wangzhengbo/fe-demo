// RxJS v6+
import { interval, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';

// 每1秒发出值, 示例: 0...1...2
const interval$ = interval(1000);
// 每1秒都将 debounce 的时间增加200毫秒
const debouncedInterval = interval$.pipe(debounce(val => timer(val * 200)));
/*
  5秒后，debounce 的时间会大于 interval 的时间，之后所有的值都将被丢弃
  输出: 0...1...2...3...4...5...(debounce 的时间大于1秒后则不再发出值)
*/
const subscribe = debouncedInterval.subscribe(val =>
  console.log(`Example Two: ${val}`)
);
