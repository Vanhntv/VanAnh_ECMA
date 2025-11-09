//? Bai 1: Sửa lỗi scope
// Sửa đoạn code sau để hoạt động đúng
//* for (var i = 0; i < 3; i++) {
//*   setTimeout(function () {
//*     console.log(i); // Hiện tại in ra 3,3,3
//*   }, 100);
//* }
// Yêu cầu: Sửa để in ra 0,1,2
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}

//? Bai 2: Sử dụng const đúng cách
// Tạo một object student với const
// Thêm thuộc tính điểm và in ra
//* const student = {
//* name: "ThuyTien",
//* age: 20,
//* };
// Thực hiện các thao tác sau:
// 1. Thêm thuộc tính grade với giá trị "A"
// 2. Thay đổi tuổi thành 21
// 3. In ra toàn bộ thông tin student
const student = {
  name: "ThuyTien",
  age: 20,
};
student.grade = "A";
student.age = 21;
console.log(student);

//? Bai 3: Tạo email template
// Tạo template cho email thông báo
//* const user = {
//*   firstName: "Nguyen",
//*   lastName: "Van A",
//*   product: "Laptop Dell XPS",
//*   price: 25000000,
//*   orderDate: "2024-01-15",
//* };
//* Tạo template string cho email
const user = {
  firstName: "Nguyen",
  lastName: "Van A",
  product: "Laptop Dell XPS",
  price: 25000000,
  orderDate: "2024-01-15",
};
const emailTemplate = `
Xin chào ${user.firstName} ${user.lastName},
Bạn mua sản phẩm ${user.product}.
Số tiền phải trả: ${user.price.toLocaleString()} VND.
Ngày đặt hàng: ${user.orderDate}.
`;
console.log(emailTemplate);

//? Bai 4:  Tạo HTML template
// Tạo HTML template cho card sản phẩm
//* const product = {
//*   name: "iPhone 15",
//*   price: 20000000,
//*   discount: 10,
//*   inStock: true,
//* };
// Tính giá sau giảm
// Tạo template HTML
const product = {
  name: "iPhone 15",
  price: 20000000,
  discount: 10,
  inStock: true,
};

const finalPrice = product.price * (1 - product.discount / 100);

const productCard = `
  <div class="card">
    <h2>${product.name}</h2>
    <p>Giá: ${product.price.toLocaleString()} VND</p>
    <p>Giảm giá: ${product.discount}%</p>
    <p><b>Giá sau giảm: ${finalPrice.toLocaleString()} VND</b></p>
    <p>Trạng thái: ${product.inStock ? "Còn hàng" : "Hết hàng"}</p>
  </div>
`; // Viết template ở đây
console.log(productCard);

//? Bai 5: Sử dụng property và method shorthand
// Viết lại object sau sử dụng ES6 enhanced object literals
// const width = 100;
// const height = 200;
// const color = "red";
// const rectangle = {
//   width: width,
//   height: height,
//   color: color,
//   calculateArea: function () {
//     return this.width * this.height;
//   },
//   describe: function () {
//     return `Rectangle ${this.width}x${this.height}, color: ${this.color}`;
//   },
// };
const width = 100;
const height = 200;
const color = "red";

const rectangle = {
  width,
  height,
  color,
  calculateArea() {
    return this.width * this.height;
  },
  describe() {
    return `Rectangle ${this.width}x${this.height}, color: ${this.color}`;
  },
};
console.log(rectangle.describe());
console.log("Diện tích:", rectangle.calculateArea());

//? Bai 6: Sử dụng computed properties
// Tạo object configuration với computed property names
const env = "production";
const version = "v2";
const features = ["auth", "payment", "notification"];
// Tạo object config với:
// - key: `api_${env}_${version}`
// - key cho từng feature: `feature_${featureName}`
// - method: `get${env}Config()`
const config = {};
config[`api_${env}_${version}`] = `https://api.example.com/${env}/${version}`;

for (let i = 0; i < features.length; i++) {
  const featureName = features[i];
  config[`feature_${featureName}`] = true;
}

const methodName = `get${env.charAt(0).toUpperCase() + env.slice(1)}Config`;
config[methodName] = function () {
  return this;
};

console.log(config);
console.log(config.getProductionConfig());
