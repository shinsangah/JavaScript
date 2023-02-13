// // 23.02.13 공부
// /* 프로그래밍 핵심 개념 in JavaScript */
// // [제어문] 19. 피보나치 수열

// 실습 설명
// 피보나치 수열(Fibonacci Sequence) 이라고 들어 보셨나요?

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

// 우선 피보나치 수열의 1번 항과 2번 항은 각각 1입니다.
// 3번 항부터는 바로 앞 두 항의 합으로 계산됩니다.
// 예를 들어서 3번 항은 1번 항(1)과 2번 항(1)을 더한 2이며, 4번 항은 2번 항(1)과 3번 항(2)을 더한 3입니다.

// 반복문을 활용해서 피보나치 수열의 첫 50개 항을 차례대로 출력하는 프로그램을 작성해 보세요.
// for문과 while문 중 어떤 반복문을 사용해도 상관없습니다.


// 실습 결과
// 코드를 잘 작성하셨다면 다음과 같이 출력되어야 합니다.

// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
//   .
// .
// .
// 4807526976
// 7778742049
// 12586269025

let i = 1;
while (i <= 50) {
  let j = 1;
  while (j <= 50) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }
  i++;
}


// 해설
// 일단 50개의 항이 조금 부담될 수 있으니, 10개의 항만 출력하는 걸 목표로 합시다.
// 어차피 10개를 제대로 출력할 수 있으면, 50개도 아무런 문제 없이 출력할 수 있을 테니까요.

// 반복문 틀 작성
// 10개의 항을 출력하기 위해서는 반복문을 열 번 돌아야겠죠? 열 번 도는 반복문부터 작성해 봅시다.

for (let i = 1; i <= 10; i++) {

}

// 필요한 변수 정의
// 피보나치 수열의 항은 앞선 두 항의 합으로 계산되는데요.
// 따라서 피보나치 수열의 항들을 순서대로 출력하기 위해서는 늘 마지막 두 항을 변수에 보관해야 합니다.

// '현재 항'은 변수 current에, 그리고 '직전 항'은 변수 previous에 저장을 하겠습니다.
// 처음에는 current를 1로 설정하고 previous를 0으로 설정하면 되겠죠?

let current = 1;
let previous = 0;

for (let i = 1; i <= 10; i++) {
  // 이제 여기에 필요한 동작들만 작성하면 되겠죠?
}

// 이제 반복문의 동작 부분만 채워 넣으면 됩니다.

// 수행 부분 채워 넣기
// 수행 부분에서 해야 할 일은 크게 두 가지입니다.

// current를 출력
// previous와 current를 적절히 수정
// 1번은 그냥 console.log(current)를 하면 되니까 먼저 채워 넣겠습니다.

let current = 1;
let previous = 0;

for (let i = 1; i <= 10; i++) {
  console.log(current);
  // previous와 current를 적절히 수정
}

// 2번이 약간 헷갈리는 부분인데요.
// 수행 부분에서 previous와 current를 어떻게 수정할 수 있을까요?
// 일단 단순하게 생각하면 이렇습니다.

// previous ← current
// current ← current + previous
// 그리고 위 로직을 코드로 나타내면 아래와 같습니다.

let current = 1;
let previous = 0;

for (let i = 1; i <= 10; i++) {
  console.log(current);
  previous = current;
  current = current + previous;
}

// 그런데 사실 위 코드처럼 하면 문제가 생깁니다. 잘 생각해 보세요.
// previous = current를 하면, previous와 current가 같은 값을 저장하게 됩니다.
// 그리고 기존의 previous 값은 잃어버리게 되죠.

// 예를 들어서 previous가 정수 2고 current가 정수 3이라고 생각해 보세요.
// previous = current를 하면 어떻게 되나요? previous는 정수 3으로 바뀌고, current도 정수 3이죠?
// 기존 previous에 있던 정수 2는 완전히 잃어버리게 됩니다.

// 이 문제를 해결하기 위해서, 임시 보관소 역할을 할 변수를 만들어야 합니다.

let current = 1;
let previous = 0;

for (let i = 1; i <= 10; i++) {
  console.log(current);
  let temp = previous; // previous를 임시 보관소 temp에 저장
  previous = current;
  current = current + temp; // temp에는 기존 previous 값이 저장돼 있음
}
// 이렇게 하면 이제 문제 없이 previous와 current를 수정할 수 있습니다.
코드를 실행하면 아래와 같이 출력이 될 텐데요.

1
1
2
3
5
8
13
21
34
55

// 이제 반복문의 조건부분에서 숫자 10을 50으로만 고쳐주면 이번 과제를 해결할 수 있겠죠?

// 모범 답안

let current = 1;
let previous = 0;

for (let i = 1; i <= 50; i++) {
  console.log(current);
  let temp = previous;  // previous를 임시 보관소 temp에 저장
  previous = current;
  current = current + temp;  // temp에는 기존 previous 값이 저장돼 있음
}

// 반복문을 만약 while문으로 작성한다면 아래와 같이 작성할 수도 있습니다.

let current = 1;
let previous = 0;
let i = 1;

while (i <= 50) {
  console.log(current);
  let temp = previous;  // previous를 임시 보관소 temp에 저장
  previous = current;
  current = current + temp;  // temp에는 기존 previous 값이 저장돼 있음
  i++;
}