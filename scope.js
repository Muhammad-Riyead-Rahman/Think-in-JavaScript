var x = 23;

//this is parent/root/window scope

function myFunc() {
  //this is myFunc/child scop
  var y = 10; //define variable $ assaing value 10

  console.log(`${x} from myFunc()`); // x = 23 thats denote parent scope x

  /* x = 10; //it's means programmer overright/manipulate parent value of x, if x already declared on parent scope $ if it's not, then x = 10 (from child scope) means, var x = 10 on parent scope
  console.log(`${x} from myFunc()`); // x = 10 */

  /* var x = 10; //it's means programmer define a new variable - x $ assaing value 10 from child scope
  console.log(`${x} from myFunc()`); // x = 10 */
}

myFunc();

console.log(window.x);