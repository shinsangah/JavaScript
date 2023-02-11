// 23.02.10 공부
/* 프로그래밍 핵심 개념 in JavaScript */
// 17. 형 변환 익히기 2


console.log(typeof (3 - true));
// number
console.log(typeof (Boolean(5) * true));
// number
console.log(typeof ('4' + 3));
// string
// 문자열 '4' 더하기 숫자 3 입니다. console.log(typeof ("43"));
// 더하기 연산은 피연산자가 한쪽이라도 문자열이 있을 경우, 양쪽 모두를 문자열로 형 변환한 다음 문자열 덧셈을 연산합니다.
console.log(typeof (true < false));
// boolean
// 부등호로 두 값의 크고 작음을 비교할 때도 특별한 경우를 제외하면 보통 숫자형으로 바꿔서 비교합니다.
// console.log(typeof (1<0)); 1은 0보다 작은게 거짓이기 때문에, console.log(typeof (false)); 가 되어서 boolean이 출력됩니다.

console.log(0 !== Number(false));
// false
console.log(Number(true) == String(1));
// true
console.log('5' / true != '5');
// false
// 나누기 먼저 해서 5/1 = 5 나오고, 5 != 5 동등하기 때문에 false 나옴
console.log(5 !== '5')
// true
// 만약에 !== 였으면 일치 (===) 비교는 형 변환이 일어나지 않기 때문에 5 !== '5' 래서 true 나옴
console.log(5 % 2 === Boolean(2) * true);
// true