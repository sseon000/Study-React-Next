let isStarted = false;

const auth = () => {

    if(isStarted === false) {
        const divTimer = document.getElementById("timer")
        const btnFinish = document.getElementById("finish")

        // 타이머가 작동중이 아닐때
        isStarted = true
        btnFinish.disabled = false
        // 1. 인증번호 표시
        let token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
        // console.log(token);
        const divTarget = document.getElementById("target")
        divTarget.innerText = token;
    
        // 2. 3분 타이머 시작
        let time = 5
        let timer
    
        timer = setInterval(function() {
        
            if(time >= 0) {
                const min = Math.floor( time / 60 )
                const sec = String(time % 60).padStart(2,"0")
                // console.log(min + ":" + sec)
                divTimer.innerText = `${min}:${sec}`
                time = time - 1
            } else {
                btnFinish.disabled = true
                isStarted = false
                clearInterval(timer)
            }
            
        }, 1000)
    } else {
        // 타이머가 작동중일때
    }


}

