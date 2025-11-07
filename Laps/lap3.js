//? Bai 1:
// Function 1
//* function multiply(a, b) {
// *  return a * b;
//* }
const multiply = (a, b) => a * b;
console.log(multiply(2, 3));

// Function 2
// *function isPositive(number) {
// *  return number >= 0;
//* }
const isPositive = (number) => number <= 0;
console.log(isPositive(-1));

// Function 3
//* function getRandomNumber() {
//*   return Math.random();
//* }
const getRandomNumber = () => Math.random();
console.log(getRandomNumber());

// Function 4
//* document.addEventListener("click", function () {
//*   console.log("Clicked!");
//* });
// document.addEventListener("click", () => console.log("Clicked!"));

//? Bai 2:
// Viết lại hàm sau sử dụng default parameters:
//* function createUser(name, age, isAdmin) {
//*   if (name === undefined) name = "Anonymous";
//*   if (age === undefined) age = 18;
//*   if (isAdmin === undefined) isAdmin = false;

//*   return {
//*     name: name,
//*     age: age,
//*     isAdmin: isAdmin,
//*   };
//* }
const createUser = (name = "VanAnh", age = 19, isAdmin = false) => {
  return {
    name,
    age,
    isAdmin,
  };
};
console.log(createUser());

//? Bai 3:
// Viết các hàm sau:
//* Hàm mergeArrays nhận nhiều mảng và trả về mảng hợp nhất
const mergeArrays = (...arrays) => {
  return [].concat(...arrays);
};
console.log(mergeArrays([1, 2, 1, 0], [7, 7]));

//* Hàm sumAll tính tổng tất cả tham số truyền vào
const sumAll = (...number) => number.reduce((total, num) => total + num, 0);
console.log(sumAll(1, 2, 1, 2, 6));

//* Hàm createProduct nhận thông tin sản phẩm và trả về object sản phẩm với giá trị mặc định
const createProduct = (name = "San pham A", price = 18000, status = true) => {
  return {
    name,
    price,
    status,
  };
};
console.log(createProduct());

//? Bai 4:
// Tạo hàm shoppingCart với:
//* Tham số đầu tiên là tên khách hàng
//* Các tham số tiếp theo là các sản phẩm
//* Sử dụng rest parameters để thu thập sản phẩm
//* Trả về object chứa thông tin đơn hàng
const shoppingCart = (name, ...products) => {
  return {
    name,
    products,
    totalProducts: products.length,
  };
};
console.log(shoppingCart("VanAnh", "Ao thu dong", "Chan vay dai"));
