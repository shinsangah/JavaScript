// 23.02.11 공부
/* 프로그래밍 핵심 개념 in JavaScript */
[추상화] 11. 변수의 scope

// Scope: 범위, 영역
// 변수가 선언되면 어디까지 유효한지, 변수의 유효범위에 대해 살펴보자.

// let x = 3;
// console.log(x);
// // 3

function myFunction() { // 블록문 (Block Statement)
  let x = 3; // 로컬 변수, 지역 변수 (Local Variable) - 블록문 안에서 선언된 변수
  // 변수 x의 scope 변수 x가 유효한 범위는 myFunction 안에서만 유효하다.
  console.log(x);
}
// 3

myFunction();
// 3

console.log(x);
// 변수 let x = 3 가 유효하지 않은 곳에서 사용이 된거니까 에러가 난다.
myFunction 안에서만 유효한 변수이기 때문이다.



let x = 3;

function myFunction() { // 블록문 (Block Statement)
  console.log(x); // 글로벌 변수, 전역 변수 (Global Variable)
  // - 블록문 밖에서 사용한 변수는 블록문 안에서도 사용할 수 있다.
  // 글로벌 변수는 이름에서도 느낄 수 있듯이 코드를 작성할 수 있는 이 파일 전체에서
  // 어느 곳에서도 사용할 수 있다. 몇번 줄이든 같은 x를 사용해도 아무런 문제없이 동작한다.
}

myFunction();
// 3
console.log(x);
3
let x 를 블록문 밖에서 출력했으니까 3 이라는 값이 잘 나온다.


// 그런데, myFunction 내부에서 똑같은 이름의 로컬 변수 let x =5; 를 선언하면 어떻게 될까?
let x = 3; // 글로벌 변수, 전역 변수 (Global Variable)

function myFunction() { // 블록문 (Block Statement)
  let x = 5; // 로컬 변수, 지역 변수 (Local Variable)
  console.log(x);
}

myFunction();
// 5
// 가장 먼저 로컬 변수가 있는지 확인 → 로컬 변수 x = 5 사용 →  없을 경우에는 글로별 변수 확인 → 함수 실행 종료!
console.log(x);
// 3
// x 가 중괄호로 둘러진 바깥에 있다. myFunction 안에 있는 로컬 영역 x에서는 벗어났다고 볼 수 있다.
// 그렇기 때문에 자연스럽게 글로별 변수 x = 3 이 사용되서 3이 출력이 된다.

// 요약
// 모든 변수에는 scope, 즉 변수의 유효범위가 있는데 크게 '로컬 변수 / 글로벌 변수' 로 나눌 수 있다.
// 이 둘을 나누는 기준은 중괄호 {} 로 감싸진 블록문 이다.
// 로컬 변수는 블록문 내에서만 유효 / 글로벌 변수는 어디에서나 유효한 범위이다.