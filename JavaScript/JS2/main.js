let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

document.write('<div>');

for (const user of users) {
    document.write(`<div>${user.name} - ${user.age} - ${user.status}</div>`);
}

document.write('</div>');

let usersWithAdress = [
    {name: 'vasya', age: 31, status: false, adress:{city:'Kyiv', street: 'Shevchenko', numbber: '25'}},
    {name: 'petya', age: 30, status: true, adress:{city:'Kyiv', street: 'Shevchenko', numbber: '125'}},
    {name: 'kolya', age: 29, status: true, adress:{city:'Kyiv', street: 'Shevchenko', numbber: '65'}},
    {name: 'olya', age: 28, status: false, adress:{city:'Kyiv', street: 'Shevchenko', numbber: '95'}},
    {name: 'max', age: 30, status: true, adress:{city:'Kyiv', street: 'Shevchenko', numbber: '115'}},
    {name: 'anya', age: 31, status: false, adress:{city:'Kyiv', street: 'Shevchenko', numbber: '15'}},
    {name: 'oleg', age: 28, status: false, adress:{city:'Kyiv', street: 'Shevchenko', numbber: '105'}},
    {name: 'andrey', age: 29, status: true, adress:{city:'Kyiv', street: 'Shevchenko', numbber: '5'}},
    {name: 'masha', age: 30, status: true, adress:{city:'Kyiv', street: 'Shevchenko', numbber: '145'}},
    {name: 'olya', age: 31, status: false, adress:{city:'Kyiv', street: 'Shevchenko', numbber: '45'}},
    {name: 'max', age: 31, status: true, adress:{city:'Kyiv', street: 'Shevchenko', numbber: '75'}}
];

// document.write(`<div class="users-box">`);
//
// for (const user1 of usersWithAdress) {
//     document.write(`<div>${user1.name} ${user1.adress.city} - ${user1.adress.street} - ${user1.adress.numbber}</div>`);
// }
// document.write(`</div>`);

document.write(`<div class="users-box">`);

for (const user1 of usersWithAdress) {
    if (user1.adress.numbber > 70  && user1.status === true) {
        document.write(`<div>${user1.name} ${user1.status} ${user1.adress.city} - 
                        ${user1.adress.street} - ${user1.adress.numbber}</div>`);
    }
}
document.write(`</div>`);