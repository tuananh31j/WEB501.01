import { useEffect, useState } from "../../libs"
const AdminProductPage = () => {
    /*
        useState
            set gia tri khoi tao ban dau cho 1 bien
            thay doi lai gia tri cua bien
        useEffect(callback, deps)

    */
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then((response) => response.json())
            .then((data) => setData(data))
    }, [])
    console.log(data);
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
                    
                </tbody>
            </table>
        </div>
    `
}

export default AdminProductPage