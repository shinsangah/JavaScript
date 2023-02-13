// // 23.02.13 공부
// /* 프로그래밍과 데이터 in JavaScript */
// // [객체] 03. 객체에서 데이터 접근하기


// 객체 (Object)
let sangah = {
  name: '신상아',
  'born Year': 1993,
  isVeryNice: true,
  worstCourse: null,
  bestCourse: {
    title: '자바스크립트 프로그래밍 기초',
    language: 'JavaScript'
  }
};

// let sangah = { : sangah 라는 변수에 담아주었다.
// 이 상태에서 객체에 property에 접근하는 방법은 2가지가 있다.

// 점 표기법 (objectName.propertyName)
console.log(sangah.bornYear); // 가장 간단하고 많이 사용되는 방식
// 점표기법에서는 'born Year' 이렇게 작은따옴표인 경우 사용 못해서 '대괄호 방식' 사용함.

// 대괄호 표기법 (objectName['propertyName'])
console.log(sangah['born Year']);
// 번거롭긴 하지만, 대괄호 표기법을 사용하면 property name을 좀 더 유연하게 구상할 수 있다는 장점.
console.log(sangah['born ' + 'Year']); // 띄어쓰기 중요
// 대괄호 표기법은 문자열로 사용할 수 있는 어떤 방법이든 사용이 가능하다.

let propertyName = 'name';
console.log(sangah[propertyName]);

// 객체 안에 객체 접근 방식
// 특별한 방법없이 property name을 계속 연결해서 접근하면 된다.
console.log(sangah.bestCourse.title);
// 점 표기법으로 접근할 수 없다면, 대괄호표기법을 사용해주면 된다.
console.log(sangah.bestCourse['title']);

// 존재하지 않는 property에 접근하려고 하면,
// error 가 나는게 아니라 undeifned가 뜬다!
console.log(sangah.bestCourse['teacher']);

// 정리
// 객체는 변수에 담겨서 이름을 만들고,
// 점 표기법 / 대괄호 표기법 2가지 방식으로 그 값에 접근할 수 있다.
