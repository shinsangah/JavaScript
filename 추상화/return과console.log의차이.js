// 23.02.11 공부
/* 프로그래밍 핵심 개념 in JavaScript */
// [추상화] 07.return과 console.log의 차이

// 처음 프로그래밍을 공부할 땐 console.log 와 return 을 헷갈려하는 경우가 많다.
// 몇가지 상황들을 보며 둘의 차이가 뭔지 정확히 알아봅시다.

function printSquare(x) {
  console.log(x * x);
}
// 9

function getSquare(x) {
  return x * x;
}

printSquare(3)
// 9

getSquare(3)
// 아무것도 출력되는게 없음
// 함수 호출 부분이 9로 대체가 되는데,
// return문이 실행됐으니까 자연히 getSquare 함수는 종료가 된다.
// getSquare 부분이 9로 대체가 됐지, 그 다음 동작에 대해선 전혀 작성된 코드가 없기 때문이다.

console.log(getSquare(3));
// 9
// getSquare(3)은 9가 된다는 것을 확인했으니까 결국 이 코드는
// console.log 9 가 된다는 말이다.

console.log(printSquare(3));
// undefined
// return문이 따로 작성되어있지 않는 함수를 실행하면
// 함수 호출 부분은 'undefined' 값을 return 받게 된다.
// 처음부터 아무 값도 할당하지 않았다.


// return : 함수를 실행하고, 어떤 값을 돌려주는 것
// console.log : 콘솔에 어떤 값을 출력해주는 함수
