// // 23.02.12 공부
// /* 프로그래밍 핵심 개념 in JavaScript */
// // [제어문] 12. for문 더 연습하기

// 실습 설명
// 주어진 높이(height)에 맞게 '*' 로 삼각형을 그려주는 함수 printTriangle을 완성해 봅시다.

// 실습 결과
// 함수를 잘 작성했다면 결과는 아래와 같이 출력되어야 합니다.

// 높이: 1
//   *
//   높이: 3
//     *
// **
// ***
//     높이: 5
//       *
// **
// ***
// ****
// *****


// 해설
// 파라미터로 전달되는 숫자 값에 따라 '*'을 출력하는 코드를 만들어봅시다.
// for문을 활용하면 되겠죠?

// function printTriangle(height) {
//   // 여기에 코드를 작성해 주세요.
//   for (let i = 0; i < height; i++) {
//     console.log('*');
//   }
// }

// 이렇게 파라미터의 숫자 값에 따라 '*'을 출력하는 코드를 완성했다면 이제 반복할 때마다
// '*'의 개수를 증가시켜주어야 하는데요.그러기 위해서, 콘솔에 '*'을 바로 출력하는 게 아니라
// for문이 반복되기 전에 message라는 변수를 만든 다음 for문이 반복될 때마다
// message에 '*'을 하나씩 추가하면서 콘솔에 message를 출력한다면 어떨까요?

function printTriangle(height) {
  let message = '';
  for (let i = 0; i < height; i++) {
    message += '*';
    console.log(message);
  }
}

// 테스트 코드
console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);


// 실습 결과
// 이대로 코드를 실행해보면, 코드가 우리가 원하는 모양이 잘 출력되는 모습을 확인할 수 있습니다.

// 높이: 1
//   *
//   높이: 3
//     *
// **
// ***
//     높이: 5
//       *
// **
// ***
// ****
// *****