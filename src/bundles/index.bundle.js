'use strict';

import _ from 'lodash';

let welcome = require('../files/welcome');

let Hello = welcome.Hello;

export {Hello as Hi};
export let a = 15;
export let page = 'index';

document.addEventListener('DOMContentLoaded', function() {

  document.body.style.margin = 0;
  
  let wrapperstyle = {
    display:    'flex',
    minHeight : '100vh',
    flexDirection : 'column',
  };

  let mainblockstyle = {
    flexGrow: '1',
    display: 'flex'
  };
  
  let headerstyle = {
    border:            'solid 1px rgba(0,0,0,0.5)',
    backgroundColor:   '#000',
    color:             '#fff',
    padding:           '3rem',
    fontSize:          '2em',
    textAlign:         'center'
  };

  let asidestyle = {
    display:          'inline-block',
    minWidth :        '20%',
    borderRight:      'solid 1px rgba(0,0,0,0.35)',
    backgroundColor:  '#fff',
    color:            '#000',
    padding:          '0.5rem',
    fontSize:         '1em',
    textAlign:        'left',
    float:            'left'
  };

  let contentstyle = {
    flexGrow:         '1',
    padding:          '1rem',
  };
  
  let listitems = [
    'first item',
    'second item',
    'third',
    'fourth',
    'fifth',
    'sixth',
    'seventh'
  ];

  let helloMessage = _.join(['Hello', 'webpack'], ' ');

  function component(tag, classn ,inner, styles) {
    var element = document.createElement(tag);
    element.className = classn;
    if (inner != '' || undefined) {
      element.innerHTML = inner;
    }
    Object.assign(element.style, styles);
    return element;
  }

  let wrapper   = component('div', 'wrapper', '', wrapperstyle);
  let header    = component('div', 'header', helloMessage, headerstyle);
  let main      = component('div', 'main', '', mainblockstyle);
  let aside     = component('div', 'aside', '', asidestyle);
  let content   = component('div', 'content', '', contentstyle);
  let mainmenu  = component('ul', 'main-menu', '');

  document.body.appendChild(wrapper);
  wrapper.appendChild(header);
  wrapper.appendChild(main);
  main.appendChild(aside);
  main.appendChild(content);
  aside.appendChild(mainmenu);

  try {
    content.appendChild(welcome.ElmPar('to the test page'));
  } catch (error) {
    let err = document.createElement('p');
    err.innerHTML = 'Error no data'
    content.appendChild(err);
  }  
  
  for (let index = 0; index < listitems.length; index++) {
    let message;
    if (listitems[index] == undefined) {
      message = 'No data';
    } else message = listitems[index];

    mainmenu.appendChild(component('li', 'main-menu__item', message));  
  }
});



