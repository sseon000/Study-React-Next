/**
 * 데이터 타입, 연산자 실습
 */
1 + 1
// 2
1 + "만원"
// '1만원'
1 + "1"
// '11'
1 - "1"
// 0
"코드"+"캠프"
// '코드캠프'
"123" == 123
// true
"123" === 123
// false
true && true
// true
true && false
// false
false || true
// true
!false
// true

// 조건문 실습 1
if(1+1 === 2) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}    
// VM1119:2 정답입니다
// undefined
if(true) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}    
// VM1165:2 정답입니다
// undefined
if(!true) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}    
// VM1227:4 틀렸습니다
// undefined
if(0) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}    
// VM1265:4 틀렸습니다
// undefined
if(1) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}    
// VM1374:2 정답입니다
// undefined

/***************quiz****************/
const profile = {
    name: "철수",
    age: 12,
    school: "다람쥐초등학교"
}

// 실습
let csAge = profile.age;

if(csAge <= 7) {
    console.log('어린이입니다')
} else if((8 <= csAge) && (csAge <= 19)) {
    console.log('학생입니다')
} else {
    console.log('성인입니다')
}

// 조건문 실습 2
if(csAge >= 20) {
    console.log('성인입니다')
} else if(csAge >= 8) { // 코드 최적화 - 20세 이상은 없고, 8세 이상이면 8~19세만 남음
    console.log('학생입니다')
} else if(csAge > 0) {
    console.log('어린이입니다')
} else {
    console.log('잘못 입력하셨습니다')
}