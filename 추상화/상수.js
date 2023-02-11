// 23.02.11 공부
/* 프로그래밍 핵심 개념 in JavaScript */
// [추상화] 13. 상수

// 상수 (constant) - 절대 변하지 않는 항상 일정한 값
let pi = 3.14; //원주율
let radius; //반지름

// 원의 넓이를 계산하는 함수
function calculateArea() {
  return pi * radius * radius;
}

// 반지름에 따른 원의 넓이를 출력하는 함수
function printArea() {
  return `반지름이 ${radius}일 때, 원의 넓이는 ${calcualteArea()}`;
}

radius = 4;
console.log(printArea());

radius = 7;
console.log(printArea());

radius = 8;
console.log(printArea());