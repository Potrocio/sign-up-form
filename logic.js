const firstName = document.getElementById('first-name');
const firstNameMessage = document.querySelector('.first-name-message');

const lastName = document.getElementById('last-name');
const lastNameMessage = document.querySelector('.last-name-message');

firstName.addEventListener('input',()=> {
    if(/\d/.test(firstName.value)) {
        firstNameMessage.textContent = 'Cannot contain numbers';
        firstName.style.borderColor = 'red';
    } else if(firstName.value == ''){
        firstName.style.borderColor = 'rgb(235, 95, 95)';
    } else {
        firstNameMessage.textContent = '';
        firstName.style.borderColor = 'rgb(116, 168, 116)';
    }
});

lastName.addEventListener('input',()=> {
    if(/\d/.test(lastName.value)) {
        lastNameMessage.textContent = 'Cannot contain numbers';
        lastName.style.borderColor = 'red';
    } else if(lastName.value == ''){
        lastName.style.borderColor = 'rgb(235, 95, 95)';
    } else {
        lastNameMessage.textContent = '';
        lastName.style.borderColor = 'rgb(116, 168, 116)';
    }
});

const userPassword = document.getElementById('user-password');
const confirmPassword = document.getElementById('confirm-password');
const confirmPasswordMessage = document.querySelector('.confirm-password-message');

confirmPassword.addEventListener('input', () => {
    if(confirmPassword.value == ''){
        confirmPasswordMessage.textContent = '';
        confirmPassword.style.borderColor = 'rgb(235, 95, 95)';
    } else if(confirmPassword.value !== userPassword.value) {
        confirmPasswordMessage.textContent = 'Password does not match';
        confirmPassword.style.borderColor = 'rgb(235, 95, 95)';
    } else {
        confirmPasswordMessage.textContent = '';
        confirmPassword.style.borderColor = 'rgb(116, 168, 116)';
    }
});

