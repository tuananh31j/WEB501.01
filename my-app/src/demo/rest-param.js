// const sum = () => {

//     console.log(arguments);
// }

// function sum(...params) {
//     // console.log(arguments);
//     console.log(params);
// }

// sum(10, 30, 100)

const users = ["sontv", "thienth", "datlt"]
const [sontv, ...others] = users;
console.log(sontv);