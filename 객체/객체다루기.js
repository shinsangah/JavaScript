// // 23.02.13 공부
// /* 프로그래밍과 데이터 in JavaScript */
// // [객체] 05. 객체 다루기

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

console.log(sangah.name);
sangah.name = 'shinsangah';
console.log(sangah.name);

// 신상아
// shinsangah

//추가
console.log(sangah.ceo);
sangah.ceo = '신상아';
console.log(sangah.ceo);

// undefined
// 신상아
// console에서 sangah를 치고 엔터 눌러, 열면 객체가 펼쳐는데,
// 거기에 ceo 라는 property가 잘 추가된 것을 확인할 수 있다.

//삭제
console.log(sangah.worstCourse);
delete sangah.worstCourse;
console.log(sangah.worstCourse);

// null
// undefined
// console에서 sangah를 치고 엔터 눌러, 열면 객체가 펼쳐는데,
// 거기에 worstCourse 라는 property가 삭제된 것을 확인할 수 있다.

console.log(sangah.name !== undefined);
// true
// undefined 로 불일치 비교를 해서 객체에 property 존재 여부를 확인할 수 있다.

// 또 다른 존재 여부 확인 방법 in
// 'propertyName' in object
console.log('name' in sangah);
// true (불린 형태로 값 리턴해줌)

// 그런데, undefined 로 비교해주면 되는데 굳이 왜
// in 이라는 연산자가 있는걸까요? 일단은 더 짧아서 이해하기도 쉽고,
// property를 확인할 때 좀 더 안전하게 확인하기 위함이다.
// 예를들어 worstCourse에 실수로 undefined 값을 지정했다고 하면,

let sangah = {
  name: '신상아',
  'born Year': 1993,
  isVeryNice: true,
  worstCourse: undefined,
  bestCourse: {
    title: '자바스크립트 프로그래밍 기초',
    language: 'JavaScript'
  }
};

// 이렇게 되면 worstCourse가 property로 존재하고 있지만,
// undefined 와 비교했을 때 false가 나온다.
// console.log(sangah.worstCourse !== undefined);
// false

// 사실상 저 위에서 worstCourse: undefined 값을 할당하는 것이
// 적절한 것은 아니지만, 실수로 undefined 값을 할당한다거나
// 다른 함수나 변수에 의해서 의도치 않게 undefined 값이 할당될 수도 있기 때문에
// 조금 더 안전하게 property 값을 확인하기 위해서는 in 연산자를 활용하는 것이 좋다.

// 그리고 in 연산자는 불린값을 return 하니 if문에서 조건 부분에 활용하기도 좋겠죠.
if ('name' in sangah) {
  console.log(`name 값은 ${sangah.name}입니다.`);
} else {
  console.log('name 프로퍼티는 존재하지 않습니다.');
}
// name 값은 신상아입니다.