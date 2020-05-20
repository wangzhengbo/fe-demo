// RxJS v6+
import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
// 发出错误
const source = throwError('This is an error!');
// 优雅地处理错误，并返回带有错误信息的 observable
const example = source.pipe(catchError(val => of(`I caught: ${val}`)));
// const example = source.pipe(catchError(val => `I caught: ${val}`));
// 输出: 'I caught: This is an error'
const subscribe = example.subscribe(val => console.log(val));
// const subscribe2 = source.subscribe(val => console.log(val));
