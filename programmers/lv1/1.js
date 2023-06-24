// 달리기경주
function solution(players, callings) {
    let answer = []

    for(let i=0; i<callings.length; i++) {
        // console.log(`callings : ${i} ${callings[i]}`);
        let temp;
        for(let j=0; j<players.length; j++) {
            // console.log(`players : ${j} : ${players[j]}`);
            if(callings[i] === players[j]) {
                console.log(`${callings[i]} ${players[j]}`)
                temp = players[j-1];
                players[j-1] = players[j]
                players[j] = temp;
            }
            // console.log(`players : ${players}`);
        }
    }

    return answer;
}

let players = ["mumu", "soe", "poe", "kai", "mine"];
let callings = ["kai", "kai", "mine", "mine"]

solution(players,callings);

// 시간 초과~~~~
// for문 시간복잡도 와장창창
// https://coding-life-diary.tistory.com/5
// map을 temp array로 사용해 시간복잡도를 낮추는 방법..





