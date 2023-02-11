// 23.02.11 공부
/* 프로그래밍 핵심 개념 in JavaScript */
// [제어문] 04. 학점 계산

// 실습 설명
// 학생들에게 최종 성적을 알려 주는 '학점 계산기'를 만들려고 합니다.
// 이 수업에는 50점 만점의 중간고사와 50점 만점의 기말고사가 있는데요.
// 두 시험의 점수를 합해서 최종 성적을 내는 방식입니다. 규칙은 다음과 같습니다.

// A: 90점 이상
// B: 80점 이상 90점 미만
// C: 70점 이상 80점 미만
// D: 60점 이상 70점 미만
// F: 60점 미만

// printGrade 함수는 파라미터로 중간고사 점수 midtermScore와
// 기말고사 점수 finalScore를 받고, 최종 성적을 출력합니다.

// 실습 결과
// D
// A
// F
// C

function printGrade(midtermScore, finalScore) {
  let totalScore = midtermScore + finalScore;

  if (totalScore >= 90) {
    console.log('A');
  } else if (totalScore >= 80) {
    console.log('B');
  } else if (totalScore >= 70) {
    console.log('C');
  } else if (totalScore >= 60) {
    console.log('D');
  } else {
    console.log('F');
  }
}

// 테스트 코드
printGrade(25, 35);
printGrade(50, 45);
printGrade(29, 24);
printGrade(37, 42);

// D
// A
// F
// C


