// 23.02.11 공부
/* 프로그래밍 핵심 개념 in JavaScript */
// [자료형] 21. null과 undefined 익히기

let x;
console.log(x);
// undefined
// x 아무런 값도 할당하지 않았기 때문에 undefined
let y = x;
x = null;
console.log(y);
// undefined
// y를 선언함과 동시에 x가 가지고 있는 undefined 할당하게 되는데,
// 바로 다음줄에서 x에 null 값을 할당하더라도 y가 가진 값은 그대로 undefined
// 따라서 콘솔에 출력하는 변수 y는 undefined 이다.
console.log(x);
// null
// x는 위 4번째 줄에서 할당한 null 값이 출력된다.
x = y;
console.log(x);
// undefined
// 변수 x에 y가 가지고 있는 undefined를 할당해줬기 때문에 콘솔에 출력하는 변수 x는 undefined가 출력된다.



let x;
let y = null;

console.log(x === y);
// false
// console.log(undefined === null); '값'이 다르다.
console.log(x == y);
// true
// console.log(undefined == null); 동등 비교로 비슷한 의미니까 true.
console.log(x == null);
// true
// console.log(undefined == null);
console.log(y === undefined);
// false
// console.log(undefined === null);