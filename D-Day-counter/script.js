const messageContainer = document.querySelector('#d-day-message');
const container = document.querySelector('#d-day-container');
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

const countMaker = function () {
    const targetDateInput = dateFormMaker();
    // console.log(targetDateInput);
    const nowDate = new Date();
    const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0);
    const remaining = (targetDate - nowDate) / 1000; // 목표 날짜까지 남은 초

    if(remaining <= 0) {
        container.style.display = 'none';
        messageContainer.innerHTML = '<h3>타이머가 종료 되었습니다.</h3>';
        messageContainer.style.display = 'flex';
        setClearInterval();
        return;
    } else if(isNaN(remaining)) {
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

    let i = 0;
    for(let tag of documentArr) {
        document.getElementById(tag).textContent = remainingObj[timeKeys[i]]
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

const starter = function() {
    container.style.display = 'flex';
    messageContainer.style.display = 'none';
    countMaker();

    // clearInterval()
    /*
    for(let i = 0; i < 100; i++) {
        setTimeout(()=>{
            countMaker();
        }, 1000 * i);
    }
    */

    const intervalId = setInterval(countMaker, 1000);
    intervalIdArr.push(intervalId);
}

const setClearInterval = function() {
    container.style.display = 'none';
    messageContainer.innerHTML = '<h3>D-Day를 입력해 주세요.</h3>';
    messageContainer.style.display = 'flex';
    for(let i = 0; i < intervalIdArr.length; i++) { // setInterval 실행 횟 수 만큼 clearInterval
        clearInterval(intervalIdArr[i]);
    }
}