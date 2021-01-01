const clockContainer = document.querySelector(".js-clock"),
    clockTitle=clockContainer.querySelector("h1");

function getTime(){
    const date=new Date();//Date(현재시간부르는 함수)의 생성자생성
    const hours=date.getHours();
    const minutes=date.getMinutes();
    const seconds=date.getSeconds();
    clockTitle.innerText=`${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes }:${
        seconds < 10 ? `0${seconds}` : seconds }`;
}

function init(){
    getTime();
    setInterval(getTime,1000);
}

init();