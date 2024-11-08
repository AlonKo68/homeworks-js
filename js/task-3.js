//          Задача M1 - 3. Ширина елемента
// Оголоси функцію getElementWidth(content, padding, border), яка очікує три параметри:
// • content — ширина контенту
// • padding — значення горизонтального падінгу для кожної зі сторін
// • border — значення товщини бордера для кожної зі сторін
// Значення всіх параметрів будуть рядками формату Npx де N — це довільне число, ціле або дробове.
// Доповни код функції так, щоб вона повертала число — загальну ширину елемента.
// При розрахунку загальної ширини орієнтуйся на те, що значення box-sizing дорівнює border-box.

// function getElementWidth(content, padding, border) {
//     const numerContent = Number.parseFloat(content);
//     const numerPadding = Number.parseFloat(padding);
//     const numerBorder = Number.parseFloat(border);
//     // const total = numerContent + numerPadding * 2 + numerBorder * 2;
//     // return total;
//     return `${numerContent + numerPadding * 2 + numerBorder * 2}`;
// }

// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200


//          Задача M2 - 3: Перевірка спаму 

// Функція checkForSpam(message) приймає рядок (message), перевіряє його на вміст заборонених
// слів spam і sale, і повертає результат перевірки. Слова в рядку параметра message
// можуть бути в довільному регістрі, наприклад SPAM або sAlE.
// Доповни код функції таким чином, що:
// Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
// Якщо в рядку відсутні заборонені слова, функція повертає буль false

// function checkForSpam(message) {
//   const lowerMessage = message.toLowerCase();
//   return lowerMessage.includes('spam') || lowerMessage.includes('sale')
//     ? true
//     : false;

//   // if (lowerMessage.includes("spam") || lowerMessage.includes("sale")) {
//   //     return true;
//   // } else {
//   //     return false;
//   // }
// }

// console.log(checkForSpam('Latest technology news')); // false
// console.log(checkForSpam('JavaScript weekly newsletter')); // false
// console.log(checkForSpam('Get best sale offers now!')); // true
// console.log(checkForSpam('Amazing SalE, only tonight!')); // true
// console.log(checkForSpam('Trust me, this is not a spam message')); // true
// console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
 

//             Задача M3 - 3: Фільтрація масиву чисел

// Напиши функцію filterArray(numbers, value), яка приймає масив чисел (numbers)
// та значення(value) як параметри. Функція повинна повертати новий масив лише тих чисел
// із масиву numbers, які більші за значення value.
// Усередині функції:
// Створи порожній масив, у який будеш додавати підходящі числа.
// Використай цикл для ітерації кожного елемента масиву numbers.
// Використовуй умовний оператор if усередині циклу для перевірки кожного елемента и
// додавання до свого масиву.
// Поверни свій новий масив з підходящими числами як результат.

// function filterArray(numbers, value) {
//   const newArray = [];
//   for (const number of numbers) {
//     if (number > value) {
//       newArray.push(number);
//     }
//   }

//   // numbers.forEach(function (number, index) {
//   //   if (number > value) {
//   //     newArray.push(number);
//   //   }
//   // });

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //     if (numbers[i] > value)  {
//   //        newArray.push(numbers[i]);
//   //     }
//   // }

//   return newArray;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]


/*        Задача M4 - 3. Профіль гравця

Об'єкт profile описує профіль користувача на ігровій платформі. У його властивостях зберігається ім'я
профілю username та кількість активних годин playTime, проведених у грі.
const profile = {
    username: "Jacob",
  playTime: 300,
};
Доповни об'єкт profile методами для роботи з його властивостями.
Метод changeUsername(newName) повинен приймати рядок (нове ім'я) в параметр newName та змінювати значення
властивості username на нове. Нічого не повертає.
Метод updatePlayTime(hours) повинен приймати число (кількість годин) у параметр hours та збільшити на нього
значення властивості playTime. Нічого не повертає.
Метод getInfo() має повертати рядок формату <Username> has <amount> active hours!, де <Username> — це ім'я
профілю, а <amount> — кількість ігрових годин.
Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть
виведені результати її роботи.
Оголошена змінна profile
Значення змінної profile — це об'єкт з властивостями username, playTime, getInfo, changeUsername і updatePlayTime
Значення властивості getInfo — це функція
Значення властивості changeUsername — це функція
Значення властивості updatePlayTime — це функція
Для звернення до властивостей об'єкта в його методах використовується this */
// const profile = {
//   username: 'Jacob',
//   playTime: 300,
//   getInfo() {
//     return `${this.username} has ${this.playTime} active hours!`;
//   },
//   changeUsername(newName) {
//     this.username = newName;
//   },
//   updatePlayTime(amount) {
//     this.playTime = amount + this.playTime;
//   },
// };
// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername('Marco');
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"


