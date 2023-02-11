// 23.02.11 공부
/* 프로그래밍 핵심 개념 in JavaScript */
// [추상화] 12. scope 익히기

// function myFunction() {
//   let x = '코드잇';
//   x = "을지로";
// }

// myFunction();
// // console.log(x);
// // 답 : 오류가 발생한다.

// let x = 120;

// function myFunction() {
//   let x = 20;
//   console.log(x);
// }

// myFunction();
// console.log(x);
// // 20
// // 120

let x = 100;

function myFunction() {
  let y = 40;
  console.log(x + y);
}

myFunction();
// y를 선언하면서 정수 40을 할당하고, x+y 를 하는데,
// 우선 로컬 변수 x는 존재하지 않기 때문에 글로별 변수 x에 담긴 100 가져와버린다.
// 그리고 이 함수는 끝나서 다시 함수를 호출한 myFunction(); 으로 돌아가는데
// 더이상 동작할 것이 없으니 아래 console.log(x); 로 넘어간다. 
console.log(x);
// 140
// 100
