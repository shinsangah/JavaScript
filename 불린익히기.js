// 23.02.10 공부
/* 프로그래밍 핵심 개념 in JavaScript */
// [자료형] 10. 불린 익히기

// false 인 경우 고르기

false || 4 < 2
'코드잇' !== "코드잇"
!!false

// 다음 코드를 읽고 결과가 true인 경우를 모두 선택하기
let x = 4;
let y = false;
let z = 'c';

y || !y
x < 4 || !(y === true)
// y === true 즉, false ===true 되니깐 false
// false||!(false) 되니까 false||true 결과는 true