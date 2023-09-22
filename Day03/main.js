const addForm = document.querySelector("form")
const productName = document.querySelector("#product-name")
const productCode = document.querySelector("#product-code")
const supplier = document.querySelector("#supplier")
const productStatus = document.querySelector("#status")
const tbody = document.querySelector("tbody")

const orders = []
addForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let order = {
        name: productName.value,
        code: productCode.value,
        supplier: supplier.value,
        status: productStatus.value
    }
    orders.push(order);
    showOder(orders)
})

function showOder(arr) {
    tbody.innerHTML = arr.map(function (item) {
        return `
            <tr>
                <td>${item.name}</td>
                <td>${item.code}</td>
                <td>${item.supplier}</td>
                <td>${item.status == 0 ? "Hết hàng" : "Còn hàng"}</td>
            </tr>
        `
    }).join("")
}