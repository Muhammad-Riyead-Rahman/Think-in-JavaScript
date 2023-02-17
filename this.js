//implicit binding
// looking from where to call function, then check left side of .name; this is "this"

//first step
/* var sakib = {
  name: "sakib",
  age: 35,

  printPlayerName: function () {
    console.log(this.name);
  }
}

sakib.printPlayerName(); */

//second step
/* var printPlayerNameFunction = function (obj) {
  obj.printPlayerName = function () {
    console.log(this.name);
  }
}

var sakib = {
  name: "sakib",
  age: 35
}

var tamim = {
  name: "tamim",
  age: 40
}

printPlayerNameFunction(sakib);
printPlayerNameFunction(tamim);

sakib.printPlayerName();
tamim.printPlayerName(); */

//third step
/* var Person = function (name, age) {
  return {
    name: name,
    age: age,
    printName: function () {
      console.log(this.name);
    },
    father: {
      name: "mr. xxx",
      printName: function () {
        console.log(this.name);
      }
    }
  }
}

var sakib = Person("sakib", 35);
sakib.printName();
sakib.father.printName(); */

//explicit binding
/* var printName = function (v1, v2, v3) {
  console.log(`${this.name} is ${v1}, ${v2} $ ${v3}`);
}

var sakib = {
  name: "sakib",
  age: 35
}

var v1 = "handsome";
var v2 = "all-rounder";
var v3 = "best player";

//call
printName.call(sakib, v1, v2, v3) // programmer explicitly say who are this

//apply
var v = [v1, v2, v3];
printName.apply(sakib, v);

//bind
var newFunc = printName.bind(sakib, v1, v2, v3); // not instantly call printName(), it's return instance/return called function & save our example variable (newFunc)
newFunc(); */

//new binding
/* function Person(name, age) {
  // let this.Object.create(null);
  this.name = name;
  this.age = age;
  console.log(`${this.name} is ${this.age} year's old`);
  // return this;
}

var sakib = new Person("sakib", 35); */

//window binding
/* var PrintName = function () {
  console.log(window);
  console.log(window === this);
  console.log(this.name);
};

var sakib = {
  name: "sakib"
}

PrintName(); */