// RxJS v6+
import { interval, of, throwError } from 'rxjs';
import { mergeMap, map, retry } from 'rxjs/operators';

// 每1秒发出值
const source = interval(1000);
const example = source.pipe(
// mergeMap(val => {
  map(val => {
    // 抛出错误以进行演示
    if (val > 5) {
    //   return throwError('Error!');
    throw new Error('Error!')
    }
    // return of(val);
    return val
  }),
  // 出错的话可以重试2次
  retry(2)
);
/*
  输出:
  0..1..2..3..4..5..
  0..1..2..3..4..5..
  0..1..2..3..4..5..
  "Error!: Retried 2 times then quit!"
*/
const subscribe = example.subscribe({
  next: val => console.log(val),
  error: val => console.log(`${val}: Retried 2 times then quit!`)
});
