// // 23.02.14 공부
// /* 프로그래밍과 데이터 in JavaScript */
// // [객체] 09. for...in 반복문

// for..in

// for (변수 in 객체) {
//   동작부분
// }

let sangah = {
  name: '신상아',
  bornYear: 1993,
  isVeryNice: true,
  worstCourse: null,
  bestCourse: '자바스크립트 프로그래밍 기초'
}

for (let key in sangah) {
  console.log(key);
  // name
  // bornYear
  // isVeryNice
  // worstCourse
  // bestCourse

  console.log(sangah[key]);
  //   name
  // 신상아
  // bornYear
  // 1993
  // isVeryNice
  // true
  // worstCourse
  // null
  // bestCourse
  // 자바스크립트 프로그래밍 기초
}

// key 이름 그때 그떄 상황에 맞게 변경해도 가능
