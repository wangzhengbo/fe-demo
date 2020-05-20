const a: Readonly<Array<string>> = ['2']
interface S {
    [a: number]: number
}
let s: S = {
    '0': 1
}
s[1] = 2
s[0] = 3
const b: Readonly<number> = 1

// interface ReadOnly<T> {
//     readonly [P in keyof T]: T[P];
// };

let o = {
    a: 1,
    b: 2,
    c: 3
}

type Picks<T, K extends keyof T> = {
    [P in K]: T[P];
};

let p: Picks<typeof o, 'a' | 'b'> = {
    a: 1,
    b: 2
}

// interface Record2<K extends keyof any, T> {
//     [P in K]: T;
// };

// let r: Record2<keyof typeof o, string> = {
//     a: '1',
//     b: 'string',
//     d: 'sss'
// }
// console.log(r)

type Extract2<T, U> = T extends U ? T : never;

let e: Extract2<'a' | 'b' | 'c', 'a' | 'c'>
type Omit2<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
const o2: Omit2<typeof o, 'a'> = {
    b: 2,
    c: 3
}

// https://stackoverflow.com/questions/49285864/is-there-a-valueof-similar-to-keyof-in-typescript
type ValueOf<T> = T[keyof T];

type Foo = { a: string, b: number };
type ValueOfFoo = ValueOf<Foo>; // string | number

type P3 = string["charAt"]; 
// type P4 = string.charAt

type Props = { req: number; reqUndef: number | undefined | null; opt?: string; optUndef?: number | undefined; };

const p2: Props = {
    req: 1,
    reqUndef: 1
}

type p3 = Pick<Props, 'req'>

type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
  }[keyof T];

type rk = RequiredKeys<Props>