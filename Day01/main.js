/*
    - khai báo biến
        var
        let
        const 
    - vòng lặp
        for
        while
        do ... while
        foreach

        for of
        for in
    - DOM
    - Sự kiện
    - template string
    - object
    - function
*/

const students = [
    { id: 1, name: "Sinh vien 1" },
    { id: 2, name: "Sinh vien 2" },
    { id: 3, name: "Sinh vien 3" }
]
// console.log(students);

// for (let i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }
// console.log("------------------");
// for (let item of students) {
//     console.log(item);
// }

// const person = {
//     id: 1,
//     name: "sontv",
//     address: {
//         no: 69,
//         street: "Tran Duy Hung"
//     }
// }
// console.log(person);
// for (let key in person) {
//     console.log(person[key]);
// }
/*
    Bài 1:
    ---------------------------------
    Nhập vào họ tên nhân viên (prompt())
    Nhập vào mức lương của nhân viên
    Nếu mức lương nhập vào nhỏ hơn 0 thì thông báo "Lương không được nhỏ hơn 0"

    Ngược lại nếu mức lương hợp lệ thì thực hiện công việc sau:
    Hiển thị họ tên nhân viên
    Tính và hiển thị tổng lương cả năm của nhân viên đó (đơn vị: triệu đồng)
    Nếu tổng lương dưới 100tr thì hiển thị "Bạn nghèo vậy!!!"
    Nếu tổng lương từ 100 - 200tr thì hiển  thị "Cũng đủ sống rồi đấy"
    Nếu tổng lương từ 200 - 400tr thì hiển thị "Ghê thế ông ei"
    Nếu tổng lương từ 400tr trở lên thì hiển thị "Ông giàu vãi"


    Bài 2:
    ---------------------------------
    Xây dựng chương trình phân loại chuối theo độ dài
    - nếu chuối lớn hơn 10 cm và nhỏ hơn 15 cm thì hiển thị " chuối tạm được "
    - nếu chuối từ 0 - 10 cm thì hiển thị " chuối nhỏ quá, không mua "
    - nếu chuối nhỏ hơn 0 thì hiển thị " nhập sai rồi "
    - nếu chuối lớn hơn 15 cm thì hiển thị " chuối khủng, mua ngay "


*/

// const username = prompt("Nhap vao ho ten:");
// const salary = prompt("Nhap vao muc luong:");
// // console.log(username, salary);
// let totalSalary = 0;
// if (salary <= 0) {
//     console.log("Thich nhap bo lao khong?");
// }
// for (let i = 1; i <= 12; i++) {
//     totalSalary += Number(salary);
// }
// console.log(totalSalary);
// if (totalSalary < 100) {
//     console.log("Bạn nghèo vậy!!!");
// } else if (totalSalary >= 100 && totalSalary <= 200) {
//     console.log("abcd");
// }


const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 }
]

// let productDiv = document.getElementById("products")
let productDiv = document.querySelector("#products")
// for (let item of products) {
//     // productDiv.innerHTML += `<div>` + item.id + `</div>`;
//     productDiv.innerHTML += `
//         <div>
//             <h3>${item.name}</h3>
//             <p>${item.price}</p>
//         </div>

//         `;
// }


const result = products.map(function (item) {
    return `
            <div>
                <h3>${item.name}</h3>
                <p>${item.price}</p>
            </div>
        `
}).join("")
// console.log(result);
productDiv.innerHTML = result;