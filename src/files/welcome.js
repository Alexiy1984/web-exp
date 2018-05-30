'use strict';

module.exports.ElmPar = function(message) {
  var element = document.createElement('p');
    element.className = 'text-area';
    element.innerHTML = `Welcome ${message}`;
    return element; 
}

exports.Hello = function(message) {
  if (NODE_ENV == 'development') {
    console.log('Hello '+ message + ', build mode: ' + process.env.NODE_ENV);
    console.log('Hello '+ message + ', NODE_ENV =  ' + NODE_ENV);
  } else {
    console.log(process.env.NODE_ENV);
    console.log(NODE_ENV);
  }
}

