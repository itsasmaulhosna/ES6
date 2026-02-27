const dress = ['shari', 'pant', 'frok'];
dress.push('panjabi');
console.log(dress);

// 2
const student = {
  name: 'maya',
  age: 22,
};
console.log(student);

const student2 = {
  name: 'mita',
  age: 23,
};
console.log(student2);
// 3
function add(num1, num2) {
  total = num1 + num2;
  console.log(num1, num2, total);
}
add(10, 20);

// NAN=Not A Number
function add(num1, num2 = 0) {
  total = num1 + num2;
  console.log(num1, num2, total);
}
add(10, 20);
// jdi num2 er nam nh dei tahole 0 jdi man dei tahole neww man
// 4
const firstName = 'asma';
const lastName = 'maya';
const about = `my name is ${firstName}`;
const give = `give me ${(10 + 20) * 2 + 500}`;
console.log(give);
console.log(about);
// 5
function getCardHtml(name, description, price) {
  const div = `<div class='card'>
  <h3>${name}</h3>
  <p>${description}</p>
  <p>Price:${price}</p>
  </div>`;
  console.log(div);
}
getCardHtml('iphone', 'this my favourote phone', 12340);

// arrow function
function add(num1, num2) {
  return num1 + num2;
}
const add2 = (num1, num2) => num1 + num2;
console.log(add2(50, 60));
const addALL = (a, b, c) => a + b + c;
const gptPi = () => 3.1416;
const isEven = (num) => num % 2 === 0;

const doMath = (x, y) => {
  const sum = x + y;
  const diff = x - y;
  const result = sum * diff;
  return result;
};

// document.getElementById('btn').addEventListener('click', () => {});

// document.getElementById('btn').addEventListener('click', (event) => {});

// spreed
const numbers = [1, 4, 56, 8, 96, 4, 56, 3];
const max = Math.max(...numbers);
console.log(...numbers);

const arr1 = [1, 3, 4, 6];
const arr2 = [...arr1, 54];
console.log(arr1);
console.log(arr2);

const person = { name: 'maya', age: 22 };
const person2 = { ...person, salary: 20000 };
console.log(person);
console.log(person2);

// advance distructuring
const {
  name,
  price,
  camera = '12mp',
} = {
  name: 'Iphone',
  price: 1234455,
  brand: 'apple',
  camera: '48mp',
};
console.log(name, price, camera);

const [first, second] = [12, 34, 54, 65];
console.log(first, second);
// keys/values
const king = {
  name: 'maya',
  age: 22,
  salary: 200000,
};
// dot notacition
Object.freeze(king);
Object.seal(king);
const keys = Object.keys(king);
const values = Object.values(king);
const entries = Object.entries(king);
delete king.age;
king.queen = 'shamki';
console.log(king);
// bracket notaction
const employ = {
  name: 'maya',
  1: 'dask one',
  'home-town': 'gazipur',
  salary: 200000,
};
console.log(employ['home-town']);
console.log(employ[1]);

const employ2 = {
  name: 'maya',
  1: 'dask one',
  'home-town': 'gazipur',
  salary: 200000,
  family: {
    father: 'salam',
    // mother: {
    //   name: 'roksana',
    //   age: 40,
    // },
  },
};
console.log(employ2.family?.mother?.age);

// primitive data
let a = 4;
let b = 'maya';
let c = true;

// Non primitive

let d = [1, 2, 3];
let e = { price: 22 };

// undefinded
let data;
console.log(data);

const student3 = {
  name: 'maya',
  age: 22,
};
delete student.name;
console.log(student3);

console.log(typeof undefined);
console.log(typeof null);

function test() {
  console.log('hello');
  return;
}
const result = test();
console.log(result);

// truthy & falsy

let data2;
data2 = 0;
data2 = '0';
data2 = '';
data2 = true;
data2 = {};
data2 = [];
data2 = undefined;

if (data2) {
  console.log('truthy');
} else {
  console.log('falsy');
}
// closer
function outerFunction() {
  function innerFunction() {
    console.log('this is a inner function');
  }
  return innerFunction;
}
const output = outerFunction();
console.log(output);

function counter() {
  let count = 0;
  function increement() {
    count++;
    console.log('value of count', count);
  }
  return increement;
}
const count1 = counter();
count1();
count1();

// pass by value
function multiply(a, b) {
  a = a - 5;
  b = b - 10;
  console.log(a, b);
  return a * b;
}
let x = 10;
let y = 20;
console.log('before calling', x, y);
const result2 = multiply(x, y);
console.log(result2);
console.log('after calling', x, y);

// pass by reference
function firstSum(arr1, arr2) {
  const first = (arr1[0] = 100);
  const second = (arr2[0] = 200);
  return first + second;
}
const num1 = [1, 3, 4];
const num2 = [3, 6, 5];
console.log('before calling', num1, num2);
const result3 = firstSum(num1, num2);
console.log('after calling', num1, num2);

//map
const number = [2, 3, 5, 6, 8];
// const doubleIt = (num) => num * 2;
// const doubled = number.map(doubleIt);
const doubled = number.map((num) => num * 2);
const squred = number.map((num) => num * num);
console.log(doubled, squred);
const friends = ['maya', 'zain', 'soka', 'mitu'];
const fiestLetter = friends.map((frd) => frd[0]);
console.log(fiestLetter);

const products = [
  { name: 'mobile', price: 20000 },
  { name: 'laptop', price: 50000 },
];
// const prices = products.map((pd) => pd.price * 2);
// const names = products.map(pd, index, (productsArray) => {
//   const upperCase = pd.name.toUpperCase();
//   return upperCase;
// });
// // console.log(prices, names);

// filter
const number2 = [2, 3, 5, 6, 8];
const evenNumber = number2.filter((num) => num % 2 === 0);
console.log(evenNumber);
const friends2 = ['navid', 'nahid', 'fima', 'nihal', 'nadim'];
const Nfrnd = friends2.filter((frd) => frd[0] === 'n');
console.log(Nfrnd);

const students = [
  { name: 'maya', age: 22 },
  { name: 'nabil', age: 30 },
  { name: 'soka', age: 27 },
  { name: 'zain', age: 2 },
];
const student4 = students.filter((std) => std.age > 2);
console.log(student4);
// find
const students2 = [
  { name: 'maya', age: 22 },
  { name: 'nabil', age: 30 },
  { name: 'soka', age: 27 },
  { name: 'zain', age: 2 },
];
const student5 = students2.find((std) => std.name[0] === 'm');
console.log(student5);

// reduce
const numbers3 = [2, 4, 5, 7, 8, 9];
// let sum = 0;
// for (let num of numbers3) {
//   total = sum + num;
// }
// console.log(total);
const total = numbers3.reduce((acc, numb) => acc + numb, 0);
console.log(total);
