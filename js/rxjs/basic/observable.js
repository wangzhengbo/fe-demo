import { Observable } from 'rxjs';

console.log('###0', Date.now())
const observable = new Observable(subscriber => {
  console.log('###1', Date.now())
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

setTimeout(() => {
    console.log('just before subscribe');
    observable.subscribe({
      next(x) { console.log('got value ' + x, Date.now()); },
      error(err) { console.error('something wrong occurred: ' + err); },
      complete() { console.log('done'); }
    });
    console.log('just after subscribe');
}, 2000)