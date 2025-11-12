//? Bài 1: Viết hàm trả về phần tử đầu tiên và cuối cùng của mảng
function getFirstLast(array) {
  const first = array[0];
  const second = array[array.length - 1];
  return [first, second];
}
console.log(getFirstLast([1, 2, 3, 4])); // [1, 4]

//? Bài 2: Hoán đổi vị trí phần tử thứ 2 và thứ 4 trong mảng
function swapElements(arr) {
  let temp = arr[1];
  arr[1] = arr[3];
  arr[3] = temp;
  return arr;
}

console.log(swapElements([1, 2, 3, 4, 5])); // [1, 4, 3, 2, 5]

//? Bài 1: Viết hàm delay trả về Promise
function delay(ms) {
  return new Promise(resolver => {
    setTimeout(resolver, ms);
  });
}

delay(2000).then(() => console.log('2 seconds passed'));

//? Bài tập Async/Await
//* Bài 1: Viết lại callback hell thành async/await

// Viết lại hàm này sử dụng async/await
// function processOrder(orderId, callback) {
//   getOrder(orderId, (order) => {
//     getUser(order.userId, (user) => {
//       getProducts(order.productIds, (products) => {
//         callback({ order, user, products });
//       });
//     });
//   });
// }
async function processOrder(orderId) {
  try {
    const order = await getOrder(orderId);
    const user = await getUser(order.userId);
    const products = await getProducts(order.productIds);
    return { order, user, products };
  } catch (error) {
    console.log(error);
  }
}

//? Bài 2: Xử lý lỗi với async/await

async function safeApiCall(apiFunction, ...args) {
  try {
    const result = await apiFunction(...args);
    return {
      key: true,
      data: result,
    };
  } catch (error) {
    return {
      key: false,
      error: error.message,
    };
  }
}
