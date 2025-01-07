const form = document.querySelector('form');
form.addEventListener('submit', e  =>{
    e.preventDefault()

    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const Email = document.getElementById('email');
    const password = document.getElementById('password');
    const firstNameError = document.getElementById('first-name-error');
    const lastNameError = document.getElementById('last-name-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    

    if (firstName.value === ''){
        firstNameError.style.display = "block"
        firstName.classList.add('error');
    } else{
        firstNameError.style.display= "none"
        firstName.classList.remove('error');
    }

    if (lastName.value === ''){
        lastNameError.style.display =" block"
        lastName.classList.add('error');
    } else{
        lastNameError.style.display= "none"
        lastName.classList.remove('error');
    }

    if (Email.value === ''){
        emailError.style.display ="block"
        Email.classList.add('error');
    } else{
        emailError.style.display= "none"
        Email.classList.remove('error');
    }

    if (password.value === ''){
        passwordError.style.display = "block"
        password.classList.add('error');
    } else{
        passwordError.style.display= "none"
        password.classList.remove('error');
    }
});