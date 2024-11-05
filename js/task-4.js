// Задача M2 - 4. Доставка товару
// Оголоси функцію getShippingCost(country), яка повинна перевіряти можливість доставки товару
// в країну користувача(параметр country) і повертати повідомлення про результат.
// Обов'язково використовуй інструкцію switch.
// Формат рядка, що повертається "Shipping to <country> will cost <price> credits",
// де замість < country > і < price > необхідно підставити відповідні значення.
// Список країн і вартість доставки:
// China — 100 кредитів
// Chile — 250 кредитів
// Australia — 170 кредитів
// Jamaica — 120 кредитів
// Зі списку видно, що доставка можлива не скрізь. Якщо зазначена країна відсутня у списку,
// то функція повинна повернути рядок "Sorry, there is no delivery to your country".

// function getShippingCost(country) {
//     let price;
//     switch (country) {
//         case "Australia": price = 170;
//         break;
//         case "China": price = 100;
//         break;
//         case "Chile": price = 250;
//         break;
//         case "Jamaica": price = 120;
//         break;
//         default:
//             return "Sorry, there is no delivery to your country";
//         }
//         return `Shipping to ${country} will cost ${price} credits`;
//     }
// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

// Задача m5-4. Загальний баланс
// Напиши ст/рілочну функцію getTotalBalanceByGender(users, gender), яка прийматиме два параметра:
// перший параметр users — масив об’єктів користувачів,
// другий параметр gender — рядок, що зберігає стать.
// Функція має використовувати ланцюжок виклику методів та повертати загальний баланс користувачів
// (властивість balance), стать яких(властивість gender) збігається зі значенням параметра gender.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
// У консоль будуть виведені результати її роботи.

/*Оголошена змінна getTotalBalanceByGender
Змінній getTotalBalanceByGender присвоєна стрілочна функція з параметрами (users, gender)
У тілі функції використовується ланцюжок методів у правильному порядку
Значення параметра users не змінюється
Якщо значення параметра gender — це рядок "male", функція повертає число 12053
Якщо значення параметра gender — це рядок "female", функція повертає число 8863
Виклик функції з випадковими, але валідними аргументами повертає правильне значення */
// const clients = [
//     { name: 'Moore Hensley', gender: 'male', balance: 2811, },
//     { name: 'Sharlene Bush', gender: 'female', balance: 3821, },
//     { name: 'Ross Vazquez', gender: 'male', balance: 3793, },
//     { name: 'Elma Head', gender: 'female', balance: 2278, },
//     { name: 'Carey Barr', gender: 'male', balance: 3951, },
//     { name: 'Blackburn Dotson', gender: 'male', balance: 1498, },
//     { name: 'Sheree Anthony', gender: 'female', balance: 2764, },
// ];
// const getTotalBalanceByGender = (users, gender) =>
//   users
//     .filter(user => user.gender === gender)
//     .reduce((total, user) => total + user.balance, 0);
// console.log(getTotalBalanceByGender(clients, 'male')); // 12053

// console.log(getTotalBalanceByGender(clients, 'female')); // 8863
