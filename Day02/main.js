let loginForm = document.querySelector("#login-form")
let username = document.querySelector("#username")
let password = document.querySelector("#password")
let usernameError = document.querySelector("#username-error")
let passwordError = document.querySelector("#password-error")

// loginForm.onsubmit = function(){}

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let errors = {}
    function isEmpty(obj) {
        for (let item in obj) {
            if (obj.hasOwnProperty(item)) {
                return false
            }
        }
        return true;
    }

    if (username.value.trim() == "") {
        errors.username = "Ban khong duoc de trong Username";
    }
    if (password.value.trim() == "") {
        errors.password = "Ban khong duoc de trong Password";
    }
    if (!isEmpty(errors)) {
        usernameError.innerHTML = errors.username ? errors.username : "";
        passwordError.innerHTML = errors.password ? errors.password : "";
    }
    console.log(errors);
})