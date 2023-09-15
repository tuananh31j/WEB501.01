let loginForm = document.querySelector("#login-form") // tìm phần tử có id là login-form
let username = document.querySelector("#username") // tìm phần tử có id là username
let password = document.querySelector("#password") // tìm phần tử có id là password
let usernameError = document.querySelector("#username-error") // tìm phần tử có id là username-error
let passwordError = document.querySelector("#password-error") // tìm phần tử có id là password-error

// loginForm.onsubmit = function(){}

loginForm.addEventListener("submit", function (e) { // bắt sự kiện submit form
    e.preventDefault(); // chặn sự kiện reload của trình duyệt
    let errors = {} // tạo một object rỗng để lưu trữ lỗi
    function isEmpty(obj) { // hàm kiểm tra object có rỗng hay không
        for (let item in obj) { // duyệt qua các thuộc tính của object
            if (obj.hasOwnProperty(item)) { // kiểm tra thuộc tính có phải của object hay không
                return false // nếu có trả về giá trị của hàm là false
            }
        }
        return true; // nếu không có trả về giá trị của hàm là true
    }

    if (username.value.trim() == "") { // kiểm tra username có rỗng hay không
        errors.username = "Ban khong duoc de trong Username"; // nếu rỗng thì gán lỗi vào object errors với key là username
    }
    if (password.value.trim() == "") { // kiểm tra password có rỗng hay không
        errors.password = "Ban khong duoc de trong Password"; // nếu rỗng thì gán lỗi vào object errors với key là password
    }
    if (!isEmpty(errors)) { // kiểm tra object errors có rỗng hay không
        usernameError.innerHTML = errors.username ? errors.username : ""; // nếu không rỗng thì gán lỗi vào phần tử có id là username-error
        passwordError.innerHTML = errors.password ? errors.password : ""; // nếu không rỗng thì gán lỗi vào phần tử có id là password-error
    }
    console.log(errors);
})