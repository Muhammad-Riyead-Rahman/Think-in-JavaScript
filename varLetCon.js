// var
var varVariable = "this is var from window scope";

console.log(varVariable); // varVariable = this is var from window scope

if (true) {
  var varVariable = "this is var from if block";
}

console.log(varVariable); //varVariable = this is var from window scope; cause block scope varVariable manipulate it's window scope varVariable

// Let
if (true) {
  let letVariable = "this is let from if block";

  /* let letVariable = "again - this is let from if block"; //prorammer can't re-declared let in same block but can change re-asssing value */

  console.log(letVariable);
}

console.log(letVariable); // can't access letVariable, cause it's outside the block from where letVariable is define

// Const
if (true) {
  const constVariable = "this is const from if block";

  /* const constVariable = "again - this is const from if block"; //prorammer can't re-declared and re-assing in same block */

  const constObject = {
    name: "JavaScript",
    age: "25 Years"
  }

  constObject.name = "JS"; //you can change object property

  console.log(constVariable);
}

console.log(constVariable); // can't access constVariable, cause it's outside the block from where constVariable is define

// parent scope has no right access to use child scope resource