// RxJS v6+
import { throwError } from 'rxjs';

// 在订阅上使用指定值来发出错误
const source = throwError('This is an error!');
// 输出: 'Error: This is an error!'
const subscribe = source.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!'),
  error: val => console.log(`Error: ${val}`)
});
