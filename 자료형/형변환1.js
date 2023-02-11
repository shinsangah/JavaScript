// 23.02.10 공부
/* 프로그래밍 핵심 개념 in JavaScript */
// [자료형] 14. 형 변환 1

// 형 변환 (Type Conversion)

console.log('10' + '5');
// 105
console.log(10 + 5);
// 15

// String, Number, Boolean

console.log(Number('10') + Number('5'));
// 15
console.log(String(10) + String(5));
// 105

// 숫자 -> 문자
let x = 123;
console.log(x);
// 123
console.log(String(x));
// 123
console.log(typeof x);
// number
console.log(typeof String(x));
// string

console.log('');
// 이거 그냥 console에 출력될 때 뛰어쓰기 빈 공간임ㄴ

// 불린 -> 문자
let y = true;
console.log(y);
// true
console.log(String(y));
// true
console.log(typeof y);
// boolean
console.log(typeof String(y));
// string

// 문자 -> 숫자
let x = '문자';
console.log(x);
// 문자
console.log(Number(x));
// Nan
console.log(typeof x);
// string
console.log(typeof Number(x));
// number

console.log('');

// 불린 -> 숫자
let y = true;
console.log(y);
// true
console.log(Number(y));
// 1
console.log(Number(false));
// 0
// 이렇게 불린값은 숫자형태로 형변환 할 때 0과 1로 값이 변한다.
console.log(typeof y);
// boolean
console.log(typeof Number(y));
// number

// 문자 -> 불린
let x = '문자';
console.log(x);
// 문자
console.log(Boolean(x));
// true
// 일반적으로 어떤 값을 boolean으로 변환할 때는 true 값이 된다.
console.log(typeof x);
// string
console.log(typeof Boolean(x));
// boolean

console.log('');

// 숫자 -> 불린
let y = 123;
console.log(y);
// 123
console.log(Boolean(y));
// true
// 일반적으로 어떤 값을 boolean으로 변환할 때는 true 값이 된다.
console.log(typeof y);
// number
console.log(typeof Boolean(y));
// boolean

// 쉽게 생각했을 때, 뭔가 없거나 비어있는듯한 느낌이 드는 값이 false로 변한다.
let x = '';
let y = 0;
let z = NaN;

console.log(Boolean(x));
// false
console.log(Boolean(y));
// false
console.log(Boolean(z));
// false

// '', 0, NaN ← falsy 값