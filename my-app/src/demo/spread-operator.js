/*
    spread operator ...
    rest parameters ...
*/

const user1 = ["sontv", "thienth"]
const user2 = ["datlt", "tuannda"]

// const users = user1.concat(user2)
const users = [...user1, ...user2]
console.log(users);