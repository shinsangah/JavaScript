// // 23.02.12 공부
// /* 프로그래밍 핵심 개념 in JavaScript */
// // [제어문] 17. break와 continue 익히기

// let i = 1;

// while (i <= 20) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
//   i++;
// }

// 1
// 2
// 3
// 4

// 정답 : if문이랑 break문이 있잖아! 콘솔에는 1부터 4까지만 출력되지 않을까?

// 제시된 코드는 내부에 if문과 break문이 작성된 while반복문 입니다.
// while문 내부의 if문만 제외하고 보면, 1부터 20까지 숫자를 출력하는 반복문이지만,
// if문에 의해서 i의 값이 숫자 5와 일치할 경우 break문이 수행됩니다.
// break문은 그 즉시 반복문을 종료하기 때문에 그 아래 내용도 함께 모두 무시되는데요.
// 결국, 해당 코드는 1부터 4까지만 콘솔에 출력한 뒤 반복문이 종료됩니다.


// for (let i = 1; i <= 50; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
//   i++;
// }

// 2
// 4
// 6
// ...
// 50

// // 정답 :
// // - 아냐 i가 증가하는 곳을 자세히 보면 무한루프에 빠지진 않아. 그래서 콘솔에 가장 먼저 출력되는 값은 2야.
// // - 결과적으로 이 코드는 1부터 50까지 숫자 중에서 짝수만 출력하는 코드가 되겠네?

// // 제시된 for문이 동작하는 순서를 천천히 생각해 봅시다.

// // 일단 초기화 부분에서 i는 숫자 1을 가지고 반복이 시작됩니다. 조건 부분에서 1은 50보다 작기 때문에 동작 부분이 실행되겠죠?
// // i가 1일 때, if문의 조건 부분이 평가되기 때문에 바로 countinue가 실행됩니다.
// // 그러면 for문에서 countinue가 실행되면 다시 조건 부분으로 바로 돌아가는 게 아니라, 추가 동작 부분으로 넘어가기 때문에 i가 증가하게 됩니다.

// for (초기화부분; 조건부분; 추가동작부분) {
//   동작부분
// }

// for (let i = 1; i <= 50; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
//   i++;
// }

// 2
// 4
// 6
// ...
// 50

// // 그럼 다음 반복에서는 i가 2인 상태로 조건 부분이 평가되는데요.
// // i가 2인 경우에는 if문의 조건을 충족하지 않기 때문에 if문 아래에 있는 코드들이 실행되겠죠?
// // 그래서 콘솔에 가장 먼저 출력되는 값은 숫자 2 입니다.
// // 자, 그런데 그다음부터는 i++에 의해서 i가 한 번 증가하고,
// // 추가 동작 부분에서도 i가 증가하면서 for문이 반복할 때마다 계속해서 2씩 증가되는 게 예상되시나요?

for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
  i++;
}

// 2
// 4
// 6
// ...
// 50

// // 결국 i는 계속해서 짝수가 되고, for문 안의 if문의 조건은 계속해서 충족되지 않으면서
// // 1부터 50까지 숫자중 짝수만 콘솔에 계속해서 출력이 되는 코드가 됩니다.
// // for문의 초기화부분에서 선언한 변수 i는 for문의 지역변수 입니다.
// // for문이 종료된 이후에 콘솔에 i를 출력하려고 하면 오류가 납니다.

// 존나 어렵당!