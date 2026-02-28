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
