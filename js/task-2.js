// Задача M1 - 2:   Доставка товару
// Оголоси функцію getShippingMessage (country, price, deliveryFee):
// • country — країнa доставки
// • price — загальнa вартість товару
// • deliveryFee — вартість доставки товару
// Доповни код функції так, щоб вона повертала рядок з повідомленням про доставку товару
// в країну користувача: "Shipping to <country> will cost <totalPrice> credits", де:
// • <country> — це країни доставки
// • <totalPrice> — це загальна вартість замовлення, що включає вартість товару і його доставки

// function getShippingMessage (country, price, deliveryFee) {
//     // const totalPrice = price + deliveryFee;
//     // return `Shipping to ${country} will cost ${totalPrice} credits`;
//     return `"Shipping to ${country} will cost ${price + deliveryFee} credits"`;
// }
// console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

// const getShippingMessage = (country, price, deliveryFee) =>
//   `Shipping to ${country} will cost ${price + deliveryFee} credits`;
// console.log(getShippingMessage('Australia', 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage('Germany', 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage('Sweden', 100, 20)); // "Shipping to Sweden will cost 120 credits"

// Задача M2 - 2: Форматування повідомлення
// Оголоси функцію formatMessage(message, maxLength), яка приймає рядок(параметр message) та
// перевіряє його довжину відповідно до заданої максимальної довжини(параметр maxLength).
// Доповни код функції таким чином, що:
// Якщо довжина рядка дорівнює або менша за maxLength, то функція повертає початковий рядок без
// змін.
// Якщо довжина перевищує maxLength, то функція обрізає рядок до maxLength символів, додає
// трикрапку "..." в кінці та повертає обрізану версію.

// function formatMessage(message, maxLength) {
//   const newMessage = message.slice(0, maxLength);

//   return message.length > maxLength ? `"${newMessage}..."` : `"${newMessage}"`;

//   // if (message.length > maxLength) {
//   //     return `"${newMessage}..."`;
//   // } else {
//   //     return `"${newMessage}"`;
//   // }
// }
// console.log(formatMessage('Curabitur ligula sapien', 16)); // "Curabitur ligula..."
// console.log(formatMessage('Curabitur ligula sapien', 23)); // "Curabitur ligula sapien"
// console.log(formatMessage('Vestibulum facilisis purus nec', 20)); // "Vestibulum facilisis..."
// console.log(formatMessage('Vestibulum facilisis purus nec', 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); // "Nunc sed turpis..."
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); // "Nunc sed turpis a felis in nunc fringilla"

// Задача M3 - 2: Композиція масивів

// Напиши функцію під назвою makeArray, яка приймає три параметри:
// firstArray(масив), secondArray(масив) і maxLength(число).Функція повинна створювати
// новий масив, який містить усі елементи з firstArray, а потім усі елементи з secondArray.

// Якщо кількість елементів у новому масиві перевищує maxLength, функція повинна повернути
// копію масиву з довжиною maxLength елементів.
// В іншому випадку функція повинна повернути весь новий масив.

// function makeArray(firstArray, secondArray, maxLength) {
//   const array = firstArray.concat(secondArray);  //соединили два массива в один
//   if (array.length > maxLength) {
//     return array.slice(0, maxLength);
//   }
//   return array;
// }
// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []

/* Задача M4 - 2. Розрахунок калорій
Напиши функцію calcAverageCalories(days), яка повертає середньодобове значення кількості калорій, які
спортсмен споживав протягом тижня. Функція очікує один параметр: days — масив об’єктів. Кожен об’єкт описує
день тижня та кількість калорій calories, спожитих спортсменом, у цей день. Візьми код нижче і встав після
оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її
викликів.  */

// function calcAverageCalories(days) {
//   let totalCalories = 0;
//   for (const day of days) {
//     totalCalories += day.calories;
//   }
//   if (totalCalories === 0) {
//     return 0;
//   }
//   return totalCalories / days.length;
// }

// function calcAverageCalories(days) {
//   let totalCalories = 0;
//   for (const { calories } of days) {
//     totalCalories += calories;
//   }
//   if (totalCalories === 0) {
//     return 0;
//   }
//   return totalCalories / days.length;
// }

