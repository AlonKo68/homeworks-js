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

function slugify(title) {
    let slug = title.toLowerCase().replaceAll(" ", "-");
    return `"${slug}"`;
    // return `"${slug.replaceAll(" ", "-")}"`
}
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"