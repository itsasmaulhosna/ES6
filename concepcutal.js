{
  var test1 = 'test';
  //   let test2 = 'test'; let const maintain block scope
}
console.log(test1);

const test = 'test';
if (true) {
  console.log(test);
}
for (i = 0; i < 5; i++) {
  console.log(test);
}
// default
function multiply(a = 1, b = 1) {
  console.log(a, b);
  const result = a * b;
  console.log(result);
}
const output = multiply(5);
console.log(output);

// template string
let name = 'asma ul hosna maya';
let age = 22;
let aboutMe = `I am ${name}. I am ${age}. I am ${age > 18 ? 'adult' : 'not adult'} i'm a student of CSE`;
console.log(aboutMe);

// rest oprator
function myFun(a, b, c, d, ...rest) {
  console.log(a, b, c, d, rest);
}
myFun(1, 2, 3, 4, 5, 6, 7, 8);

// spreed oprator
let arr = [1, 2, 3, 4, 60];
console.log(...arr);
console.log(Math.max(...arr));
console.log(Math.min(...arr));
// array destructures
let arr2 = [10, 20, 30, 40, 50, 60];
let [ten, twenty, , fourty] = arr2;
console.log(ten, twenty, fourty);

// object destructures
let person = {
  name2: 'maya',
  age2: 22,
  address: {
    city: 'gazipur',
    country: 'bangladesh',
  },
};
let { age2: myAge, name2: myName, address } = person;
console.log(myAge, myName, address);

// arrow function
const sum = (a, b) => {
  return a + b;
};
console.log(sum(5, 5));
const squrt = (a) => a * a;
console.log(squrt(5));

let person2 = {
  name3: 'maya',
  age: 22,
  showMyInfo: function () {
    console.log(this.name3);
  },
};
person2.showMyInfo();
// map update/modify
let arr3 = [10, 20, 30, 40, 50];
let update = arr3.map((Element) => Element * 2);
console.log(update);
// filter filter multiple element
let overTwwenty = arr3.filter((Element) => Element > 20);
console.log(overTwwenty);
// find find a singulr element
let findThirty = arr3.find((Element) => Element === 30);
console.log(findThirty);

const phones = [
  { name: 'iphone', price: 100000 },
  { name: 'samsung', price: 15000 },
  { name: 'mac', price: 500000 },
  { name: 'camera', price: 800000 },
];
const richPhone = phones.filter((elem) => elem.price > 100000);
const findName = phones.find((elem) => elem.name.includes('mac'));
console.log(findName);
console.log(richPhone);
// foreach just loop iterrate
phones.forEach((elem, ind, arr) => {
  console.log(elem);
});
// reduce
const summation = phones.reduce((acc, ele) => acc + ele.price, 0);
console.log(summation);
// object
let student = {
  name: 'zain',
  age: 2,
};
// dot
console.log(student.age);
console.log(student['name']);
let keys = Object.keys(student);
let values = Object.values(student);
let entries = Object.entries(student);
console.log(entries);
// for in
for (let property in student) {
  console.log(property);
}
for (let key of keys) {
  console.log(student[key]);
}
// delete,freez,stal
let car = {
  name: 'toyota',
  model: 'abc',
  color: 'red',
};
// delete car.color;
console.log(car);
// Object.freeze(car);
// delete car.model;
Object.seal(car);
car.color = 'black';
console.log(car);
// clouser
function deductLifeCounter(student) {
  let life = 3;
  let lifeDeductAccess = () => {
    if (life > 0) {
      life--;
      console.log(`${student} you lost a life.Your life remining ${life}`);
    } else {
      console.log(`${student},your 1 life is over`);
    }
  };
  return lifeDeductAccess;
}
const maya = deductLifeCounter('maya');
const zain = deductLifeCounter('zain');
maya();
maya();
zain();
maya();
// pass by value
const name3 = 'asma';
const myFunc = (value) => {
  value = 'maya';
  console.log('my name is', value);
};
myFunc(name3);
console.log(name3);
// pass by reference
const obj = {
  color: 'red',
  model: '1jh',
};
const myFunc2 = (obj) => {
  obj.color = 'black';
  console.log('the color is', obj);
};
myFunc2(obj);
console.log(obj);

// call back
const greet = (name, msg, cb) => {
  console.log(`hi ${name}`);
  cb(msg);
};
const sayGreet = (msg) => {
  console.log(msg);
};
greet('maya', 'gd n8', sayGreet);

// d straucture
let obj2 = {
  name2: 'hablu',
  year: 4,
  country: 'bd',
  address: 'ar345',
  blood: 'b',
  hobby: 'test',
  sport: 'cert',
};
let { name2, year, blood, ...rest } = obj;
console.log(name2, year, blood, rest);

// data fetching

// const fetchUser = async () => {
//   try {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     // throw new Error('unknown error');

//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err.message, 'error block triggered');
//   } finally {
//     console.log('finally block triggered');
//   }
// };
// fetchUser();
// arr of obj
const products = [
  {
    id: 1,
    name: 'Laptop',
    category: 'Electronics',
    price: 850,
    stock: 12,
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Smartphone',
    category: 'Electronics',
    price: 600,
    stock: 20,
    rating: 4.7,
  },
  {
    id: 3,
    name: 'Headphones',
    category: 'Accessories',
    price: 120,
    stock: 35,
    rating: 4.3,
  },
  {
    id: 4,
    name: 'Keyboard',
    category: 'Accessories',
    price: 80,
    stock: 15,
    rating: 4.2,
  },
  {
    id: 5,
    name: 'Mouse',
    category: 'Accessories',
    price: 40,
    stock: 50,
    rating: 4.1,
  },
  {
    id: 6,
    name: 'Monitor',
    category: 'Electronics',
    price: 300,
    stock: 10,
    rating: 4.6,
  },
  {
    id: 7,
    name: 'Tablet',
    category: 'Electronics',
    price: 450,
    stock: 18,
    rating: 4.4,
  },
  {
    id: 8,
    name: 'Smartwatch',
    category: 'Wearable',
    price: 200,
    stock: 25,
    rating: 4.3,
  },
];
// const newProducts = products.map((pd) => {
//   return { ...pd, isExpensive: pd.price > 1000 ? true : false };
// });
// console.log(newProducts);
const expensiveCate = products
  .filter((pd) => pd.price <= 1000 && pd.category === 'Electronics')
  .map((pd) => ({ id: pd.id, name: pd.name }));
console.log(expensiveCate);
if (expensiveCate) {
  console.log('ache');
} else {
  console.log('nai');
}
