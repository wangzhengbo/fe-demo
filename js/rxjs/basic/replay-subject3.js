// https://zhuanlan.zhihu.com/p/25383159
import { ReplaySubject, from } from 'rxjs';

const 九阴真经 = '天之道，损有余而补不足'

const 黄蓉$ = new ReplaySubject(Number.MAX_VALUE)
const 郭靖$ = new ReplaySubject(3)

黄蓉$.subscribe({
  next: (v) => console.log(`黄蓉$: ${v}`)
});

郭靖$.subscribe({
  next: (v) => console.log(`郭靖$: ${v}`)
});

const 读书$ = from(九阴真经.split(''))

读书$.subscribe(黄蓉$)
读书$.subscribe(郭靖$)