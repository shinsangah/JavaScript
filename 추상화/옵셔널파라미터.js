// 23.02.11 공부
/* 프로그래밍 핵심 개념 in JavaScript */
// [추상화] 09. 옵셔널 파라미터

// 옵셔널 파라미터 (Optianl Parameters)
function sayHello(name) {
  console.log(`안녕하세요 ${name}님!`);
}

sayHello('신상아');
// 안녕하세요 신상아님!
sayHello('좋아요');
// 안녕하세요 좋아요님!
sayHello('사랑해');
// 안녕하세요 사랑해님!
sayHello();
// 안녕하세요 undefined님!
// 파라미터가 있는데 함수를 호출할 때, 아무런 값도 전달하지 않았으니까 undefined.

let x;
console.log(x);
// undefined

// 변수를 선언하고 아무런 값을 할당하지 않았으니까.

console.log(sayHello('신상아최고'));
// 안녕하세요 신상아최고님!
// undefined

// sayHello 함수처럼 함수를 호출했는데, return문이 작성되어있지 않은 경우에는
// 이 호출 부분이 undefined 값을 돌려 받는다.


// 이렇게 미리 값을 할당한 것 (nationality = '한국')
// 을 '옵셔널 파라미터' 라고 부른다.
function introduce(name, age, nationality = '한국') {
  console.log(`제 이름은 ${name}입니다.`);
  console.log(`나이는 ${age}살 이고.`);
  console.log(`국적은 ${nationality}입니다.`);
}

introduce('신상아', 31, '스웨덴'); // 값을 모두 전달한 경우
console.log(''); // 엔터 뛰어쓰기
introduce('신상아', 31); // 파라미터 값을 생략한 경우

// 제 이름은 신상아입니다.
// 나이는 31살 이고,
// 국적은 스웨덴입니다.

// 제 이름은 신상아입니다.
// 나이는 31살 이고,
// 국적은 한국입니다.

// introduce('신상아', 31); // 파라미터 값을 생략한 경우
// 마지막에 미리 할당한 값 (nationality = '한국') 이 자동으로 출력됨


// 옵셔널 파라미터는 선언을 할 때 반드시 생성한 다음,
// 가장 뒤쪽으로 선언해줘야 합니다.

function introduce(name, nationality = '한국', age) {
  console.log(`제 이름은 ${name}입니다.`);
  console.log(`나이는 ${age}살 이고.`);
  console.log(`국적은 ${nationality}입니다.`);
}

introduce('신상아', 31, '스웨덴'); // 값을 모두 전달한 경우
console.log(''); // 엔터 뛰어쓰기
introduce('신상아', 31); // 파라미터 값을 생략한 경우

// 제 이름은 신상아입니다.
// 나이는 31살 이고,
// 국적은 스웨덴입니다.

// 제 이름은 신상아입니다.
// 나이는 undefined살 이고,
// 국적은 31입니다.
