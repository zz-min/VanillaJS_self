const nameFormContainer = document.querySelector(".js-namingForm"),
    nameFormInput=nameFormContainer.querySelector("input"),
    greetingContainer=document.querySelector(".js-greetings");

const USER_LS="currentUser",
    SHOWING_CN= "showing";  //공개해주는 class

function paintGreeting(text){//유저가 있는 경우
    nameFormContainer.classList.remove(SHOWING_CN);//이름묻는칸 지우고
    greetingContainer.classList.add(SHOWING_CN);//환영문구칸 나타래라
    greetingContainer.innerText=`Hi ${text}  Welcome :D`;
}
function saveName(text){
    localStorage.setItem(USER_LS,text);
}
function handleSubmit(event){
    event.preventDefault();//new창생기는 것 방지
    const currentValue = nameFormInput.value;
    //전송이벤트에따라 새로들어온 input값
    paintGreeting(currentValue);
    console.log(currentValue);
    saveName(currentValue);
}
function askForName(){//유저가 없는경우
    nameFormContainer.classList.add(SHOWING_CN);//화면에 보여줘라
    nameFormContainer.addEventListener("submit",handleSubmit);//전송이벤트가 발생하면 함수실행
}

function loadName(){
    const currentUser =localStorage.getItem(USER_LS);
    if(currentUser === null){//유저가 없는경우
        askForName();
    }else{//유저가 있는 경우
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}
init();