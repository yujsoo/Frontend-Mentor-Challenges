const userEmail = document.getElementById("user-email");
const confirmBtn = document.getElementById("confirm-btn");
const errorMessage = document.querySelector('.error-message')

const onInput = () => {
    const pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    if (pattern.test(userEmail.value)) {
        return true;
    }else if(userEmail.value == ""){
        return true;
    }else{
        return false;
    }
}

confirmBtn.addEventListener("click", () => {
    if(!onInput()) {
        userEmail.classList.add("error")
        errorMessage.classList.add('show');
    }else{
        userEmail.classList.remove("error")
        errorMessage.classList.remove('show');
    }
});

userEmail.addEventListener("input", () => {
    if(onInput()) {
        userEmail.classList.remove("error")
        errorMessage.classList.remove('show');
        //confirmBtn.disabled = false;
    }else{
        userEmail.classList.add("error")
        errorMessage.classList.add('show');
        //confirmBtn.disabled = true; 
    }
});