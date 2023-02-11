// 23.02.11 공부
/* 프로그래밍 핵심 개념 in JavaScript */
// [추상화] 03. 함수의 실행 순서

function sayHello() {
  console.log('Hello');
  console.log('Welcome to Codeit!');
}

console.log('함수 호출 전');
sayHello();
console.log('함수 호출 후');

// function sayHello() {
//   console.log('Hello');
//   console.log('Welcome to Codeit!');
// }

// 함수 sayHello를 정의하는 코드이다.
// 함수를 정의한다고 해서 바로 실행되는 것은 아니다.
// 특별히 어떤 일이 일어나지는 않는다.

// 그 다음 줄은 가독성을 위한 줄 바꿈이다.

// console.log('함수 호출 전');
// sayHello();
// console.log('함수 호출 후');

// 함수 호출 전
// // Hello,
// // Weclome to Codeit!
// 함수 호출 후

// '함수 호출 전' 이라는 문자열을 출력하고,
// sayHello 함수를 호출해서 sayHello 라는 함수를 찾고,
// Hello,
// Weclome to Codeit!
// 그 함수의 내용을 이렇게 한줄씩 실행한다.
// 함수를 호출한 역할을 다 했기 때문에 그 다음 줄을 해석 '함수 호출 후' 


function square(x) {
  return x * x;
}

console.log('함수 호출 전');
console.log(square(5));
console.log('함수 호출 후');

// 함수 호출 전
// 25
// 함수 호출 후

// function square(x) {
//   return x * x;
// }
// console.log(square(5));
// square 함수가 호출되었다. 함수 선언 부분에 파라미터 5가 전달,
// 함수 내부에서 return 5 * 5 = 25를 return 하게 된다.
// 첫번째 square 함수를 호출한 부분이 25로 대체가 된다.

function square(x) {
  return x * x;
}

console.log('함수 호출 전');
console.log(square(3) + square(4));
console.log('함수 호출 후');

// 함수 호출 전
// 16
// 함수 호출 후

// function square(x) {
//   return x * x;
// }
// console.log(square(3) + square(4));
// console.log(9 + 16); 그래서 25 가 된다.
