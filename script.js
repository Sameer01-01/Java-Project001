const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Toggle between register and login forms
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

const signInForm = document.querySelector('.form-container.sign-in form');
signInForm.addEventListener('submit', (event) => {
    event.preventDefault(); 


    window.location.href = "index.html";
});
