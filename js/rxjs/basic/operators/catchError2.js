// RxJS v6+
import { timer, from, of } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

// 创建立即拒绝的 Promise
const myBadPromise = () =>
  new Promise((resolve, reject) => reject('Rejected!'));
// 1秒后发出单个值
const source = timer(1000);
// 捕获拒绝的 promise，并返回包含错误信息的 observable
const example = source.pipe(
  mergeMap(_ =>
    from(myBadPromise()).pipe(catchError(error => of(`Bad Promise: ${error}`)))
  )
);
// const example = source.pipe(
// //   mergeMap(_ =>
//     from(myBadPromise()).pipe(catchError(error => of(`Bad Promise: ${error}`)))
// //   )
// );
// 输出: 'Bad Promise: Rejected'
const subscribe = example.subscribe(val => console.log(val));
