// // 23.02.13 공부
// /* 프로그래밍과 데이터 in JavaScript */
// // [객체] 06. 영어 단어장 2

// 실습 설명
// 시원이는 지난번에 외웠던 영어단어 5가지 중에서
// function, constant, local은 이제 확실하게 다 외웠습니다.

// 오늘 외울 단어는

// [extend] = 확장하다
// [export] = 내보내다
// [import] = 불러오다
// [default value] = 기본값

// 총 4가지입니다.

// 지난번에 작성한 코드를 참고해서 myVoca 변수를 수정하지 않은 채로 아래 내용들을 수행하는 코드를 작성해 주세요.

// 이미 다 외워버린 단어 3개는 삭제한다.
// 오늘 외울 단어를 추가한다.
// 마지막 줄에서 default value의 뜻을 콘솔에 출력한다.

// 실습 결과
// 코드를 잘 작성하셨다면 아래와 같은 출력 결과가 나타나야 합니다.


let myVoca = {
  function: '함수',
  variable: '변수',
  constant: '상수',
  local: '지역의',
  global: '전반적인',
};

delete myVoca.function;
delete myVoca.constant;
delete myVoca.local;

console.log(myVoca);
console.log(myVoca.constant);

myVoca.extend = '확장하다'
myVoca.export = '내보내다'
myVoca.import = '불러오다'
myVoca['default value'] = '기본값'

console.log(myVoca);
console.log(myVoca.export);
console.log(myVoca['default value']);


// { variable: '변수', global: '전반적인' }
// undefined
// {
//   variable: '변수',
//   global: '전반적인',
//   extend: '확장하다',
//   export: '내보내다',
//   import: '불러오다',
//   'default value': '기본값'
// }
// 내보내다
// 기본값