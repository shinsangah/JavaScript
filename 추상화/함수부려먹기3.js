// 23.02.11 공부
/* 프로그래밍 핵심 개념 in JavaScript */
// [추상화] 08. 함수 부려먹기 3

// 실습 설명
// 직사각형의 넓이를 계산해 주는 calculateRectangleArea 함수를 만들어 보세요.
// calculateRectangleArea 함수는 파라미터로 width와 height를 받고, 직사각형의 넓이를 리턴해 줍니다.

// 실습 결과
// 과제를 해결한 뒤 실행결과는 아래와 같아야 합니다.
// Area1: 12, Area2: 40, Area3: 14



// 여기에 calculateRectangleArea 함수를 작성해 주세요
function calculateRectangleArea(width, height) {
  return width * height;
}

// 테스트 코드
let area1 = calculateRectangleArea(3, 4); // 가로 3, 세로 4인 직사각형의 넓이 계산
let area2 = calculateRectangleArea(5, 8); // 가로 5, 세로 8인 직사각형의 넓이 계산
let area3 = calculateRectangleArea(7, 2); // 가로 7, 세로 2인 직사각형의 넓이 계산

console.log(`Area1: ${area1}, Area2: ${area2}, Area3: ${area3}`);