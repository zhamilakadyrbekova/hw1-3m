

const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneResalt = document.querySelector("#phone_result");

const regExp = /^\+996 [2579]\d{2} \d{3} \d{3}$/

phoneButton.onclick = () =>  {
    if (regExp.test(phoneInput.value)) {
        phoneResalt.innerHTML = 'OK';
        phoneResalt.style.color = 'green';
    }
    else {
        phoneResalt.innerHTML = 'Error';
        phoneResalt.style.color = 'red';
    }
}