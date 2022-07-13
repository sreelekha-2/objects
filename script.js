//1.property read only
const obj = { id: 1 };
Object.defineProperty(obj, 'id', {
  value: '1',
  writable: false,
});
// obj.id = 2;
console.log(obj.id);

//2.value should increment for each console
const obj2 = {
  count: 0,
  get counter() {
    return (this.count = this.count + 1);
  },
};
console.log(obj2.counter);
console.log(obj2.counter);
console.log(obj2.counter);

//3.stringify the object
const newObj = {
  id: 1,
  username: 'John',
  password: 'secret',
  email: 'john@email.com',
};
console.log(newObj);
console.log(JSON.stringify({ ...newObj, password: undefined }));

//4.shallow copy vs deep copy
const person1 = { name: 'sree', age: 20, password: 'sree1234' };
const person2 = JSON.parse(JSON.stringify(person1)); //deep copy

//before modification
console.log('deep copy');
console.log('before modification');
console.log(person1);
console.log(person2);

person2.age = 25;

//after modification
console.log('after modification');
console.log(person1);
console.log(person2);

const employee1 = {
  employeName: 'sreelekha',
  employeeCode: 5,
  location: 'hyderabad',
};

const employee2 = employee1; //shallow copy
//before modification
console.log('shallow copy');
console.log('before modification');
console.log(employee1);
console.log(employee2);

employee2.location = 'bangalore';

//after modification
console.log('after modification');
console.log(employee1);
console.log(employee2);

//5.comparison of objects
const myobj1 = {
  employeName: 'sreelekha',
  employeeCode: 5,
  location: 'hyderabad',
};
const myobj2 = {
  employeName: 'sreelekha',
  employeeCode: 5,
  location: 'hyderabad',
};
// console.log(person1 === person2);
// console.log(employee1 === employee2);
console.log(myobj1 === myobj2);
