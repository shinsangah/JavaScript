// 23.02.11 공부
/* 프로그래밍 핵심 개념 in JavaScript */
// [추상화] 15. 함수 변수 복습하기

// 실습 설명

// 코드잇 마을에서는 대중교통을 이용할 때, 교통카드를 단말기에 태그하면 "삑!"하고 소리가 납니다.
// 그런데 항상 "삑!"소리만 나는 게 아니라 상황에 따라서 청소년의 경우에는 "삑삑!",
// 승차권이 제대로 찍히지 않을 땐 "삑삑삑!", 그리고 환승을 할 때는 "환승입니다." 라는 소리도 나는데요.

// 각 상황의 소리를 담은 변수 adultTag, teenagerTag, errorTag, transferTag 를 만들고,
// 이 변수들을 파라미터(tagCase)로 전달하면 각 상황에 맞게
// 태그 소리를 콘솔에 출력하는 tagNotification함수를 만들어 보세요.

// 실습 결과
// 코드가 잘 작성되었다면 실행 시 다음과 같이 출력되어야 합니다.

// 삑!
// 삑삑!
// 환승입니다.
// 삑삑삑!
// 삑!

// 주의 사항: 자동 채점 과제이기 때문에, 문제의 조건에 정확히 따라주시기 바랍니다.
// 줄 바꿈과 마침표, 띄어쓰기까지도 주의해 주세요!

// 아래에 adultTag, teenagerTag, errorTag, transferTag라는 변수들을 작성해 주세요
const ADULT_TAG = '삑!'
let teenagerTag = '삑삑!'
let errorTag = '삑삑삑!'
let transferTag = '환승입니다.'

// 아래에 tagCase 파라미터를 가지는 tagNotification 함수를 작성해 주세요
function tagNotification(tagCase) {
  console.log(tagCase);
}

// 테스트 코드
tagNotification(ADULT_TAG);
tagNotification(teenagerTag);
tagNotification(transferTag);
tagNotification(errorTag);
tagNotification(ADULT_TAG);

// 삑!
// 삑삑!
// 환승입니다.
// 삑삑삑!
// 삑!