// 23.02.10 공부
/* 프로그래밍 핵심 개념 in JavaScript */
// [자료형] 09. 불린형 연습

// 불린 (Boolean)
console.log(2 < 1 && 'Codeit' !== 'Codeit');
// false && false = false

console.log(7 !== 7 || 4 < 3);
// true

let x = 3;
console.log(x > 4 || !(x > 2));
// →
let x = 3;
console.log(x > 4 || !(x > 2));
console.log(x > 4 || !(x > 2));
// x>4 = 3>4
// →
let x = 3;
console.log(x > 4 || !(x > 2));
console.log(3 > 4 || !(x > 2));
// →
let x = 3;
console.log(x > 4 || !(x > 2));
console.log(false || !(x > 2));
// x>2 = 3>2
// →
let x = 3;
console.log(x > 4 || !(x > 2));
console.log(false || !(3 > 2));
// →
let x = 3;
console.log(x > 4 || !(x > 2));
console.log(false || !true);
// →
let x = 3;
console.log(x > 4 || !(x > 2));
console.log(false || false);
// →
let x = 3;
console.log(x > 4 || !(x > 2));
console.log(false);

// false
// false
