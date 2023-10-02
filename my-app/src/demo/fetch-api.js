/*
    cấu trúc client - server
    api hoạt động như nào
    json data là gì
    fake api với json server
    sử dụng fetch api
*/

const getData = () => {
    fetch("http://localhost:3000/posts")
        .then((response) => response.json())
        .then((data) => console.log(data))
}
getData()

const addData = (data) => {
    fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
}

// addData({
//     "title": "bai viet moi",
//     "author": "noname"
// })
const updateData = (data) => {
    fetch("http://localhost:3000/posts/1", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
}
// updateData({
//     "title": "json-server update",
//     "author": "typicode update"
// })
const removeData = (id) => {
    fetch(`http://localhost:3000/posts/${id}`, {
        method: "DELETE"
    })
}
removeData(2)
