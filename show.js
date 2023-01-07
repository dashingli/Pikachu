import string from './displayText.js';
const upper  = document.querySelector('.upperPart');
const pikachuStyle = document.querySelector(".Pikachu-style");
const normalButton = document.querySelector('.normalSpeed');
const stopButton = document.querySelector('.stop');
const fastSpeed = document.querySelector('.fastSpeed');
let n = 1;
function setTime(){
        if(n <= string.length){
            let content  = string.substring(0,n);
            upper.innerText = content;
            pikachuStyle.innerHTML = content;
            upper.scrollTop = upper.scrollHeight;
            n += 1
        }else{
            for(let i = 0;i<=intervalId;i++){
                clearInterval(i);
            }
        }
    }
let intervalId = setInterval(setTime,30);
normalButton.onclick = () => {
    intervalId = setInterval(setTime,30);
}
stopButton.onclick = () => {
    for(let i = 0;i<=intervalId;i++){
        clearInterval(i);
    }
}
fastSpeed.onclick = () => {
    intervalId = setInterval(setTime,5);
}