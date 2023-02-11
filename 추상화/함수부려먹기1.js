// 23.02.11 공부
/* 프로그래밍 핵심 개념 in JavaScript */
// [추상화] 04. 함수 부려먹기 1

// 예시 코드
// console.log('동수(이)가 대화에 참여했습니다.');
// console.log('윤하(이)가 대화에 참여했습니다.');
// console.log('재준(이)가 대화에 참여했습니다.');
// console.log('동훈(이)가 대화에 참여했습니다.');
// console.log('영희(이)가 대화에 참여했습니다.');
// console.log('신욱(이)가 대화에 참여했습니다.');

// 위와 같이 반복이 많은 작업은 함수를 활용하면 좋겠죠?
// 함수를 활용해서 아래 실습 결과와 동일한 결과가 나오는 코드를 작성해 주세요.

// 실습 결과
// 동수(이)가 대화에 참여했습니다.
// 윤하(이)가 대화에 참여했습니다.
// 재준(이)가 대화에 참여했습니다.
// 동훈(이)가 대화에 참여했습니다.
// 영희(이)가 대화에 참여했습니다.
// 신욱(이)가 대화에 참여했습니다.


// 여기에 logParticipant 함수를 작성해 주세요
function logParticipant(userName) {
  console.log(userName + '(이)가 대화에 참여했습니다.');
}

// 테스트 코드
logParticipant('동수');
logParticipant('윤하');
logParticipant('재준');
logParticipant('동훈');
logParticipant('영희');
logParticipant('신욱');

function logParticipant(userName) {
  console.log(userName + '(이)가 대화에 참여했습니다.');
}