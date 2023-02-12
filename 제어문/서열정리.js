// 23.02.11 공부, 23.02.12 복습
/* 프로그래밍 핵심 개념 in JavaScript */
// [제어문] 05. 서열 정리


// 실습 설명

// Peter Kim(26세, 남성)은 이제 막 한국에서 거주하기 시작한 싱가포르 사람입니다.
// 한국에서는 나이와 성별 따라 호칭 다르다는 것에 Peter는 큰 어려움을 느끼고 있는데요.

// 한국에서는 아래처럼 각각의 경우에 따라 호칭이 달라지죠.

// 나이가 같은 경우: '친구'

// 자신보다 나이가 어릴 경우:
// 2 - 1. 상대방 성별이 남성인 경우: '남동생',
// 2 - 2. 상대방 성별이 여성인 경우: '여동생'

// 자신보다 나이가 많을 경우:
// 3 - 1. 상대방 성별이 남성인 경우: '형',
// 3 - 2. 상대방 성별이 여성인 경우: '누나'

// 이렇게 많은 경우에 호칭을 맞게 사용하는게 너무 어렵다고 합니다.
// Peter를 위해서 미리 자신의 나이와 성별을 입력해두고,
// 상대방의 나이와 성별을 전달하면 호칭을 판별해주는 whatShouldICallYou함수를 만들어 줍시다.

// 실습 결과

// 코드를 잘 작성했다면, 다음과 같은 결과가 출력되어야 합니다.

// 여동생
// 남동생
// 친구
// 형
// 누나



// 우선 템플릿을 살펴보면, 나이는 숫자 값을,
// 성별은 'male'과 'female'이라는 문자열을 사용하는 것을 유추해볼 수 있습니다.

// 주어진 호칭 조건을 살펴보면 조건들이 생각보다 많은데요.
// 2가지 이상의 여러 가지 조건들이 필요한 경우에는 else if문을 활용할 수 있습니다. 
// 주어진 호칭 조건을 1번부터 하나씩 차례대로 정리를 해보면, 다음과 같이 조건문을 작성할 수 있는데요.
// 여러 가지 조건이 사용된 만큼 이해가 어려우신 분들은 코멘트를 한 번씩 확인해 주세요.


if (myAge === yourAge) { // 나와 나이가 같은 경우

} else if (myAge > yourAge) { // 상대방이 나이가 더 적은 경우
  if (yourGender === 'male') { // 상대방 성별이 남성인 경우

  } else if (yourGender === 'female') { // 상대방 성별이 여성인 경우

  }
} else { // 상대방이 나이가 더 많은 경우
  if (yourGender === 'male') { // 상대방 성별이 남성인 경우

  } else if (yourGender === 'female') { // 상대방 성별이 여성인 경우

  }
}


// 자 이렇게 조건이 잘 정리되었다면, 해당하는 동작들을 작성해주면 되는데요.
// 테스트 코드를 유심히 살펴보면, 함수에서 호칭을 바로 콘솔에 출력하는 것이 아니라,
// 변수에 적절한 호칭값을 담아두고 나중에 console.log함수를 활용해서 각 변수들의 호칭값을 출력하고 있죠?
// 그렇다면 함수에서는 적절한 값을 return해 주어야 합니다.


if (myAge === yourAge) { // 나와 나이가 같은 경우
  return callFriend;
} else if (myAge > yourAge) { // 상대방이 나이가 더 적은 경우
  if (yourGender === 'male') { // 상대방 성별이 남성인 경우
    return callYoungerBrother;
  } else if (yourGender === 'female') { // 상대방 성별이 여성인 경우
    return callYoungerSister;
  }
} else { // 상대방이 나이가 더 많은 경우
  if (yourGender === 'male') { // 상대방 성별이 남성인 경우
    return callOlderBrother;
  } else if (yourGender === 'female') { // 상대방 성별이 여성인 경우
    return callOlderSister;
  }
}

// 자, 이렇게 함수를 완성하고 실행시키면 peter에게 맞는 호칭이 잘 출력이 되는 걸 확인할 수 있습니다.


// 나의 나이와, 나의 성별을 저장하는 변수
let myAge = 26;
let myGender = 'male';

// 호칭을 담은 변수
let callOlderBrother = '형';
let callOlderSister = '누나';
let callFriend = '친구';
let callYoungerSister = '여동생';
let callYoungerBrother = '남동생';

// 상대방의 나이와 성별에 따른 호칭을 리턴하는 함수 whatShouldICall를 완성하세요.

function whatShouldICallYou(yourAge, yourGender) {
  if (myAge === yourAge) {
    return callFriend;
  } else if (myAge > yourAge) {
    if (yourGender === 'male') {
      return callYoungerBrother;
    } else if (yourGender === 'female') {
      return callYoungerSister;
    }
  } else {
    if (yourGender === 'male') {
      return callOlderBrother;
    } else if (yourGender === 'female') {
      return callOlderSister;
    }
  }
}

// 테스트 코드
let result1 = whatShouldICallYou(25, 'female');
let result2 = whatShouldICallYou(20, 'male');
let result3 = whatShouldICallYou(26, 'female');
let result4 = whatShouldICallYou(30, 'male');
let result5 = whatShouldICallYou(31, 'female');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

// 여동생
// 남동생
// 친구
// 형
// 누나


// 만일 peter가 아니라 다른 나이의 여성인 경우에 이 코드를 적용하고자 한다면,
// myAge와 myGender 부분, 그리고 callOlderBrother, callOlderSiste 부분만 수정해주면 되겠죠?

// 나의 나이와, 나의 성별을 저장하는 변수입니다.
let myAge = 25;
let myGender = 'female';

// 호칭을 담은 변수입니다.
let callOlderBrother = '형';
let callOlderSister = '누나';
let callFriend = '친구';
let callYoungerSister = '여동생';
let callYoungerBrother = '남동생';

// 이렇게만 수정하고 코드를 실행해보면,
// 아래와 같이 출력이 되는걸 확인할 수 있습니다.

// 친구
// 남동생
// 언니
// 오빠
// 언니


// 모범 답안

// 나의 나이와, 나의 성별을 저장하는 변수입니다.
let myAge = 26;
let myGender = 'male';

// 호칭을 담은 변수입니다.
let callOlderBrother = '형';
let callOlderSister = '누나';
let callFriend = '친구';
let callYoungerSister = '여동생';
let callYoungerBrother = '남동생';

// 상대방의 나이와 성별에 따른 호칭을 리턴하는 함수 whatShouldICall를 완성하세요.
function whatShouldICallYou(yourAge, yourGender) {
  // 여기에 코드를 작성해 주세요.
  if (myAge === yourAge) {
    return callFriend;
  } else if (myAge > yourAge) {
    if (yourGender === 'male') {
      return callYoungerBrother;
    } else if (yourGender === 'female') {
      return callYoungerSister;
    }
  } else {
    if (yourGender === 'male') {
      return callOlderBrother;
    } else if (yourGender === 'female') {
      return callOlderSister;
    }
  }
}

// 테스트 코드
let result1 = whatShouldICallYou(25, 'female');
let result2 = whatShouldICallYou(20, 'male');
let result3 = whatShouldICallYou(26, 'female');
let result4 = whatShouldICallYou(30, 'male');
let result5 = whatShouldICallYou(31, 'female');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

