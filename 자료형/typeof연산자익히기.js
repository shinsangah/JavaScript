// 23.02.10 공부
/* 프로그래밍 핵심 개념 in JavaScript */
// [자료형] 12. typeof 연산자 익히기

// number가 출력되는 경우 모두 선택하기
console.log(typeof 2);
console.log(typeof (3 * 3));

// string **
console.log(typeof typeof (3 + 5));
// 연산 우선순위에 따라 괄호 안에 있는 연산을 먼저 수행하면,
// console.log(typeof typeof 8); 이렇게 정리할 수 있다.
// typeof 연산자는 오른쪽에 있는 값의 자료형을 문자열로 반환하는 연산자,
// console.log(typeof 'number'); 문자열 'number'의 자료형을 출력하는 예시가 되고,
// 콘솔에는 문자열 이라는 의미의 string이 출력된다!