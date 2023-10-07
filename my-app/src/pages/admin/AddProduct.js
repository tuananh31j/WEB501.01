import { router, useEffect } from "../../libs"

const AddProductPage = () => {
    useEffect(() => {
        const addForm = document.querySelector("#add-form")
        const prdName = document.querySelector("#prd-name")
        const prdImage = document.querySelector("#prd-image")

        addForm.addEventListener("submit", (e) => {
            e.preventDefault()
            let newProduct = {
                "name": prdName.value,
                "image": prdImage.value
            }
            fetch("http://localhost:3000/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newProduct)
            }).then(() => router.navigate("/admin/product"))
        })
    })
    return /*html*/`
        <div>
            <form action="" id="add-form">
                <input type="text" placeholder="Enter Product Name" id="prd-name"/>
                <input type="text" placeholder="Enter Product Image" id="prd-image"/>
                <button>Add New Product</button>
            </form>
        </div>
    `
}

export default AddProductPage