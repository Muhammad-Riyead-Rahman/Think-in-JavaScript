const getButton = document.getElementById('get-button');
const sendButton = document.getElementById('send-button');

// linked with second step
const sendRequest = function(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    console.log(xhr);

    xhr.open(method, url);
    // console.log(xhr);
    xhr.responseType = 'json'; // for getting json response
    // console.log(xhr);
    xhr.setRequestHeader('Content-Type', 'application/json'); // server easily understand which type data programmer send to him
    xhr.send(data);

    xhr.onload = function() {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
      resolve(xhr.response);
      }
    }; // this define for caching application error

    xhr.onerror = function() {
      reject("Something was wrong!");
    }
  }); // this define for caching network spacific error not application error
  return promise;
}

const getData = function () {
  // first step
  /* const xhr = new XMLHttpRequest(); //creating new xhr object

  xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1' );
  xhr.send(); // this time actually xhr are request for getting data 
  // xhr.responseType = 'json';

  xhr.onload = function() {
    const result = xhr.response;
    console.log(result); // this is flat json data not object
    console.log(JSON.parse(result)); // if we use 36 number line, then no need to write 41 number line
  } */

  // second step
  sendRequest("GET", 'https://jsonplaceholder.typicode.com/todos/1' )
    .then((responseData) => {
      console.log(responseData);
  });
}

const sendData = function() {
    sendRequest("POST", 'https://jsonplaceholder.typicode.com/posts', JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      })
    ) // JSON.stringify used cause server only recived flat json data not js object
    .then((responseData) => {
        console.log(responseData);
    }).catch(err => {
        console.log(err);
    })

}

getButton.addEventListener('click', getData);
sendButton.addEventListener('click', sendData);