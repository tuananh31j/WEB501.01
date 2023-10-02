/*
    - một hàm
    - được truyền vào làm đối số của một hàm khác
*/
const products = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
];

function showData(callback, myData) {
  let newData;
  setTimeout(() => {
    newData = callback(myData);
  }, 3000);
  return newData;
}

function getData(data) {
  return data;
}

// getData(products);
console.log(showData(getData, products));

A(function () {
  // ...
  B(function () {
    // ...
    C(function () {
      // ...
    });
  });
});
/*
    xây dựng chức năng order trà sữa
        - chọn trà sữa
        - chọn toping
        - chọn size
        - chọn coupon
        - chọn địa chỉ
        ...
*/

selectMilkTea(() => {
  selectToping(() => {
    selectSize(() => {
      selectCoupon(() => {
        // ...
      });
    });
  });
});
