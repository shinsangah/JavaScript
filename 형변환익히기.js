// 23.02.10 공부
/* 프로그래밍 핵심 개념 in JavaScript */
// 15. 형 변환 익히기 1

console.log(Number('1' + '2' + '3') - Number(true));
// 문자열 덧셈 123 - Number(true);는 1 이니까 123 - 1
// 정답: 122

// 코드의 결과가 true 인 것을 모두 선택하기
Boolean("false")
// true
// 문자열 "false" 이기 때문에 true가 나옴
Boolean(NaN) || Boolean('0')
// true
// Boolean(NaN)은 false || '0'은 문자열이니까 true
Boolean(typeof false)
// true
// Boolean ('boolean') 이 되기 때문에,
// 문자열 boolean 형을 형 변환 하기 때문에 결과는 true!