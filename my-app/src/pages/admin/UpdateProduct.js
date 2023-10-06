import { useEffect, useState } from "../../libs"

const UpdateProductPage = (id) => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch("http://localhost:3000/products/" + id)
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [])

    console.log(product);
    return `
        <div>
            <form action="" id="update-form">
                <input type="text" value="${product.name}" id="prd-name"/>
                <input type="text" value="${product.image}" id="prd-image"/>
                <button>Update Product</button>
            </form>
        </div>
    `
}

export default UpdateProductPage