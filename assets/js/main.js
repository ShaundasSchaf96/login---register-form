document.addEventListener("DOMContentLoaded", () => {
    initFormVisibility();
    initFormToggle();  
    initPasswordToggle();  
});

function initFormToggle() {
    const wrapper = document.querySelector(".wrapper");
    const loginLink = document.querySelector(".login-link");
    const registerLink = document.querySelector(".register-link");

    registerLink.addEventListener("click", (e) => {
        toggleActiveForm(wrapper, true);  
    });

    loginLink.addEventListener("click", (e) => { 
        toggleActiveForm(wrapper, false);  
    });
}

function toggleActiveForm(wrapper, isRegister) {
    if (isRegister) {
        wrapper.classList.add("active");  
    } else {
        wrapper.classList.remove("active");  
    }
}

function initPasswordToggle() {
    const togglePasswordIcons = document.querySelectorAll(".toggle-password");

    togglePasswordIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            const input = icon.nextElementSibling;
            togglePasswordVisibility(icon, input);  
        });
    });
}

function togglePasswordVisibility(icon, input) {
    if (input.type === "password") {
        input.type = "text"; 
        updateIcon(icon, 'eye-off-outline');  
    } else {
        input.type = "password";  
        updateIcon(icon, 'eye-outline');  
    }
}

function updateIcon(icon, iconName) {
    icon.querySelector('ion-icon').setAttribute('name', iconName);
}

function initFormVisibility() {
    const loginButton = document.querySelector(".btnLogin-popup");  
    const closeIcon = document.querySelector(".icon-close");  
    const wrapper = document.querySelector(".wrapper");

    loginButton.addEventListener("click", () => {
        clearInputs(); 
        wrapper.classList.add("show-form");  
        wrapper.classList.remove("active");  
        toggleActiveForm(wrapper, false);  
    });

    closeIcon.addEventListener("click", () => {
        wrapper.classList.remove("show-form");  
        clearInputs();  
    });
}

function clearInputs() {
    const inputs = document.querySelectorAll('.input-box input'); 
    inputs.forEach(input => {
        input.value = ''; 
    });
}
