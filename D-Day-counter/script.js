const messageContainer = document.querySelector('#d-day-message');
const container = document.querySelector('#d-day-container');
const savedDate = localStorage.getItem('saved-date');
console.log('onload.savedDate : ' + savedDate);
const intervalIdArr = [];

container.style.display = 'none';
messageContainer.innerHTML = '<h3>D-Day를 입력해 주세요.</h3>';

const dateFormMaker = function () {
    const inputYear = document.querySelector("#target-year-input").value;
    const inputMonth = document.querySelector("#target-month-input").value;
    const inputDate = document.querySelector("#target-date-input").value;

    // const dateFormat = inputYear + '-' + inputMonth + '-' + inputDate;
    const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;

    return dateFormat;
    // console.log(inputYear, inputMonth, inputDate);
};

const countMaker = function (data) { // 매개변수
    if(data !== savedDate) {
        localStorage.setItem('saved-date',data); //localStorage 이용해 브라우저를 닫아도 데이터를 저장할 수 있게 활용~
        console.log('countMaker.savedDate : ' + savedDate);
    }

    const nowDate = new Date();
    const targetDate = new Date(data).setHours(0, 0, 0, 0);
    const remaining = (targetDate - nowDate) / 1000; // 목표 날짜까지 남은 초

    if(remaining <= 0) {
        console.log('countMaker.remaining 0 : ' + savedDate);
        container.style.display = 'none';
        messageContainer.innerHTML = '<h3>타이머가 종료 되었습니다.</h3>';
        messageContainer.style.display = 'flex';
        setClearInterval();
        return;
    } else if(isNaN(remaining)) {
        console.log('countMaker.remaining nan : ' + savedDate);
        container.style.display = 'none';
        messageContainer.innerHTML = '<h3>유효한 시간대가 아닙니다.</h3>';
        messageContainer.style.display = 'flex';
        setClearInterval();
        return;
    } 

    const remainingObj = {
        remainingDate: Math.floor(remaining / 3600 / 24), // 남은 초 / 시간 / 일
        remainingHours: Math.floor(remaining / 3600) % 24,
        remainingMin: Math.floor(remaining / 60) % 60,
        remainingSec: Math.floor(remaining) % 60
    }

    const documentArr = ['days', 'hours', 'min', 'sec'];
    const timeKeys = Object.keys(remainingObj);
    // const docKeys = Object.keys(documentObj);

    const format = function(time) {
        if(time < 10) {
            return '0' + time;
        } else {
            return time;
        }
    }

    let i = 0;
    for(let tag of documentArr) {
        const remainingTime = format(remainingObj[timeKeys[i]]);
        document.getElementById(tag).textContent = remainingTime;
        i++;
    }

    /* 
    const documentObj = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        min: document.getElementById('min'),
        sec: document.getElementById('sec')
    }

    /* version 1
    documentObj.days.textContent = remainingObj.remainingDate;
    documentObj.hours.textContent = remainingObj.remainingHours;
    documentObj["min"].textContent = remainingObj["remainingMin"];
    documentObj["sec"].textContent = remainingObj["remainingSec"];
    */

    /* version 2
    for(let i = 0; i < timeKeys.length; i++) {
        documentObj[docKeys[i]].textContent = remainingObj[timeKeys[i]];
    }
    */

    /* version 3
    let i = 0;
    for(let key in documentObj) {
        documentObj[key].textContent = remainingObj[timeKeys[i]];
        // 1 = 1 + 1;
        // i += 1;
        i++;
    }
    */
};

const starter = function(targetDateInput) {
    /**
     * 카운트다운 시작 일 시에는 전달인자가 없으므로 입력받은 값으로 날짜 셋팅
     */
    if(!targetDateInput) {
        targetDateInput = dateFormMaker();
    }

    container.style.display = 'flex';
    messageContainer.style.display = 'none';
    setClearInterval();
    countMaker(targetDateInput); // 전달인자

    // clearInterval()
    /*
    for(let i = 0; i < 100; i++) {
        setTimeout(()=>{
            countMaker();
        }, 1000 * i);
    }
    */

    const intervalId = setInterval( ()=> {
        countMaker(targetDateInput)
    }, 1000); // 전달인자, setInterval 내에서 함수 실행시키려면 익명함수 내에서 실행시킬 함수 호출
    intervalIdArr.push(intervalId);
}

const setClearInterval = function() {
    localStorage.removeItem('saved-date');
    for(let i = 0; i < intervalIdArr.length; i++) { // setInterval 실행 횟 수 만큼 clearInterval
        clearInterval(intervalIdArr[i]);
    }
}

const resetTimer = function() {
    container.style.display = 'none';
    messageContainer.innerHTML = '<h3>D-Day를 입력해 주세요.</h3>';
    messageContainer.style.display = 'flex';
    setClearInterval();
}

/**
 * falsy
 * undefined, null, 0, '', NAN
 */
if(savedDate) {
    console.log('savedDate : ' + savedDate);
    starter(savedDate);
} else {
    container.style.display = 'none';
    messageContainer.innerHTML = '<h3>D-Day를 입력해 주세요.</h3>';
}
