// // 23.02.12 공부
// /* 프로그래밍 핵심 개념 in JavaScript */
// // [제어문] 14. while문 연습하기

// 실습 설명
// while 반복문을 사용하여 1 이상 100 이하의 홀수를 모두 출력해 보세요.

// 실습 결과
// 코드를 잘 작성했다면, 실행결과는 아래와 같이 출력되어야 합니다.

// 1
// 3
// 5
// 7
// .
// .
// .
// 93
// 95
// 97
// 99


// 해설
// 문제를 해결하기 위한 방법이 몇 가지 있는데요. 간단하게 3가지 경우만 살펴봅시다.

// 1. i를 1부터 100까지 반복하면서 2로 나눴을 때 나머지가 1일 때만 i를 출력하는 방법
// i를 1부터 100까지 반복하면서 i를 출력하려면 다음과 같이 작성하면 됩니다.

let i = 1;

while (i <= 100) {
  console.log(i);
  i++;
}

// 여기서 만약 i를 2로 나눴을 때 나머지가 0일 때 i를 출력하려면,
// if문과 나머지연산(%)을 활용해서 다음과 같이 코드를 작성할 수 있겠죠?

let i = 1;

while (i <= 100) {
  if (i % 2 === 1) {
    console.log(i);
  }
  i++;
}

let i = 1;
while (i <= 100) {
  if (i % 2 === 1) {
    console.log(i);
  }
  i++;
}

// 2. i를 1부터 50까지 반복하면서 i * 2 - 1을 출력하는 방법
// i를 1부터 50까지 반복하면서 i를 출력하려면 다음과 같이 작성하면 됩니다.

let i = 1;

while (i <= 50) {
  console.log(i);
  i++;
}

// 여기서 i * 2 - 1을 출력하려면 console.log함수를 사용하는 부분만 살짝 바꿔주면 되겠죠?

let i = 1;

while (i <= 50) {
  console.log(i * 2 - 1);
  i++;
}

// 3. i를 1부터 100까지 반복하면서 i를 2씩 증가시키는 방법
// i를 1부터 100까지 반복면서 i를 출력하려면 다음과 같이 작성하면 됩니다.

let i = 1;

while (i <= 100) {
  console.log(i);
  i++;
}

// 여기서 i를 2씩 증가시키려면 반복문 마지막 부분에서 i를 2씩 증가시켜주면 되겠죠?

let i = 1;

while (i <= 100) {
  console.log(i);
  i += 2;
}