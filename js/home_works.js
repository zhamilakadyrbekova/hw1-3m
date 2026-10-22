const emailInput = document.querySelector("#gmail_input");
const emailBtn = document.querySelector("#gmail_button");
const emailResalt = document.querySelector("#gmail_result");

const regExp = /^[a-z0-9.]{6,30}@gmail\.com$/

emailBtn.onclick = () => {
    if (regExp.test(emailInput.value)) {
        emailResalt.innerHTML = 'OK';
        emailResalt.style.color = 'green';
    } else {
        emailResalt.innerHTML = 'Error';
        emailResalt.style.color = 'red';
    }
}





const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");

let positionX = 0;
let positionY = 0;

const maxWidth = parentBlock.clientWidth - childBlock.offsetWidth;
const maxHeight = parentBlock.clientHeight - childBlock.offsetHeight;

const move = () => {


    if (positionX < maxWidth && positionY === 0) {
        positionX++;
    }
    else if (positionX >= maxWidth && positionY < maxHeight) {
        positionY++;
    }
    else if (positionY === maxHeight && positionX > 0) {
        positionX--;
    }
    else if (positionX === 0 && positionY > 0){
        positionY--;
    }

    childBlock.style.left = `${positionX}px`
    childBlock.style.top = `${positionY}px`
    requestAnimationFrame(move);
}
move();





const second = document.querySelector('#seconds');
const buttonStart = document.querySelector('#start');
const buttonStop = document.querySelector('#stop');
const buttonReset = document.querySelector('#reset');


let count = 0;
let id = null;

function startTimer() {
    if (id !== null)  return;
    buttonStart.disabled = true;

    id = setInterval(function ()  {
        count++;
        second.textContent = count;
    }, 1000);
}




