// const users = ["datlt", "thienth", "sontv"];

// const datlt = users[0]
// const thienth = users[1]
// const sontv = users[2]

// const [a, , b] = users;

// console.log(a, b);


// var product = {
//     id: 1,
//     productName: "Product 1",
//     size: 40,
//     image: {
//         imageName: "abc.jpg",
//         size: "40mb"
//     }
// }

// const id = product.id
// const username = product.name

// var { id, productName, size: productSize, image: { imageName, size: imageSize } } = product;

// console.log(id, productName, productSize, imageName, imageSize);



const post = {
    id: 1,
    postName: "Bai viet 1",
    image: "abc.jpg",
    content: "Noi dung bai viet 1"
}

const { id, postName, image, content = "Noi dung mac dinh" } = post;
console.log(id, postName, image, content);

/*
    rest parameter
    spread operator
*/ 