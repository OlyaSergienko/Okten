// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let num = [1, 5, 8, 4, 2];
// console.log(num);
//
// let string = ['name', 'age', 'state', 'height', 'weight'];
// console.log(string);
//
// let mix = [2, 10, 'name', 3<5, 6>10];
// console.log(mix);
//
// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись
// // до конкретного індексу. Вивести в консоль
//
// let xxx = [];
// xxx[0] = 'qwe';
// xxx[1] = 6;
// xxx[2] = 'asd';
// xxx[3] = 3>6;
// console.log(xxx);
//
// // - За допомогою циклу for і document.write() вивести 10 блоків div c
// // довільним текстом всередині
//
// for (let i=0; i<10; i++) {
//     document.write(`<div>qwerty</div>`);
// }
//
// // - За допомогою циклу for і document.write() вивести 10 блоків div
// // c довільним текстом і індексом всередині
//
// for (let i=0; i<10; i++) {
//     document.write(`<div>${i} - qwerty</div>`);
// }
//
// // - За допомогою циклу while вивести в документ 20 блоків h1 c
// // довільним текстом всередині.
//
// let x = 0;
// while (x<20) {
//     document.write(`<h1>asdfgh</h1>`)
//    x++;
// }
//
// // - За допомогою циклу while вивести в документ 20 блоків h1 c
// // довільним текстом і індексом всередині.
//
// let y = 1;
// while (y<21) {
//     document.write(`<h1>${y} - qwerty</h1>`)
//     y++
// }
//
// // - Створити масив з 10 числових елементів. Вивести в консоль всі його
// // елементи в циклі.
//
// let numbers = [1, 20, 35, 46, 5, 6, 79, 8, 91, 10];
//
// for (let number of numbers) {
//     console.log(number);
// }
//
// // - Створити масив з 10 строкрових елементів. Вивести в
// // консоль всі його елементи в циклі.
//
// let strings = ['qwe', 'rty', 'uio', 'asd', 'fgh', 'jkl', 'zxc', 'vbn', 'mnb', 'lkj'];
//
// for (let string of strings) {
//     console.log(string);
// }
//
// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його
// // елементи в циклі.
//
// let elements = [123, 'qwerty', 3+6, 'asd', 569, 6>3, 'asdf', 'vbn', 9<12, 'hdjka'];
// for (let element of elements) {
//     console.log(element);
// }
//
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// // За допомогою if та typeof вивести тільки булеві елементи
//
// let someEl = [123, 'qwerty', 3>6, 'asd', 569, 6>3, 'asdf', 'vbn', 9>12, 'hdjka'];
// for (let xxx of someEl) {
//     if (typeof xxx === 'boolean') {
//         console.log(xxx);
//     }
// }
//
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// // За допомогою if та typeof вивести тільки числові елементи
//
// let qwerty = [123, 'qwerty', 3>6, 'asd', 569, 6>3, 'asdf', 'vbn', 9>12, 'hdjka'];
// for (let yyy of qwerty) {
//     if (typeof yyy === 'number') {
//         console.log(yyy);
//     }
// }
//
// // - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// // За допомогою if та typeof вивести тільки рядкові елементи
//
// let asd = [123, 'qwerty', 3>6, 'asd', 569, 6>3, 'asdf', 'vbn', 9>12, 'hdjka'];
// for (let z of asd) {
//     if (typeof z === 'string') {
//         console.log(z);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами)
// через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let qwe = [];
// qwe[0] = 'asd';
// qwe[1] = 6;
// qwe[2] = 'asd';
// qwe[3] = 3>6;
// qwe[4] = "fgfh";
// qwe[5] = 569;
// qwe[6] = 456;
// qwe[7] = 'afgfg';
// qwe[8] = 9==12;
// qwe[9] = 6<8;
// for (let aaa of qwe) {
//     console.log(aaa);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку
// через console.log та document.write

// for (y=0; y<10; y++) {
//     console.log(y);
//     document.write(y);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку
// через console.log та document.write

// for (w=0; w<100; w++) {
//     console.log(w);
//     document.write(w);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку
// через console.log та document.write

// for (r=0; r<100; r+=2) {
//     console.log(r);
//     document.write(r);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки через console.log + document.write

// for (d=0; d<100; d++) {
//     if (d%2===0) {
//         console.log(d);
//         document.write(d);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (p=0; p<100; p++) {
//     if (!(p % 2 === 0)) {
//         console.log(p);
//         document.write(p);
//     }
// }

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:

// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// let usersWithCities = [];
//
// // З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// //     Записати цей об'єкт в новий масив
// // Example:
// //     let usersWithCities = [
// //         {
// //             id: 1, // <===
// //             name: 'vasya',
// //             age: 31,
// //             status: false,
// //             address: {
// //                 user_id: 1, // <===
// //                 country: 'Ukraine',
// //                 city: 'Ternopil'
// //             }
// //         },
// //         // TO BE CONTINUED .....
// //     ]
//
//                      Рішення 1

// for (let i = 0; i<usersWithId.length; i++) {
//     for (let a = 0; a<citiesWithId.length; a++) {
//         if (usersWithId[i].id === citiesWithId[a].user_id) {
//             usersWithCities[i] = {
//                     id: usersWithId[i].id,
//                     name: usersWithId[i].name,
//                     age: usersWithId[i].age,
//                     status: usersWithId[i].status,
//                     address: {
//                         user_id: citiesWithId[a].user_id,
//                         country: citiesWithId[a].country,
//                         city: citiesWithId[a].city
//                     }
//                 }
//         }
//     }
// }
// console.log(usersWithCities)
//
//                  Рішення 2
//
// for (let i = 0; i < usersWithId.length; i++) {
//     for (let city of citiesWithId) {
//         if (usersWithId[i].id === city.user_id) {
//             usersWithId[i].adress = city;
//             usersWithCities[i] = usersWithId[i]
//         }
//     }
// }
//
// console.log(usersWithCities)
