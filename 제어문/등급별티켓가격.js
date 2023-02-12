// 23.02.12 공부
/* 프로그래밍 핵심 개념 in JavaScript */
// [제어문] 08. 등급별 티켓 가격

// 실습 설명
// 윤식이는 공연 티켓 판매 프로그램을 개발하고 있습니다.
// 다른 부분은 어느 정도 정리가 되었는데, 좌석 등급에 따라서 가격을 알려주는 부분을 해결하지 못했는데요.
// 힘들어하는 윤식이를 위해 switch문을 활용해서 각 등급이 선택되었을 때
// 등급에 따라 가격을 표시해주는 checkPrice 함수를 완성해 주세요.

// 실습 결과
// 코드가 잘 작성되었다면 다음과 같이 출력되어야 합니다.

// R석은 13만원 입니다.
// VIP석은 15만원 입니다.
// S석은 10만원 입니다.
// A석은 8만원 입니다.
// VIP, R, S, A 중에서 하나를 선택해 주세요.


// 템플릿을 살펴보면, 문자열로 작성된 등급('VIP', 'R', 'S', 'A')을
// 파라미터(grade)에 전달해주면 실습 결과와 같은 문장을 출력하는 함수를 만들어야 합니다.
// 파라미터에 전달되는 등급에 따라 case를 나눈 switch문을 아래와 같이 작성할 수 있는데요.

function checkPrice(grade) {
  switch (grade) {
    case 'VIP':
      동작부분;
      break;
    case 'R':
      동작부분;
      break;
    case 'S':
      동작부분;
      break;
    case 'A':
      동작부분;
      break;
    default:
      동작부분;
  }
}

// 다음은 콘솔에 출력하는 문장을 작성해야겠죠?
// 과제의 결과로 제시된 출력예시를 참고해서 함수 위에 작성되어있는 각 등급별 가격 변수와,
// 파라미터 grade를 활용하면 case별 동작부분은 템플릿 문자열로 아래와 같이 작성할 수 있습니다.

function checkPrice(grade) {
  switch (grade) {
    case 'VIP':
      console.log(`${grade}석은 ${VIPPrice}만원 입니다.`);
      break;
    case 'R':
      console.log(`${grade}석은 ${RPrice}만원 입니다.`);
      break;
    case 'S':
      console.log(`${grade}석은 ${SPrice}만원 입니다.`);
      break;
    case 'A':
      console.log(`${grade}석은 ${APrice}만원 입니다.`);
      break;
    default:
      동작부분;
  }
}

// 그리고 끝으로 default의 동작 부분은 우리가 기대하는 등급 이외의 값이 주어졌을 경우에 대한 상황으로 정리하면 되겠죠?
// 출력예시의 가장 마지막에 나오는 문장을 그대로 콘솔에 출력하면 이번 과제에서 요구하는 코드가 완성됩니다.


// 모범 답안

// 각 등급별 가격
let VIPPrice = 15;
let RPrice = 13;
let SPrice = 10;
let APrice = 8;

// 각 등급에 맞는 가격을 출력하는 함수 checkPrice를 완성하세요.
function checkPrice(grade) {
  switch (grade) {
    case 'VIP':
      console.log(`${grade}석은 ${VIPPrice}만원 입니다.`);
      break;
    case 'R':
      console.log(`${grade}석은 ${RPrice}만원 입니다.`);
      break;
    case 'S':
      console.log(`${grade}석은 ${SPrice}만원 입니다.`);
      break;
    case 'A':
      console.log(`${grade}석은 ${APrice}만원 입니다.`);
      break;
    default:
      console.log('VIP, R, S, A 중에서 하나를 선택해 주세요.');
  }
}

// 테스트 코드
checkPrice('R');
checkPrice('VIP');
checkPrice('S');
checkPrice('A');
checkPrice('B');