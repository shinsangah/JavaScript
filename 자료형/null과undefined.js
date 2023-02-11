// 23.02.11 공부
/* 프로그래밍 핵심 개념 in JavaScript */
// [자료형] 20. null과 undefined

자료형(Data type)
null과 undefined

'값이 없다'
null : 의도적으로 표현할 때 사용하는 값
undefined: 우리가 직접 값을 표현하기 보다 코드를 실행하면서 값이 없다라는 것을 확인하는 값

let codeit;
console.log(codeit);
// undefined
// 자바스크립트에서는 값이 주어지지 않은 변수에서는 undefined 갖고있다.
// 선언을 한 다음 값을 정해주지 않았다는 것을 의미한다. 지정된 값이 없다는 것.

codeit = null;
console.log(codeit);
// null
// 코드를 작성하는 사람이 의도적으로 비어있는 값을 표현하고 싶을 때,
// 의도적으로 없다 라는 의미의 값을 '지정'할 때 사용하는 자료.

console.log(null == undefined);
// true
// 동등 비교일 때는 둘 다 비슷한 의미를 가지고 있어서 true
console.log(null === undefined);
// false
// 일치 비교를 할 때는 두 값이 서로 다르기 때문에 false

let codeit;
console.log(codeit);
// undefined
codeit = null;
console.log(codeit);
// null
codeit = undefined;
console.log(codeit);
// undefined
// undefined 값을 직접 사용하는 것도 코드를 실행하는데도 문제 없긴 한데,
// 그런데 이런 방식은 null과 undefined를 구분하는데에 혼란을 줄 수 있기 때문에
// 의도적으로 값이 없는 상태를 표현하려면 반드시 'null'을 사용할 것을 권장한다.

// 물을 마시는 것에 비유를 해보자.
let cup;
console.log(cup);
// undefined
// 컵의 상황이 빈 컵이기 때문에
cup = '물';
console.log(cup);
// 물
cup = null;
console.log(cup);
// null
// 물을 마셔서 의도적으로 비움

