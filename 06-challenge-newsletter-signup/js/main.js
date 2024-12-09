const userEmail = document.getElementById('user-email');
const confirmBtn = document.getElementById('confirm-btn');
const errorMessage = document.querySelector('.error-message');
const successPopup = document.getElementById('success-popup');
const emailForm = document.querySelector('.news-letter');
const dismissBtn = document.querySelector('.dismiss-btn');
const emailTo = document.querySelector('.email-to');

const pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

const onInput = () => {

    if (pattern.test(userEmail.value)) {
        return true;
    }else if(userEmail.value == ""){
        return false;
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
    }else{
        userEmail.classList.add("error")
        errorMessage.classList.add('show');
    }
});

// form submit
document.querySelector('.user-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    // FormData 객체 생성
    const formData = new FormData(event.target);

    // 이메일이 유효하지 않으면 전송을 막습니다
    if (!onInput()) {
        alert('잘못된 이메일 형식입니다!');
        return;
    }

    // EmailJS ID 및 Key 추가
    formData.append('service_id', 'service_40s2nin');
    formData.append('template_id', 'template_xchu6g2');
    formData.append('user_id', 'yDFGJ2tM1c94VPdCl');
    formData.append('user_email', userEmail.value);

    try {
        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send-form", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            successPopup.classList.add('open');
            emailForm.classList.add('hide');
            emailTo.innerText = userEmail.value;
        } else {
            const error = await response.json();
            alert("에러 발생: " + JSON.stringify(error));
        }
    } catch (error) {
        alert(error.message);
    }
});

dismissBtn.addEventListener("click", () => {
    successPopup.classList.remove('open');
    emailForm.classList.remove('hide');
    userEmail.value = "";
});