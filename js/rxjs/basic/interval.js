import { Observable, interval } from 'rxjs';
// import { interval } from 'rxjs/operators';

console.log(Object.keys(Observable))
interval(1000).subscribe(i => {
  console.log(Date.now(), i)
})