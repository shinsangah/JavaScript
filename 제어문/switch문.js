// 23.02.11 공부
/* 프로그래밍 핵심 개념 in JavaScript */
// [제어문] 06. switch문


// switch문 (switch statement)

// switch (비교할_값) {
//   case 조건값_1:
//     동작부분;
//     break;
//   case 조건값_2:
//     동작부분;
//     break;
//   default:
//     동작부분;
// }


// 당신은 등산을 하던 중 갑작스레 산불이 발생해 대피 중 입니다.
// 그러던 중 산중턱에서 다친 동물 4마리를 만났습니다.
// 이미 체력이 많이 떨어진 당신,
// 이 동물 중 단 한마리만 구출할 수 있습니다.

// 과연 당신의 선택은?
// 1.토끼 2.고양이 3.코알라 4.강아지

let myChoice = 5;

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

// switch문은 이렇게 break를 없애면, 조건값과 일치하는 경우를 찾은 다음에는
// break문을 만나기 전까지 그 아래 모든 동작을 실행하게 된다.
// 각각의 case 별로 동작 부분을 작성한 다음, break를 작성해야 안전하게 switch문 사용 가능!

// 물론, 이런 특징을 활용해서 의도적으로 break문을 생략하면서
// siwtch문을 조금 더 멋있게 응용할 수도 있는데 그런 방식은 switch문이 익숙하지 않은 사람에게는
// 오히려 실수나 오해를 일으킬 수도 있기 때문에 switch문을 처음 하는데에선 다루지 않는다.