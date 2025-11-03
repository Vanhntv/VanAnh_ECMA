// Viết hàm tính chỉ số BMI (Body Mass Index) với công thức:
//  BMI = weight / (height * height)
// function calculateBMI(weight, height) {
// TODO: Sử dụng const cho các hằng số
// TODO: Sử dụng template literals để tạo thông báo
// TODO: Phân loại BMI theo:
// - Dưới 18.5: Thiếu cân
// - 18.5 - 24.9: Bình thường
// - 25 - 29.9: Thừa cân
// - Trên 30: Béo phì
// }

// Ví dụ sử dụng

function calculateBMI(weight, height) {
  const BMI = weight / (height * height);

  if (BMI < 18.5) {
    return `Thieu can: BMI của bạn là ${BMI} `;
  }
  if (BMI < 25) {
    return `Bình thường: BMI của bạn là ${BMI} `;
  }
  if (BMI > 30) {
    return `Thừa cân: BMI của bạn là ${BMI} `;
  } else {
    return `Beo phi: BMI của bạn là ${BMI} `;
  }
}

console.log(calculateBMI(38, 1.45)); // "BMI: 22.86 - Phân loại: Bình thường"

// Bài tập 2: Enhanced Object Literals

// Tạo đối tượng quản lý sách sử dụng enhanced object literals.
// function createBook(title, author, year, price) {
// TODO: Sử dụng shorthand properties
// TODO: Thêm method getBookInfo() trả về thông tin sách
// TODO: Thêm method tính giá sau giảm giá (discount %)
// TODO: Sử dụng computed property names
// }

function createBook(title, author, year, price) {
  return {
    title,
    author,
    year,
    price,
    getBookInfo() {
      return `Tên sách: ${this.title}, Tác giả: ${this.author}, Năm: ${this.year}, Giá: ${this.price}đ`;
    },
    calculateDiscount(discount) {
      const newPrice = this.price - (this.price * discount) / 100;
      return `Giảm giá còn ${newPrice}đ`;
    },
  };
}

const book = createBook("JavaScript cơ bản", "Ngô Thị Vân Anh", 2023, 200000);
console.log(book.getBookInfo());
console.log(book.calculateDiscount(10));
