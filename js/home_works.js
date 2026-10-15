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


const move = document.querySelector(".child_block");

let position = 0;

function moveAnimation() {
    position = position + 2;
    move.style.left = position + 'px';

    if (position < 450) {
        setTimeout(moveAnimation, 10);
    } else {
        console.log("Stop")
    }
}

moveAnimation();