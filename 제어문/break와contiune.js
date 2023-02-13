// // 23.02.12 공부
// /* 프로그래밍 핵심 개념 in JavaScript */
// // [제어문] 16. break와 continue

// break와 continue

let myChoice = 3;

switch (myChoice) {
  case 1:
    console.log('토끼를 선택한 당신, ...');
    break;
  case 2:
    console.log('고양이를 선택한 당신, ...');
    break;
  case 3:
    console.log('코알라를 선택한 당신, ...');
    break;
  case 4:
    console.log('강아지를 선택한 당신, ...');
    break;
  default:
    console.log('1에서 4사이의 숫자를 선택해주세요.');
}

// break는 switch에서 위처럼 빠져나오는 기능도 있지만,
// 반복문에서도 사용이 가능하다.

// break

let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
  break;
}

// 1
// i를 출력하고, i를 증가시킨 다음에 break문을 만나기 때문에
// while문을 빠져나가게 되면서 더이상 반복을 하지 않게 된 것이다.

let i = 1;

while (i <= 10) {
  console.log(i);
  if (i === 7) {
    break;
  }
  i++;
}

// 1
// 2
// 3
// 4
// 5
// 6
// 7

let i = 1;

for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i === 7) {
    break;
  }
}

// 1
// 2
// 3
// 4
// 5
// 6
// 7

// continue

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

// 1
// 3
// 5
// 7
// 9

let i = 1;

while (i <= 10) {
  if (i % 2 === 0) {
    i++; // while문은 for문과 다르게 추가동작 부분이 없기 때문
    continue;
    // while문은 continue가 실행되서 동작부분을 건너뛰게 되면 바로 조건 부분으로 넘어가게 됩니다.
    // 그래서 미리 저기서 i++; 증가시켜줘야 하는 것이다. 만약 여기서 증가시켜주지 않으면,
    // i가 2인 채로 무한히 반복하는 코드가 될 것이다. 왜그런지는 스스로 이 코드가 실행되는 흐름을 생각하면서 꼭 이해해보길! 
  }
  console.log(i);
  i++;
}

// 1
// 3
// 5
// 7
// 9

let i = 1;

while (i <= 10) {
  if (i % 2 !== 0) { // 짝수만 실행시키고싶다면 조건 부분을 이렇게 바꾸면 된다.
    i++;
    continue;
  }
  console.log(i);
  i++;
}

// 2
// 4
// 6
// 8
// 10