// 23.02.10 공부
/* 프로그래밍 핵심 개념 in JavaScript */
// [자료형] 18. 템플릿 문자열

// 템플릿 문자열 (template strings)
// template: 일정한 틀, 형식

let year = 2023;
let month = 2;
let day = 10;

console.log('생년월일은 ' + year + '년 ' + month + '월 ' + day + '일 입니다.');
// 답: 생년월일은 2023년 2월 10일 입니다.
// 더하기 + 는 한쪽만 문자열이여도 두 값을 문자열로 변환한다.

// 백틱이란? 키보드 탭 위, 1의 왼쪽, '~'(물결표) 쯤에 있는 '와 비슷하게 생긴 문자다.
// 백틱을 사용하면 ${}를 사용해서 문자열과 변수를 적절히 같이 사용할 수 있다.
console.log(`생년월일은 ${year}년 ${month}월 ${day}일 입니다.`);
// 답: 생년월일은 2023년 2월 10일 입니다.
// 백틱 안에 ${} 을 사용하면 주변에 문자와 연결이 되서 + 더하기 기호를 생략할 수 있다.
// 템플릿 문자열이 가질 수 있는 하나의 형식이라고 할 수 있다.

let myNumber = 3;

function getTwice(x) {
  return x * 2;
}

console.log(`${myNumber}의 두 배는 ${getTwice(myNumber)}입니다.`);
// 3의 두 배는 6입니다.
// ${getTwice(myNumber)} 3*2를 return 하니까 6이 될 것이다.