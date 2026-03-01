const person = {
  name: 'maya',
  age: 22,
  isRich: true,
  friends: ['zain', 'mita', 'hasi', 'sima'],
  money: 20000,
};
console.log(person, typeof person);
// convert JSON
const personJSON = JSON.stringify(person);
console.log(personJSON, typeof personJSON);
// convert obj
const parseJSON = JSON.parse(personJSON);
console.log(parseJSON);
