// 23.02.11 공부
/* 프로그래밍 핵심 개념 in JavaScript */
// [추상화] 05. 함수 부려먹기 2

// 예시코드

console.log('3 * 4 = ' + 3 * 4);
console.log('3 * 2 = ' + 3 * 2);
console.log('7 * 5 = ' + 7 * 5);
console.log('8 * 9 = ' + 8 * 9);
console.log('5 * 5 = ' + 5 * 5);
console.log('9 * 9 = ' + 9 * 9);

// 위와 같이 반복이 많은 작업은 함수를 활용하면 좋겠죠?
// 함수를 활용해서 아래 실습 결과와 동일한 결과가 나오는 코드를 작성해 주세요.

// 실습 결과
// 3 * 4 = 12
// 3 * 2 = 6
// 7 * 5 = 35
// 8 * 9 = 72
// 5 * 5 = 25
// 9 * 9 = 81

// 여기에 expressMultiplication 함수를 작성해 주세요
function expressMultiplication(x, y) {
  console.log(x + ' * ' + y + ' = ' + x * y);
}

// 테스트 코드
expressMultiplication(3, 4);
expressMultiplication(3, 2);
expressMultiplication(7, 5);
expressMultiplication(8, 9);
expressMultiplication(5, 5);
expressMultiplication(9, 9);


function expressMultiplication(x, y) {
  console.log(x + ' * ' + y + ' = ' + x * y);
}
