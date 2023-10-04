import { useEffect, useState } from "../../libs"
const AdminProductPage = () => {
    /*
        useState
            set gia tri khoi tao ban dau cho 1 bien
            thay doi lai gia tri cua bien
        useEffect(callback, deps)

    */
    const [products, setProduct] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then((response) => response.json())
            .then((data) => setProduct(data))
    }, [products])

    useEffect(() => {
        const btnDeletes = document.querySelectorAll(".btn-delete")
        for (let btn of btnDeletes) {
            btn.addEventListener("click", () => {
                let id = btn.dataset.id
                fetch(`http://localhost:3000/products/${id}`, {
                    method: "DELETE"
                })
            })
        }
    })
    return /*html*/`
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Product Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    ${products.map((product, index) => {
        return /*html*/`
                            <tr>
                                <td>${index + 1}</td>
                                <td>${product.name}</td>
                                <td>
                                    <img src="${product.image}" alt="" />
                                </td>
                                <td>
                                    <button data-id="${product.id}" class="btn-delete">Delete</button>
                                </td>
                            </tr>
                        `
    }).join("")}
                </tbody>
            </table>
        </div>
    `
}

export default AdminProductPage