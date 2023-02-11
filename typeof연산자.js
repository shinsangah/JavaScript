// 23.02.10 공부
/* 프로그래밍 핵심 개념 in JavaScript */
// [자료형] 11. typeof 연산자

// typeof 연산자
console.log(typeof 101);
// number
console.log(typeof 'Codeit');
// string
console.log(typeof true);
// boolean
console.log(typeof 'true');
// string

// typeof 연산자
console.log(typeof 1);
// number
console.log(typeof 1.0);
// number
console.log(typeof '1');
// string
console.log(typeof "1");
// string
console.log(typeof `1`);
// string

// typeof 연산자
let name = 'Codeit';
function sayHello() {
  console.log('Hello');
};

console.log(typeof name);
// string
console.log(typeof sayHello);
// function (함수)

// typeof 연산식
console.log(typeof 'Hello' + 'Codeit');
// stringCodeit
// typeof 연산자는 값의 자료형을 문자열로 반환한다.
// 문자열 string + 문자열 Codeit 이 되버려서 이렇게 나옴.
console.log(typeof 8 - 3);
// NaN : not a number
// 문자열 number -빼기 3이 되버려서 문자열을 연산하려다 보니까,
// 이것은 숫자가 아니다 라고 해서 NaN이 나와버린 것임.

// 괄호로 묶어버려서 우선순위를 주면 원하는 값이 잘 나온다.
console.log(typeof ('Hello' + 'Codeit'));
// string
console.log(typeof (8 - 3));
// number