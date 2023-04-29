// 인증번호 6자리 만들기

// Math.random() - 0이상 1미만 난수 생성
// 0.000 등과 같이 자릿수가 부족한경우 
// padStart() - 첫번째 매개변수 갯 수 만큼 두번째 매개변수로 채움
String(Math.floor( Math.random() * 1000000 )).padStart(6,"0")
'008640'
String(Math.floor( Math.random() * 1000000 )).padStart(6,"0")
'194528'
let result = String(Math.floor( Math.random() * 1000000 )).padStart(6,"0")
undefined
result
'420492'