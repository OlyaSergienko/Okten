function writer() {
    document.write(`<h2> hello </h2>`);
}
writer();
//после создания функции - обязательно ее нужно вызвать!

function writing(msg, sym) {
    document.write(`<h2> ${msg} ${sym}</h2>`);
}
writing ('hello', '!');
writing('hi', '?');

//-----------------------------

function prodCard(title, img) {
    document.write(`
    <div> 
        <h2>${title}</h2>
        <img src="${img}" alt=""> 
    </div>`);
}
prodCard('Bart', 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png')

//------------------------------

function calculator (a, b) {
    return a * b;
}

let c1 = calculator(10, 20);
console.log(c1);

//---------------------------------

let str = 'hello okten';

let replaceALL = str.replaceAll('o', '!');
console.log(str);
console.log(replaceALL);
// replaceALL замінює одне знач на інше

let startsWith = str.startsWith('he');
console.log(startsWith);
// startsWith - перевіряє чи починається слово на...
// повертає булеві значення

let endsWith = str.endsWith('en');
console.log(endsWith);
// endsWith - перевіряє чи закінчується слово на...
// повертає булеві значення

let includes = str.includes('ll');
console.log(includes);
// includes - чи містить в собі...

let indexOf = str.indexOf('e');
console.log(indexOf);

console.log(str[1]);

//indexOf - чи містить елемент і в якому індексі (при першому входженні)
//lastIndexOf - з останнього входження - з кінця

let split = str.split (' ');
console.log(split);
//split - розподіляє речення на массиви по заданому значенню

let nums = [123, 5, 8, -56];
nums.push('qwerty');
console.log(nums);
//push - добавляет объект в массив

let nums1 = [123, 5, 8, -56];
let number = nums1.push('qwerty');
console.log(number);
//выводит индекс добавленного объекта

let nums2 = [123, 5, 8, -56];
nums2.push('qwerty');
nums2.pop();
console.log(nums2);
//pop - удаляет элемент с конца
nums2.push('qwerty');
let pop = nums2.pop();
console.log(nums2, pop);
//повертає елемент за межі массиву

nums.unshift('start');
console.log(nums);
//добавляет в начало масиву новый елемент
let unshift = nums.unshift('start');
console.log(nums, unshift);
// выводит новую длину массива

let shift = nums.shift();
console.log(nums);
//убирает сначала елемент

let slice = nums.slice(0, 2);
//вырезаем по 2й елемент !не включно!
console.log(slice);

let splice = nums.splice(1, 2);
//начиная с 1 индекса - удаляем 2 елемента
console.log(splice);
console.log(nums);
//let splice = nums.splice(1, 2, 'qwsad', 999);
//добавит на место вырезаных елементов - 'qwsad', 999


