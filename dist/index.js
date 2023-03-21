// =========== 01 Intro To The DOM =========== //

// console.log(window);
// console.log(window.document);
// console.log(document.body.innerText);
// console.log(document.links);
// document.write('Hello from TS');
// console.log(document.querySelector('.container'));
// const heading = document.querySelector('#app-title');
// heading.innerHTML = '<h1>Hello from TS</h1>'

// ==== 02 Examining The Document Object ===== //

// let output;
// output = document.all;
// output = document.all[10];
// output = document.all.length;
// output = document.documentElement;
// output = document.head;
// output = document.body;
// output = document.body.children;
// output = document.doctype;
// output = document.domain;
// output = document.URL;
// output = document.characterSet;
// output = document.contentType;
// output = document.forms;
// output = document.forms[0];
// output = document.forms[0].id;
// output = document.forms[0].method;
// output = document.forms[0].action;
// document.forms[0].id = 'new-id';
// output = document.links;
// output = document.links[0];
// output = document.links[0].href;
// output = document.links[0].href = 'https://facebook.com';
// output = document.links[0].id = 'google-link';
// output = document.links[0].className = 'google-class';
// output = document.links[0].classList;
// output = document.images;
// output = document.images[0];
// output = document.images[0].src;
// const forms = [...document.forms];
// forms.forEach((form) => {
//     console.log(form);
// })
// console.log(output);

// ==== 03 DOM Selectors - Single Elements ===== //

// console.log(document.getElementById('app-title'));
// console.log(document.getElementById('app-title')!.id);
// console.log(document.getElementById('app-title')!.className);
// console.log(document.getElementById('app-title')!.getAttribute('id'));
// document.getElementById('app-title')!.title = 'Shopping List';
// document.getElementById('app-title')!.setAttribute('class', 'title');
// const title = document.getElementById('app-title');
// console.log(title.textContent);
// title.textContent = 'Hello World';
// title.innerText = 'Hello Aggain';
// title.innerHTML = '<strong>Shopping List</strong>';
// title.style.backgroundColor = 'red';
// console.log(document.querySelector('h1'));
// console.log(document.querySelector('#app-title'));
// console.log(document.querySelector('.container'));
// console.log(document.querySelector('input[type="text"]'));
// console.log(document.querySelector('li:nth-child(2)'));
// const secondItem = document.querySelector('li:nth-child(2)');
// secondItem.innerText = 'Chuj';
// secondItem.style.color = 'red';

const list = document.querySelector('ul');
const firstItem = list.querySelector('li');
firstItem.style.color = 'blue';
