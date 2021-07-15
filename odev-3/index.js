const usernameDOM = document.getElementById("username");
const passwordDOM = document.getElementById("password");
const emailDOM = document.getElementById("email");
const isAdultDOM = document.getElementById("isadult");
const submitButtonDOM = document.getElementById("submit");

const usernameErrorDOM = document.getElementById("username-error");
const passwordErrorDOM = document.getElementById("password-error");
const emailErrorDOM = document.getElementById("email-error");
const isAdultErrorDOM = document.getElementById("isadult-error");

usernameDOM.addEventListener('blur', (e) => validation(e));
passwordDOM.addEventListener('blur', (e) => validation(e));
emailDOM.addEventListener('blur', (e) => validation(e));
isAdultDOM.addEventListener('blur', (e) => validation(e));

submitButtonDOM.addEventListener('click', () => {
    if(!usernameDOM.value || !passwordDOM.value || !emailDOM.value) {
        alert("Formdaki boş alan bırakmayarak tekrar deneyiniz.")
    } else if(usernameErrorDOM.innerText || passwordErrorDOM.innerText || emailErrorDOM.innerText) {
        alert("Formdaki hataları gidererek tekrar deneyiniz.")
    } else if(!isAdultDOM.checked) {
        alert("18 yaş altı kişiler form gönderemez.")
    } else {
        alert("Form başarıyla gönderildi.")
    }
})

function validation(e) {
    switch (e.target.id) {
        case "username":
            !usernameDOM.value
            ? usernameErrorDOM.innerText = "Kullanıcı adı boş olamaz."
            : usernameErrorDOM.innerText = ""; 
            break;
        
        case "password":
            passwordDOM.value.length < 8
            ? passwordErrorDOM.innerText = "Şifre en az 8 karakter olmalı."
            : passwordErrorDOM.innerText = "";
            break;

        case "email":
            !emailDOM.value
            ? emailErrorDOM.innerText = "Mail adresi girilmiş olmalı."
            : !emailDOM.value.includes('@')
            ? emailErrorDOM.innerText = "Geçerli mail adresi girilmiş olmalı."
            : emailErrorDOM.innerText = ""
            break;

        case "isadult":
            !isAdultDOM.checked
            ? isAdultErrorDOM.innerText = "18 yaşından küçükler form gönderemez."
            : isAdultErrorDOM.innerText = "";
            break;
    }
}