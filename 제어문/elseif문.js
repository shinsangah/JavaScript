// 23.02.11 공부
/* 프로그래밍 핵심 개념 in JavaScript */
// [제어문] 03. else if문

// if문 (if statement)
// let temperature = 1;

// if (temperature <= 0) {
//   console.log('물이 업니다.');
// } else {
//   console.log('물이 얼지 않습니다.');
// }


let temperature = 120;

if (temperature <= 0) {
  console.log('물이 업니다.');
} else {
  if (temperature < 100) {
    console.log('물이 얼지도 끓지도 않습니다.');
  } else {
    console.log('물이 끓습니다.');
  }
}



let temperature = 120;

if (temperature <= 0) {
  console.log('물이 업니다.');
} else {
  if (temperature < 100) {
    console.log('물이 얼지도 끓지도 않습니다.');
  } else {
    if (temperature < 150) {
      console.log('물이 끓습니다.');
    } else {
      console.log('물이 모두 수증기가 되었습니다.');
    }
  }
}


// // 결과값은 잘 나오지만, 중괄호가 복잡하게 얽혀서
// // 가독성이 썩 좋지는 않습니다.
// 불가피한 경우에는 한 번정도 중첩하는건 괜찮을 수 있겠지만
// 만약 이런 중첩이 여러번 진행되면 훨씬 더 가독성 문제가 커진다.


// 가독성을 좋게 하기 위해 위에 있는 else if 를 하나로 묶음. 가독성 더 좋음.
let temperature = -105;

if (temperature <= 0) {
  console.log('물이 업니다.');
} else if (temperature < 100) {
  console.log('물이 얼지도 끓지도 않습니다.');
} else {
  console.log('물이 끓습니다.');
}



let temperature = 140;

if (temperature <= 0) {
  console.log('물이 업니다.');
} else if (temperature <= 100) {
  console.log('물이 얼지도 끓지도 않습니다.');
} else if (temperature < 150) {
  console.log('물이 끓습니다.');
} else {
  console.log('물이 모두 수증기가 되었습니다.');
}