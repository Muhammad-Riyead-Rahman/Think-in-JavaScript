//first scenario
// this is higher order function, cause it's return/recived function or both
/* function hello() {
  return function () {
    console.log(`Hello World`);
  }
}

hello()() // calling hello then caled inner anonymous function */

//second scenario
//without higher order function
/* var numbers = [1, 2, 3];
var result = [];

for (let i = 0; i < numbers.length; i++) {
  result.push(numbers[i] * 2);
}

console.log(result);

//with higher order function
var numbers1 = [1, 2, 3];
var result1 = [];

var result1 = numbers1.map((number) => number * 2); // map() recived a function which iterate through numbers array, for each value and finally return a new array

console.log(result1); */

//thrid scenario
//without higher order function
var players = [
  {
    name: 'sakib',
    avg: 38.23
  },
  {
    name: 'tamim',
    avg: 36.74
  },
  {
    name: 'musfiq',
    avg: 36.78
  },
  {
    name: 'mamudullah',
    avg: 37.12
  }
];

var playersWithAvgThirtySeven = [];

for (let i = 0; i < players.length; i++) {
  if (players[i].avg >= 37) {
    playersWithAvgThirtySeven.push(players[i]);
  }
}

console.log(playersWithAvgThirtySeven);

//with higher order function
var players1 = [
  {
    name: 'sakib',
    avg: 38.23
  },
  {
    name: 'tamim',
    avg: 36.74
  },
  {
    name: 'musfiq',
    avg: 36.78
  },
  {
    name: 'mamudullah',
    avg: 37.12
  }
];

var playersWithAvgThirtySeven1 = players1.filter((player) => player.avg >= 37); 

console.log(playersWithAvgThirtySeven1);

//creating array.map(built by me)
const language = ['javaScript', 'paython', 'php', 'c'];

function mapSumit(arr, fn) {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i]));
  }
  return newArray;
}

const myArray = mapSumit(language, function (language) {
  return language.length;
});

console.log(myArray);