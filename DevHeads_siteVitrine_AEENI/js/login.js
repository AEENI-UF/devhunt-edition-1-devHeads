function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    
}); 
/* function

var input = document.getElementById("myInput");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter")
    {
        event.preventDefault();
        document.getElementById("boutton").click();
    }
}); */

function check() {
    event.preventDefault();
    var form = document.forms["login"];
    if (form.userid.value == "pf900" && form.pswrd.value == "password") {
        window.open('home.html', '_self')
    } else if (form.userid.value == "pf350a" && form.pswed.value == "password"){
        window.open('home.html', '_self')
    } else {
        window.open('home.html')
    }
}