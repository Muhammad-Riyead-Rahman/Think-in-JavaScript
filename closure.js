// closure is type carry bag, where a funtion collect resource from it's parent function, for next use if nedeed- console.dir()-> f->scope->closure
//all function bind/keep reference it's imidiate parent scope resource reference not value

//first example
/* var num1 = 2;
var num2 = 3;

var sum = function () {
  return num1 + num2;
}
console.dir(sum); */

//second example
/* var num1 = 2;

var sum = function () {
  var num2 = 2;
  return function () {
    return num1 + num2;
  }
}
var myFunc = sum();
console.dir(myFunc); //f->scope->closure */

//third example
/* var num1 = 2;

var sum = function () {
  var num2 = 2;
  return function () {
    return num1;
  }
}

var myFunc = sum();

console.dir(myFunc); //f->scope->closure, but closure disappear  */

//fourth example
/* function bankAccount(initialBalance) {
  var balance = initialBalance;
  
  return function () {
    return balance;
  }
}

var account = bankAccount(100000);

console.log(account());
console.dir(account); //f->scope->closure->balance
console.log(balance); */

//programmer can private/secure any resource and publish it's via another function. such as anonymous function

//fifth example
// closure are function that refer to independent (free) variables (variable that are used locally, but defined in an enclosing scope). In other words, these functions "remember" the environment in which they were created
/* (function () {
  var num1 = 2;

  var sum = function () {
    var num = 3;
    
    return num1 + num2;
  }
  console.dir(sum);
})(); */

//sixth example
//closure keep reference not value for next use if nedeed
/* (function () {
  var num1 = 2;
  var num2 = 3;

  var sum = function () {
    return num1 + num2;
  }
  console.log(sum());
  console.dir(sum);

  num1 = 6;
  num2 = 7;

  console.log(sum());
  console.dir(sum);
})(); */

//eight example
//timer() enclose it's parent startTime, although stopwatch() is already dead
/* function stopWatch() {
  var startTime = Date.now();

  function getDelay() {
    console.log(Date.now() - startTime);
  }
  return getDelay;
}

var timer = stopWatch();

for (var i = 0; i < 100000000; i++) {
  var a = Math.random() * 1000000;
}

timer();
console.dir(timer);

//if programmer want then he collect garbage menually for performance optimize, but javaScript dosn't collect it's automatically, cause js dosen't know programmer will use it or no?

timer = null; //all resource of time is null

timer();
 */

// ningth example
/* var a;

function async() {
  a = 20;

  var myFunc = () => {
    console.log(a);
  }
  setTimeout(myFunc, 3000);
  console.dir(myFunc); // a = 30, cause closure close parent resource reference not exact value
}

async();

a = 30; */

// 10th example
/* function apiFunction(url) {
  fetch(url).then((res) => {
    console.log(res);
    console.log(url); //closure carry the url, cause url already closed but it's use yet
  });
}

apiFunction("http://jsonplaceholder.typicode.com/todos/1"); */
  