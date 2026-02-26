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
