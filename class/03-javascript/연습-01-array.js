// 배열
const arr = ["배열"];
const arr2 = ["배열2"];

// 배열의 길이 구하기
arr.length;

// 배열의 값 꺼내기
arr[0]; //숫자(인덱스)

// 배열 맨 뒤에 값 추가
arr.push();

// 배열 맨 마지막 값 삭제
arr.pop();

// 배열 요소 정렬
arr.sort();

// 배열 데이터 확인
arr.includes("배열"); //값

// 배열 2개 연결
arr.concat(arr2);

// 배열을 문자로 만들기
arr.join();

// 배열 분리
arr.slice();

// 배열에서 원하는 요소 뽑기
// arr.filter();

// 배열의 모든 요소 변경
// arr.map();

// 문자열도 배열처럼 다룰 수 있다
// 문자열 배열
const email = "codecamp@gmail.com";
email[0] = "c";
email[1] = "o";

/**********************실습**************************/ 
let classmates = ["철수", "영희", "훈이"]
// undefined
classmates
// (3)?['철수', '영희', '훈이']
classmates[0]
// '철수'
classmates[1]
// '영희'
classmates[2]
// '훈이'
classmates.includes("훈이")
// true
classmates.includes("맹구")
// false
classmates.length
// 3
classmates.push("맹구")
// 4
classmates.includes("맹구")
// true
classmates
// (4)?['철수', '영희', '훈이', '맹구']
classmates.length
// 4
classmates.pop()
// '맹구'
classmates
// (3)?['철수', '영희', '훈이']

/**********************quiz**************************/ 
/**
 * developer라는 변수를 만들고, 
 * 자신이 원하는 개발자로의 성공 키워드가 5개 담겨있는 배열을 할당한 뒤
 * 가장 중요하다고 생각하는 키워드를 index를 이용하여 콘솔에 표시해 보세요
 */
let developer = ["커뮤니케이션","호기심","트렌드","습득","성실",];
console.log(developer[0]);
/**
 * dream이라는 변수에
 * ["커리어점프","성공","할수있다"] 배열을 할당한 뒤
 * developer 배열과 하나로 합쳐 보세요
 */
let dream = ["커리어점프","성공","할수있다"];
developer.concat(dream);
let result = developer.concat(dream); // 새로운 변수에 배열을 담아서 사용가능

