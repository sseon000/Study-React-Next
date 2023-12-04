// HOF - Higher Order Function

// 1. 함수를 리턴하는 함수
// function aaa() {
//   const apple = 10;
//   return function bbb() {
//     const banana = 20;
//     console.log(banana);
//     console.log(apple);
//   };
// }
// 1-1. aaa실행
// aaa();
// 1-2. aaa가 리턴한 bbb실행
// (aaa())() > aaa()()

// 2. 함수를 리턴하는 함수 - 인자
// function aaa(apple) {
//   return function bbb(banana) {
//     console.log(banana);
//     console.log(apple);
//   };
// }
// aaa(100)(500)

// 3. 함수를 리턴하는 함수 - 화살표 함수
// const aaa = (apple) => {
//   return (banana) => {
//     console.log(apple);
//     console.log(banana);
//   };
// };
// 3-1. 중괄호와 return 사이에 아무것도 없으면 ()로 변경가능 > ()에 특별한 뜻이 없으면 생략가능
// const aaa = (apple) => (banana) => {
//   console.log(apple);
//   console.log(banana);
// };
// aaa(50)(60);

// 4. 함수를 리턴하는 함수 - 화살표 함수, 인자 여러개
const aaa = (apple) => (banana) => (tomato) => (orange) => {
  console.log(apple);
  console.log(banana);
  console.log(tomato);
  console.log(orange);
};

aaa(10)(20)(30)(40);