// const calcAverageCalories = days => {
//   const totalCalories = days.reduce((total, user) => total + user.calories, 0);
//   if (totalCalories === 0) {
//     return 0;
//   }
//   return totalCalories / days.length;
// };
// console.log(
//   calcAverageCalories([
//     { day: 'monday', calories: 3010 },
//     { day: 'tuesday', calories: 3200 },
//     { day: 'wednesday', calories: 3120 },
//     { day: 'thursday', calories: 2900 },
//     { day: 'friday', calories: 3450 },
//     { day: 'saturday', calories: 3280 },
//     { day: 'sunday', calories: 3300 },
//   ])
// ); //3180
// console.log(
//   calcAverageCalories([
//     { day: 'monday', calories: 2040 },
//     { day: 'tuesday', calories: 2270 },
//     { day: 'wednesday', calories: 2420 },
//     { day: 'thursday', calories: 1900 },
//     { day: 'friday', calories: 2370 },
//     { day: 'saturday', calories: 2280 },
//     { day: 'sunday', calories: 2610 },
//   ])
// ); //2270
// console.log(calcAverageCalories([])); //0

/*Задача 2. Користувачі з другом
Напиши стрілочну функцію getUsersWithFriend(users, friendName) , яка прийматиме два параметра:

перший параметр users — масив об’єктів користувачів
другий параметр friendName — ім’я друга для пошуку.
Функція має повертати масив усіх користувачів із масиву users, у яких є друг з іменем friendName. Друзі
кожного користувача зберігаються у властивості friends. Якщо користувачів, у яких є такий друг немає, то
функція має повернути порожній масив.

Поради:

Метод filter() можна використовувати для створення нового масиву з елементами, які задовольняють певну
умову.
Використовуй метод includes() для перевірки, чи масив friends містить friendName.
Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль
будуть виведені результати її роботи.  */
// const allUsers = [
//     { name: 'Moore Hensley', friends: ['Sharron Pace'], },
//     { name: 'Sharlene Bush', friends: ['Briana Decker', 'Sharron Pace'], },
//     { name: 'Ross Vazquez', friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'], },
//     { name: 'Elma Head', friends: ['Goldie Gentry', 'Aisha Tran'], },
//     { name: 'Carey Barr', friends: ['Jordan Sampson', 'Eddie Strong'], },
//     { name: 'Blackburn Dotson', friends: ['Jacklyn Lucas', 'Linda Chapman'], },
//     { name: 'Sheree Anthony', friends: ['Goldie Gentry', 'Briana Decker'], },
// ];

// const getUsersWithFriend = (users, friendName) =>
//     users.filter(user => user.friends.includes(friendName));

// console.log(getUsersWithFriend(allUsers, 'Briana Decker'));
// [
//     { name: 'Sharlene Bush', friends: ['Briana Decker', 'Sharron Pace'], },
//     { name: 'Sheree Anthony', friends: ['Goldie Gentry', 'Briana Decker'], },
// ];
// console.log(getUsersWithFriend(allUsers, 'Goldie Gentry'));
// [
//     { name: 'Elma Head', friends: ['Goldie Gentry', 'Aisha Tran'], },
//     { name: 'Sheree Anthony', friends: ['Goldie Gentry', 'Briana Decker'], },
// ];
// console.log(getUsersWithFriend(allUsers, 'Adrian Cross')); // []

//Задача m6 - 2. Склад
// Створи клас Storage, який створюватиме об'єкти для управління складом товарів. Клас очікує лише один 
// аргумент — початковий масив товарів, який записується до створеного об'єкта в приватну властивість items.

// Оголоси наступні методи класу:
// getItems() — повертає масив поточних товарів у приватній властивості items.
// addItem(newItem) — приймає новий товар newItem і додає його до масиву товарів у приватну властивість 
// items об'єкта.
// removeItem(itemToRemove) — приймає рядок з назвою товару itemToRemove і видаляє його з масиву товарів 
// у приватній властивості items об'єкта.
// Візьми код нижче з ініціалізацією екземпляра й викликами методів і встав його після оголошення класу для 
//перевірки коректності роботи.У консоль будуть виведені результати їх роботи.Будь ласка, нічого там не змінюй.

// class Storage {
//     #items;
//     constructor(items) {
//         this.#items = items;
//     }
//     getItems() {
//         return this.#items;
//     }
//     addItem(newItem) {
//         return this.#items.push(newItem);
//     }
//     removeItem(removeItem) {
//         const idx = this.#items.indexOf(removeItem);
//         if (idx !== -1) {
//             this.#items.splice(idx, 1);
//         }
//     }
// }
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// storage.removeItem("Scaner");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]