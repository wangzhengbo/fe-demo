import { range, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

// range(1, 200).pipe(
//   filter(x => x % 2 === 1),
//   map(x => x + x)
// ).subscribe(x => console.log(x));

var a = of(1,2,3).pipe(map(x => x + '!!!'))
a.subscribe(x => console.log(x)); // etc
a.subscribe(x => console.log(x)); // etc