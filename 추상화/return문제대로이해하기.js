// 23.02.11 공부
/* 프로그래밍 핵심 개념 in JavaScript */
// [추상화] 06. return문 제대로 이해하기

// function square(x) {
//   return x * x;
// }

// console.log(square(3));
// // 9

function square(x) {
  console.log('return 전');
  return x * x;
  console.log('return 후'); //Dead Code
}

console.log('함수 호출 전');
console.log(square(3));
console.log('함수 호출 후');

// 함수 호출 전
// return  전
// 9
// 함수 호출 후

// square 함수를 먼저 호출하고,
// 그 다음 파라미터로 3을 전달해주죠.
// 그러면 이제 함수 선언 부분의 코드가 실행이 되는데
// 함수 내부에서도 제일 윗줄부터 'return 전' 이라는 문자열이 출력이 된다.
// // 그 다음에는 return x * x = 3 * 3 의 결과인 9가 출력이 된다.
// 이렇게 return문을 통해서 함수 호출부분에 어떤 값을 되돌려 주고나면
// 그대로 함수의 실행이 중단이 됩니다.
// return문 아래에 있는 코드들은 절대 실행될 리 없습니다.
// 그렇기 때문에 다음 '함수 호출 후' 라는 문자를 출력한다.

// * return :
// 함수 호출 부분에 어떤 값을 되돌려주는 것 뿐만 아니라,
// 함수 자체에 실행을 중단한다는 것. return의 2가지 역할이다.