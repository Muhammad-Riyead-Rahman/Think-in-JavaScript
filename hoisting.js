
//var
/* console.log(a);
var a = "bangladesh";

// why it's print undefine -> cause js think like this

var a;
// a =  undefined;
console.log(a);
a = "bangladesh"; */

//let
/* console.log(a);
let a = "bangladesh"; */

// why it's print reference error ->

/* console.log(a);
let a; // not assing value to undefined, wherefor it's show reference error
a = "bangladesh"; */

//complex scenario
//when use var
/* var LANGUAGE = "java";
var language = "javaScript";

function getLanguage() {
  if (!language) {
    var language = LANGUAGE;
  }
  return language;
}

console.log(`I love ${getLanguage()}`); //i love java


//when use let
let LANGUAGE = "java";
let language = "javaScript";

function getLanguage() {
  if (!language) {
    let language = LANGUAGE;
  }
  return language;
}

console.log(`I love ${getLanguage()}`); //i love javaScript */

//function are also hoisted
/* myFunc();

function myFunc() {
  console.log(`i love javaScript`);
} */

/* function myFunc() {
  var language = "javaScript";
  console.log(language);
}

myFunc(); */

//understanding working process
/* function myFunc() {
  language = "javaScript";
  var language;
  console.log(language);
}

myFunc();
// example above works like this way

var language = undefined; //it's not effect on child

function myFunc() {
  var language; //hoisted top of scope
  language = "javaScript";
  console.log(language);
}

myFunc(); */

//understanding working process for function expression
/* myFunc();

const myFunc = function () {
  let language = "javaScript";
  console.log(language); //reference error
}

//but why reference error
const myFunc; //it's hoisted on top
myFunc();

myFunc = undefined; myFunc = function () {
  let language = "javaScript";
  console.log(language);
} */

// js code -> compilation/conversion machine language -> execution; at compilation js allocate memory for all declaration and if it's var, then js set instant undefind but during let, const doesn't do it
