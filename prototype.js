//js is prototype based language

// first step
/* let person = {};

//assing value of property
person.name = "jasim";
person.age = 30;

person.eat = function () {
  console.log(`person is eating`);
}

person.sleep = function () {
  console.log(`person is sleeping`);
} */

//second step
/* let p = function Person(name, age) {
  // function it's self an object
  let person = {};

  //assing value of property
  person.name = name;
  person.age = age;

  person.eat = function () {
    console.log(`person is eating`);
  }

  person.sleep = function () {
    console.log(`person is sleeping`);
  }
  return person;
}

console.log(p());
console.dir(p); */

//third step
/* const personMethods = {
  eat () {
    console.log(`person is eating`);
  },
  sleep () {
    console.log(`person is sleeping`);
  }
}

function Person(name, age) {
  let person = {};

  person.name = name;
  person.age = age;

  person.eat = personMethods.eat;
  person.sleep = personMethods.sleep;
  
  return person;
}

const sakib = Person("sakib", 35); //create actual person with name sakib
const tamim = Person("tamim", 40);

//understanding Object.crate(captain)
const captain = {
  name: "masrafi",
  age: 36,
  country: "bangladesh"
}

const player = Object.create(captain); // crating new object with the name player; basis of captain

console.log(player); // it's showing empty object

console.log(player.age); // player.age = 36; now player accesss captain age, by prototype */

//fourth step
/* const personMethods = {
  eat() {
    console.log(`person is eating`);
  },
  sleep() {
    console.log(`person is sleeping`);
  }
}
function Person(name, age) {
  let person = Object.create(personMethods);

  person.name = name;
  person.age = age;

  return person;
}

const sakib = Person("sakib", 35); //create actual person with name sakib
const tamim = Person("tamim", 40);
tamim.sleep(); */

//fifth step
//understanding prototype
function test() { };

console.dir(test); //f test() ->prototype

//prototype is any js function built in property, who point an Object

/* Person.prototype = {
  eat() {
    console.log(`person is eating`);
  },
  sleep() {
    console.log(`person is sleeping`);
  }
}

// this is constractor function; by default all js function is constractor funtion, cause can create an Object by function
function Person(name, age) {
  let person = Object.create(Person.prototype);

  person.name = name;
  person.age = age;

  return person;
}

const sakib = Person("sakib", 35); //create actual person/instance with name sakib
const tamim = Person("tamim", 40);
tamim.sleep(); */

// js inherit property from parent through prototype; other's language  done this through class

//sixth step
/* PersonWithNew.prototype = {
  eat() {
    console.log(`person is eating`);
  },
  sleep() {
    console.log(`person is sleeping`);
  }
}

// this is constractor function; by default all js function is constractor funtion, cause can create an Object by function
function PersonWithNew(name, age) {
  // let person = Object.create(PersonWithNew.prototype); //js by default writing this line bhind the scence

  this.name = name;
  this.age = age;

  // return this; //js by default writing this line bhind the scence
}

const sakib = new PersonWithNew("sakib", 35); //create actual person/instance with name sakib
const tamim = new PersonWithNew("tamim", 40);
tamim.sleep(); */

//seventh step
/* class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`person is eating`);
  }

  sleep() {
    console.log(`person is sleeping`);
  }
}

const sakib = new Person("sakib", 35);
const tamim = new Person("tamim", 36); */

//eight step
// let perosn = []; is equivalent to let perosn = new Array(); where person is child of Array()

/* let person = new Array();

console.dir(Array); //f Array() -> prototype
console.log(Array.prototype); */

// The prototype is an object that is associated with every functions and objects by default in JavaScript, where function's prototype property is accessible and modifiable and object's prototype property(aka attribute) is not visible.Every function includes prototype object by default.