const yourName = document.getElementById('input-name');
const nameWarning = document.querySelector('.name-input-warning');

const email = document.getElementById('input-email');
const emailWarning = document.querySelector('.email-input-warning');
const emailRegex = /^[a-z0-9._-]+@[a-z.-]+\.[a-z]{2,4}$/;

const password = document.getElementById('input-password');
const passwordWarning = document.querySelector('.password-input-warning');

const submit = document.getElementById('input-submit');
const welcomePage = document.querySelector('.welcome-page');
const divider = document.querySelector('.divider');

const noneVisibleIcon = document.querySelector('.none-visible-icon');
const visibileIcon = document.querySelector('.visibile-icon');


//name validation
const nameValidation = () => {
    let text = yourName.value.trim();
    
    if (text.length > 15 || text.length === 0) {
        nameWarning.style.visibility = 'visible';
        yourName.style.border = '1px solid #ff453b';
    }

    else if (text.length < 15)  {
        
        for (let i = 0; i < text.length; i++){
            
            let char = text.charCodeAt(i);
    
            if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122)) {
                nameWarning.style.visibility = 'hidden';
                yourName.style.border = '1px solid #8699DA';
            }
            else {
                nameWarning.style.visibility = 'visible';
                yourName.style.border = '1px solid #ff453b';
            }
        }
    }
}

yourName.addEventListener('change', () => {
    return nameValidation();
});

//email validation

const emailValidation = () => {
    const emailText = email.value; 

    if (emailRegex.test(emailText)) {
        emailWarning.style.visibility = 'hidden';
        email.style.border = '1px solid #8699DA';
    }

    else {
        emailWarning.style.visibility = 'visible';
        email.style.border = '1px solid #ff453b';
    }
}

email.addEventListener('change', () => {
    return emailValidation();
})

//password validation

const passwordValidation = () => {

    let passowrdText = password.value;
    const uppercaseRegex = /[A-Z]+/g;
    const lowercaseRegex = /[a-z]+/g;
    const numbersRegex = /[0-9]+/g;

    if (passowrdText.length < 8) {
        passwordWarning.style.visibility = 'visible';
        password.style.border = '1px solid #ff453b';
    }
    else if (passowrdText.length >= 8 &&
        uppercaseRegex.test(passowrdText) &&
        lowercaseRegex.test(passowrdText) &&
        numbersRegex.test(passowrdText)) {
      
        passwordWarning.style.visibility = 'hidden';
        password.style.border = '1px solid #8699DA';
    }
    else {
        passwordWarning.style.visibility = 'visible';
        password.style.border = '1px solid #ff453b';
    }

}

password.addEventListener('change', () => {

    return passwordValidation();

});

visibileIcon.addEventListener('click', () => {
    noneVisibleIcon.classList.toggle('visibility-off-icon')
    if (password.type === 'password') {
        password.type = 'text';
    }
    else {
        password.type = 'password';
    }
})

submit.addEventListener('click' , () => {

    if ((nameWarning.style.visibility === 'hidden') &&
        (emailWarning.style.visibility === 'hidden') &&
        (passwordWarning.style.visibility === 'hidden')) {
        divider.style.display = 'none';
        welcomePage.style.display = 'flex';
    } 
    else {
        return nameValidation(), emailValidation(), passwordValidation()
    }
    
})



