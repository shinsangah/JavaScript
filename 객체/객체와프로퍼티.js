// // 23.02.13 공부
// /* 프로그래밍과 데이터 in JavaScript */
// // [객체] 01. 객체와 프로퍼티

// // 객체(Object)
// // 자바스크립트의 모든 것이 다 객체다!


{
  brandName: '신상아',
    bornYear: 1993,
      isVeryNice: true,
        worstCourse: Null
}

// // '신상아' 값 'Value' = Property Value
// // brandName 값 이름 'Key'= Property Name
// // 이렇게 Key + Value 한 쌍을 속성 (property) 라고 부른다.

// // Key = Property Name 주의 사항!
// // 1. 첫번쨰 글자는 반드시 문자, 밑줄(_), 달러 기호 ($) 중 하나로 시작!
// // 2. 띄어쓰기 금지!
// // 3. 하이픈(-) 금지!

{
  'brand Name': '신상아',
    'born-Year': 1993,
      '1stCourse' : 아아아,
        isVeryNice: true,
          worstCourse: Null
}

// // 이렇게 따옴표로 감싸주면 문제없이 객체를 만들 수는 있다.

// // Value = Property Value 는 모든 자료형! 값 사용 가능.
// // 문자열, 숫자, 불린, null 도 값이 될 수 있음. 객체 안에 객체도 넣을 수 있음.

{
  'brand Name': '신상아',
    'born-Year': 1993,
      '1stCourse' : 아아아,
        isVeryNice: true,
          worstCourse: {
    title: '자바스크립트 프로그래밍 기초',
      language: 'JavaScript'
  }
}

console.log(typeof {
  'brand Name': '신상아',
  bornYear: 1993,
  isVeryNice: true,
  bestCourse: {
    title: '자바스크립트 프로그래밍 기초',
    language: 'JavaScript'
  }
})

// 이 값이 자료형 object (객체) 로 출력됨