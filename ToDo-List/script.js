const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

const savedWeatherData = JSON.parse(localStorage.getItem('saved-weather'));
const savedTodoList = JSON.parse(localStorage.getItem('saved-items'));
//console.log(savedTodoList);

// 함수 표현식 : hoisting X
const createTodo = function(storageData) {
// function createTodo() {} 함수 선언식 : hoisting O

    let todoContents = todoInput.value;

    if(storageData) {
        todoContents = storageData.contents;
    }


    const newLi = document.createElement('li');
    const newSpan = document.createElement('span');
    const newBtn = document.createElement('button');
    
    newBtn.addEventListener('click', () => {
        newLi.classList.toggle('complete');
        saveItemsFn();
    });

    newLi.addEventListener('dblclick', () => {
        newLi.remove();
        saveItemsFn();
    });

    if(storageData?.complete) {  // 옵셔널체이닝 : undefined, null check
        newLi.classList.add('complete');
    }

    newSpan.textContent = todoContents;
    newLi.appendChild(newBtn);
    newLi.appendChild(newSpan);
    todoList.appendChild(newLi);
    todoInput.value = '';
    saveItemsFn();
}

const keyCodeCheck = function() {
    if(window.event.keyCode === 13 && todoInput.value.trim() !== '') {
        createTodo();
    }
}

const deleteAll = function() {
    const liList = document.querySelectorAll('li');
    for(let i = 0; i < liList.length; i++) {
        liList[i].remove();
    }
    saveItemsFn();
}

const saveItemsFn = function() {
    const saveItems = [];
    for(let i = 0; i < todoList.children.length; i++) {
        const todoObj = { 
            contents: todoList.children[i].querySelector('span').textContent,
            complete: todoList.children[i].classList.contains('complete'),
        }
        saveItems.push(todoObj);
    }

    saveItems.length === 0 
        ? localStorage.removeItem('saved-items') 
        : localStorage.setItem('saved-items',JSON.stringify(saveItems));
}

if(savedTodoList) {
    for(let i = 0; i < savedTodoList.length; i++) {
        createTodo(savedTodoList[i]);
    }
}

const weatherDataActive = function({ location, weather }) {
    const weatherMainList = [
        'Clear',
        'Clouds',
        'Drizzle',
        'Rain',
        'Snow',
        'Thunderstorm'
    ];
    weather = weatherMainList.includes(weather) ? weather : 'Fog';
    const locationNameTag = document.querySelector('#location-name-tag');

    locationNameTag.textContent = location;
    document.body.style.backgroundImage = `url('./images/${weather}.jpg')`

    if(
        !savedWeatherData ||
        savedWeatherData?.location !== location || // 옵셔널체이닝 : undefined, null check
        savedWeatherData?.weather !== weather
    ) {
        localStorage.setItem('saved-weather',JSON.stringify( {location, weather} ))
    }
}

const weatherSearch = function({latitude, longitude}) {
    const openWeatherRes = fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f90d35bfe4e34c531aa7cb7a3656efb8`
    )
    .then((res) => {
        // JSON.parse() 응답헤더가 존재하면 사용할 수 없음! -> .json() 사용
        return res.json();
    })
    .then((json) => {
        const weatherData = {
            location: json.name,
            weather: json.weather[0].main
        }
        weatherDataActive(weatherData);
    })
    .catch((err) => {
        console.error(err);
    })
    
}

const accessToGeo = function({ coords }) {
    const { latitude, longitude } = coords
    /* 구조분해할당으로 변경
    const positionObj = {
        latitude: coords.latitude,
        longitude: coords.longitude
    }
    */
   // shorthand property
    const positionObj = {
        latitude,
        longitude
    }

    weatherSearch(positionObj)
}

const askForLocation = function() {
    
    /**
     * 2023.05.17 [ issue ]
     * live server로 실행시 보안정책상 api호출이 안됨.
     * localhost는 예외이므로 개발시엔 localhost로 대체  
     * live server는 보안정책 해제 못하나?? live server 도메인을 localhost로..?
     **/  
    navigator.geolocation.getCurrentPosition(accessToGeo, (err) => {
        console.log(err);
    });
    
}
askForLocation();
if(savedWeatherData) {
    weatherDataActive(savedWeatherData);
}

