// // 23.02.13 공부
// /* 프로그래밍과 데이터 in JavaScript */
// // [객체] 08. 영어 단어장 3

// 실습 설명

// 지난번 과제에서 단어장 객체에 단어를 추가하고 삭제하는 연습을 해봤는데요.
// 이번에는 단어장 객체에 단어를 추가하고 삭제하고, 콘솔에 출력도 해주는 다양한 메소드를 만들어 사용해 봅시다.

// 단어를 추가하는 addVoca메소드를 만들어 주세요.
// addVoca메소드는 영어단어와 뜻, 총 두 개의 문자열 값을 파라미터로 전달받아서 myVoca 객체에 새로운 프로퍼티를 추가하는 메소드 입니다.

// 단어를 삭제하는 deleteVoca메소드를 만들어 주세요.
// deleteVoca메소드는 영단어 문자열을 파라미터로 전달받아서 해당하는 단어를 삭제하는 메소드 입니다.

// 단어를 출력하는 printVoca메소드를 만들어 주세요.
// printVoca메소드는 영어단어 문자열을 파라미터로 전달받아서 특별한 포맷의 문자열을 콘솔에 출력하는 메소드 입니다.
// 특별한 포맷은 "[영어단어]"의 뜻은 "[뜻]"입니다.로 제작해 주세요.


// 실습 결과

// 코드를 잘 작성하셨다면, 다음과 같은 결과가 출력되어야 합니다.

// {
// addVoca: [Function: addVoca],
// deleteVoca: [Function: deleteVoca],
// printVoca: [Function: printVoca],
// parameter: '매개 변수',
// element: '요소',
// property: '속성'
// }
// {
// addVoca: [Function: addVoca],
// deleteVoca: [Function: deleteVoca],
// printVoca: [Function: printVoca],
// property: '속성'
// }

// "property"의 뜻은 "속성"입니다.



// '해설'

// 빈 객체에 3가지 메소드를 만드는 과제입니다.
// 일단 가장 먼저 프로퍼티를 추가하는 메소드 인데요.
// addVoca라는 이름의 프로퍼티에다가,
// 프로퍼티 값으로 myVoca객체에 새로운 프로퍼티를 추가하는 동작을 가진 함수를 선언해 주면 됩니다.
// 문제의 조건을 보면 두 종류의 문자열 값을 파라미터로 전달 받는다고 했는데요.
// 해당 조건을 만족하는 addVoca메소드는 아래와 같이 작성할 수 있습니다.

let myVoca = { //객체
  addVoca: function (key, value) { //addVoca 라는 프로퍼티
    myVoca[key] = value;
  },
};

// addVoca메소드 테스트 코드
myVoca.addVoca('parameter', '매개 변수');
myVoca.addVoca('element', '요소');
myVoca.addVoca('property', '속성');
console.log(myVoca);

// deleteVoca메소드 테스트 코드
myVoca.deleteVoca('parameter');
myVoca.deleteVoca('element');
console.log(myVoca);

// printVoca메소드 테스트 코드
myVoca.printVoca('property');

// 한 가지 조심해야 될 부분은 파라미터로 다른 변수에 담긴 값을 가져올 때는 대괄호 표기법을 사용해 주어야 한다는 겁니다.
// 위 메소드에서 만약 점 표기법으로 key값에 접근을 하게 되면, 파라미터 key를 가리키는 것이 아니라,
// myVoca에 문자 그대로 key라는 프로퍼티 이름을 가진 프로퍼티 값에 접근하는 것과 같은 의미가 되기 때문이죠.

// 자, 다음은 삭제 메소드 입니다. 추가 메소드를 잘 만드셨다면 삭제는 어렵지 않게 만들 수 있는데요.
// 삭제는 delete 연산자와 대괄호 표기법으로 파라미터를 잘 활용해서 아래와 같이 작성할 수 있습니다.


let myVoca = {
  // 여기에 코드를 작성하세요
  addVoca: function (key, value) {
    myVoca[key] = value;
  },
  deleteVoca: function (key) {
    delete myVoca[key];
  },
};

// addVoca메소드 테스트 코드
myVoca.addVoca('parameter', '매개 변수');
myVoca.addVoca('element', '요소');
myVoca.addVoca('property', '속성');
console.log(myVoca);

// deleteVoca메소드 테스트 코드
myVoca.deleteVoca('parameter');
myVoca.deleteVoca('element');
console.log(myVoca);

// printVoca메소드 테스트 코드
myVoca.printVoca('property');

// 참고로 메소드도 프로퍼티기 때문에, 잊지 말고 꼭 쉼표로 각 프로퍼티를 구분해 주세요.
// 마지막 세 번째 메소드는 프로퍼티 값을 조합해서 특별한 포멧을 갖춘 문자열로 출력하는 메소드인데요.
// 프로퍼티에 접근하는 방식과 console.log함수, 그리고 템플릿 문자열을 활용하면 아래와 같이 간단하게 작성해 볼 수 있습니다.


// 모범 답안

let myVoca = {
  // 여기에 코드를 작성하세요
  addVoca: function (key, value) {
    myVoca[key] = value;
  },
  deleteVoca: function (key) {
    delete myVoca[key];
  },
  printVoca: function (key) {
    console.log(`"${key}"의 뜻은 "${myVoca[key]}"입니다.`);
  },
};

// addVoca메소드 테스트 코드
myVoca.addVoca('parameter', '매개 변수');
myVoca.addVoca('element', '요소');
myVoca.addVoca('property', '속성');
console.log(myVoca);

// deleteVoca메소드 테스트 코드
myVoca.deleteVoca('parameter');
myVoca.deleteVoca('element');
console.log(myVoca);

// printVoca메소드 테스트 코드
myVoca.printVoca('property');


// 실습 결과

// {
// addVoca: [Function: addVoca],
// deleteVoca: [Function: deleteVoca],
// printVoca: [Function: printVoca],
// parameter: '매개 변수',
// element: '요소',
// property: '속성'
// }
// {
// addVoca: [Function: addVoca],
// deleteVoca: [Function: deleteVoca],
// printVoca: [Function: printVoca],
// property: '속성'
// }
// "property"의 뜻은 "속성"입니다.