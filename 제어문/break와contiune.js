// // 23.02.12 공부
// /* 프로그래밍 핵심 개념 in JavaScript */
// // [제어문] 16. break와 continue

// break와 continue

let myChoice = 3;

// switch (myChoice) {
//   case 1:
//     console.log('토끼를 선택한 당신, ...');
//     break;
//   case 2:
//     console.log('고양이를 선택한 당신, ...');
//     break;
//   case 3:
//     console.log('코알라를 선택한 당신, ...');
//     break;
//   case 4:
//     console.log('강아지를 선택한 당신, ...');
//     break;
//   default:
//     console.log('1에서 4사이의 숫자를 선택해주세요.');
// }

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
    i++;
    continue;
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
  if (i % 2 !== 0) {
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