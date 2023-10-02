/*
    đối tượng
    xử lý bất đồng bộ
    thay thế cho callback

    promise có 3 trạng thái
        pending - chờ
        fulfilled - thành công
        rejected - thất bại

    chained 
*/

// const data = new Array([...])
// const age = new Number(20)

const products = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
];

const promise = new Promise(
  // executor
  function (resolve, reject) {
    // ...
    // resolve(products);
    reject("Co loi xay ra");
  }
);

promise
  .then((data) => {
    console.log(data);
    return 1000;
  })
  .then((data2) => {
    console.log(data2);
    return "<p>Product</p>";
  })
  .then((data3) => {
    console.log(data3);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Hoan thanh");
  });

console.log(promise);
