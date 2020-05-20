// RxJS v6+
import { of } from 'rxjs';
// 出任意类型值
const source = of({ name: 'Brian' }, [1, 2, 3], function hello() {
  return 'Hello';
});
// 输出: {name: 'Brian}, [1,2,3], function hello() { return 'Hello' }
const subscribe = source.subscribe(val => console.log(val));