/*           Задача m5-3. Сортування за кількістю друзів

Напиши стрілочну функцію sortByDescendingFriendCount(users) , яка прийматиме один параметр users —
масив об’єктів користувачів.
Функція має повертати масив усіх користувачів, відсортованих за спаданням кількостій їх друзів
(властивість friends).
Оголошена змінна sortByDescendingFriendCount
Змінній sortByDescendingFriendCount присвоєна стрілочна функція з параметром (users)
Для перебирання параметра users використаний метод toSorted()
Виклик функції із зазначеним масивом users повертає новий масив користувачів, відсортований за
спаданням кількості їхніх друзів
Виклик функції з випадковими, але валідними аргументами повертає правильне значення */
// const sortByDescendingFriendCount = users => {
//   return users.toSorted((a, b) => a.friends.length - b.friends.length);
// };
// console.log(
//   sortByDescendingFriendCount([
//     { name: 'Moore Hensley', friends: ['Sharron Pace'], gender: 'male', },
//     { name: 'Sharlene Bush', friends: ['Briana Decker', 'Sharron Pace'], gender: 'female', },
//     { name: 'Ross Vazquez', friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'], gender: 'male', },
//     { name: 'Elma Head', friends: ['Goldie Gentry', 'Aisha Tran'], gender: 'female', },
//     { name: 'Carey Barr', friends: ['Jordan Sampson', 'Eddie Strong'], gender: 'male', },
//     { name: 'Blackburn Dotson', friends: ['Jacklyn Lucas', 'Linda Chapman'], gender: 'male', },
//     { name: 'Sheree Anthony', friends: ['Goldie Gentry', 'Briana Decker'], gender: 'female', },
//   ])
// );
// [
//   { name: "Ross Vazquez", friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"], gender: "male" },
//   { name: "Sharlene Bush", friends: ["Briana Decker", "Sharron Pace"], gender: "female" },
//   { name: "Elma Head", friends: ["Goldie Gentry", "Aisha Tran"], gender: "female" },
//   { name: "Carey Barr", friends: ["Jordan Sampson", "Eddie Strong"], gender: "male" },
//   { name: "Blackburn Dotson", friends: ["Jacklyn Lucas", "Linda Chapman"], gender: "male" },
//   { name: "Sheree Anthony", friends: ["Goldie Gentry", "Briana Decker"], gender: "female" },
//   { name: "Moore Hensley", friends: ["Sharron Pace"], gender: "male" }
// ]


//           Задача m6-3. Конструктор рядків

// Напиши клас StringBuilder, який приймає один параметр initialValue — довільний рядок, який записується у 
// приватну властивість value об'єкта, що створюється.
// Оголоси наступні методи класу:
// getValue() — повертає поточне значення приватної властивості value.
// padEnd(str) — отримує параметр str(рядок) і додає його в кінець значення приватної властивості value 
//об'єкта, який викликає цей метод.
// padStart(str) — отримує параметр str(рядок) і додає його на початок значення приватної властивості value 
// об'єкта, який викликає цей метод.
// padBoth(str) — отримує параметр str(рядок) і додає його на початок і в кінець значення приватної 
// властивості value об'єкта, який викликає цей метод.
// Візьми код нижче з ініціалізацією екземпляра й викликами методів і встав його після оголошення класу для 
//перевірки коректності роботи.У консоль будуть виведені результати їх роботи. 

// class StringBuilder {
//   #value;
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }
//   getValue() {
//     return this.#value;
//   }
//   padStart(str) {
//     this.#value = str + this.#value;
//   }
//   padEnd(str) {
//     this.#value += str;
//     // this.#value = this.#value + str;
//   }
//   padBoth(str) {
//     this.#value = str + this.#value + str;
//   }
// }
// const builder = new StringBuilder(".");

// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
