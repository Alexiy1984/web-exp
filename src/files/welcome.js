'use strict';

module.exports = function(message) {
  var element = document.createElement('p');
    element.className = 'text-area';
    element.innerHTML = `Welcome ${message}`;
    return element; 
}
