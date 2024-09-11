// Задача M1 - 1:   Замовлення дроїдів
// Оголоси функцію makeTransaction (quantity, pricePerDroid), яка очікує два параметри:
// • quantity— перший параметр, число, що містить кількість замовлених дроїдів
// • pricePerDroid — другий параметр, число, що містить вартість одного дроїда
// Доповни код функції так, щоб вона повертала рядок з повідомленням про покупку ремонтних
// дроїдів: "You ordered <quantity> droids worth <totalPrice> credits!", де:
// • <quantity> — це кількість замовлених дроїдів
// • <totalPrice> — це загальна вартість замовлення, тобто вартість усіх замовлених дроїдів

// function makeTransaction(quantity, pricePerDroid) {
//     //const totalPrice = quantity * pricePerDroid;
//     // return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
//     return `You ordered ${quantity} droids worth ${quantity * pricePerDroid} credits!`;

// }
// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

// const makeTransaction = (quantity, pricePerDroid) =>
//   `You ordered ${quantity} droids worth ${quantity * pricePerDroid} credits!`;
// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

// Задача M2 - 1: Замовлення дроїдів
// Оголоси функцію makeTransaction(quantity, pricePerDroid, customerCredits), яка складає та
// повертає повідомлення про купівлю ремонтних дроїдів.
// - quantity — кількість замовлених дроїдів
// - pricePerDroid — ціна одного дроїда
// - customerCredits — сума коштів на рахунку клієнта
// Доповни функцію таким чином:
// Оголоси змінну для зберігання загальної суми замовлення (загальна вартість усіх замовлених
// дроїдів) і задай їй вираз розрахунку цієї суми. Додай перевірку, чи зможе клієнт оплатити
// замовлення: якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, функція має
// повертати рядок "Insufficient funds!" в іншому випадку функція має повертати рядок "You
// ordered < quantity > droids worth < totalPrice > credits!", де < quantity > це кількість
// замовлених дроїдів, а < totalPrice > це їх загальна вартість.

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//     const totalPrice = quantity * pricePerDroid;
//     if (customerCredits < totalPrice) {
//         return "Insufficient funds!";
//     } else {
//         return `"You ordered ${quantity} droids worth ${totalPrice} credits!"`;
//     }
// //   if (totalPrice > customerCredits) {
// //     return "Insufficient funds!";
// //   } else {
// //     return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// //   }
// }
// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

// Задача M3 - 1: Генератор slug
// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title
// і повертає slug, створений із цього рядка.
// Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
// Усі символи slug повинні бути в нижньому регістрі.
// Усі слова slug повинні бути розділені тире.

// function slugify(title) {
//     const slug = title.toLowerCase().split(' ').join('-');
//     return `"${slug}"`;
// }
// console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

// const slugify = title => {
//   const slug = title.toLowerCase().split(' ').join('-');
//   return `"${slug}"`;
// };
// console.log(slugify('Arrays for begginers')); // "arrays-for-begginers"
// console.log(slugify('English for developer')); // "english-for-developer"
// console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
// console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"

// Задача M4 - 1. Пакування товарів
/*Напиши функцію isEnoughCapacity(products, containerSize), яка обчислює, чи помістяться всі товари в 
контейнер при пакуванні.

Функція оголошує два параметри:

products — об'єкт, у якому ключі містять назви товарів, а їхні значення — кількість цих товарів. 
Наприклад, { apples: 2, grapes: 4 }.
containerSize — число, максимальна кількість одиниць товарів, яку в себе може вмістити контейнер.

Функція має повернути результат перевірки, чи помістяться всі товари в контейнер. Тобто порахувати 
загальну кількість товарів в об’єкті products і повернути true, якщо вона менше або дорівнює 
containerSize, і false, якщо ні.

Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. 
У консоль будуть виведені результати її викликів.  */

// function isEnoughCapacity(products, containerSize) {
//   // let totalQuantities = 0;
//   // for (const product in products) {
//   //   totalQuantities += products[product];
//   // }
//   // if (totalQuantities <= containerSize) {
//   //   return true;
//   // }
//   // return false;
// }
// console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
// console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
// console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
// console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false

// function isEnoughCapacity(products, containerSize) {
//   const totalProducts = Object.values(products).reduce(
//     (total, quantity) => total + quantity,
//     0
//   );
//   return totalProducts <= containerSize;
// }
// console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

// console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

// console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

// console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false

/*Задача 1. Імена користувачів
Оголошена змінна getUserNames
Змінній getUserNames присвоєна стрілочна функція з параметром (users).
Для перебирання параметра users використовується метод map() */

// const getUserNames = users => {
//   return users.map(user => user.name);
// };
const getUserNames = users => users.map(user => user.name);
console.log(
  getUserNames([
    {
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      balance: 2811,
    },
    {
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      balance: 3821,
    },
    {
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      balance: 3793,
    },
    {
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      balance: 2278,
    },
    {
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      balance: 3951,
    },
    {
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      balance: 1498,
    },
    {
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      balance: 2764,
    },
  ])
); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
console.log(getUserNames()); //[]
