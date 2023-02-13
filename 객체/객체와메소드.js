// // 23.02.13 공부
// /* 프로그래밍과 데이터 in JavaScript */
// // [객체] 07. 객체와 메소드

// 메소드 (Method)

let greetings = {
  sayHello: function () {
    console.log('Hello!');
  },
  sayHi: function () {
    console.log('Hi!');
  },
  sayBye: function () {
    console.log('Bye!');
  }
};

greetings.sayHello();
// Hello!

// 만약에 파라미터가 필요한 경우라면,
// 그동안 함수를 이용했던 것 처럼 파라미터를 활용해주면 된다.

let greetings = {
  sayHello: function (name) {
    console.log(`Hello! ${name}!`);
  },
  sayHi: function () {
    console.log('Hi!');
  },
  sayBye: function () {
    console.log('Bye!');
  }
};

greetings.sayHello('신상아');
// Hello! 신상아!

// 대괄호표기법도 사용 가능,
// 대괄호 표기법으로 property에 먼저 접근한 다음
// 소괄호를 열어서 메소드를 호출하면 됩니다.

greetings['sayHello']('신상아');
// Hello! 신상아!

// 그런데 그냥 함수를 사용해도 될텐데 왜 굳이 메소드를 만들어서 사용하는 것일까요?
// 메소드는 어떤 객체의 고유한 동작으로써 함수에 의미를 부여할 수 있기 때문입니다.

// 그냥 간단하게 생각하면, 메소드는 어떤 객체의 고유한 동작으로써
// 함수의 의미를 부여할 수 있기 때문입니다.

// 사각형
let rectAngel = {
  width: 30,
  height: 50,
  getArea: function () {
    return rectAngel.width * rectAngle.height;
  }
}

// 삼각형
let triAangle = {
  width: 15,
  height: 40,
  getArea: function () {
    return triAangle.width * triAangle.height / 2;
  }
}