export default function MapElPage(){
    // 1. 기본방법
    ['철수','영희','훈이'].forEach((el, index) => {
        console.log(`el: ${el}, index: ${index}`);
    });

    // 2. 매개변수를 변경한 방법
    ['철수','영희','훈이'].forEach((asdf, qwer) => {
        console.log(`el: ${asdf}, index: ${qwer}`);
    });

    // 3. 함수선언식 방법
    ['철수','영희','훈이'].forEach(function (asdf, qwer) {
        console.log(`el: ${asdf}, index: ${qwer}`);
    });

    // 4. el과 index 바꾸기
    ['철수','영희','훈이'].forEach((index, el) => {
        console.log(`el: ${index}, index: ${el}`);
    });

    return (
        <>

        </>
    )
}