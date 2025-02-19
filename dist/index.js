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

// const list = document.querySelector('ul');
// const firstItem = list.querySelector('li');
// firstItem.style.color = 'blue';

// ==== 04 DOM Selectors - Multiple Elements ===== //

// const listItems = document.querySelectorAll('.item');
// console.log(listItems[1].innerText);
// listItems[1].style.color = 'red';

// listItems.forEach((item, index) => {
// 	item.style.color = 'red';
// 	if (index === 1) {
// 		item.remove();
// 	}

// 	if (index === 0) {
// 		item.innerHTML = ` Oranges
// 					<button class="remove-item btn-link text-red">
// 						<i class="fa-solid fa-xmark"></i>
// 					</button>
//         `;
// 	}
// });

// const listItemsTwo = [...document.getElementsByClassName('item')];
// listItemsTwo.forEach((item) => console.log(item.innerText));

// const listItemsThree = document.getElementsByTagName('li');
// console.log(listItemsThree);

// ==== 05 Traversing The DOM - Elements ===== //

// ===== 06 Traversing The DOM - Nodes ====== //

// const div = document.createElement('div');
// div.className = 'my-element';
// div.id = 'my-element';
// div.setAttribute('title', 'My Element');
// const text = document.createTextNode('Hello World');
// div.appendChild(text);

// document.body.appendChild(div);
// document.querySelector('ul').appendChild(div);

// ======= 07 Create LI Element ======== //

// Quick & Dirty

// const list = document.querySelector('ul');

// const createItem = (item) => {
// 	const li = document.createElement('li');
// 	li.innerHTML = `${item}
//     <button class="remove-item btn-link text-red">
//  	    <i class="fa-solid fa-xmark"></i>
//     </button>`;
// 	list.appendChild(li);
// };

// createItem('Bananas');

// Apples
// <button class="remove-item btn-link text-red">
// 	<i class="fa-solid fa-xmark"></i>
// </button>

// Performant & Clean

// const createItemTwo = (item) => {
// 	const li = document.createElement('li');
// 	const itemText = document.createTextNode(item);
// 	li.appendChild(itemText);
// 	button = createButton('remove-item btn-link text-red');
// 	li.appendChild(button);
// 	list.appendChild(li);
// };

// const createButton = (classes) => {
// 	const button = document.createElement('button');
// 	button.className = classes;
// 	icon = createIcon('fa-solid fa-xmark');
// 	button.appendChild(icon);
// 	return button;
// };

// const createIcon = (classes) => {
// 	const icon = document.createElement('i');
// 	icon.className = classes;
// 	return icon;
// };

// createItemTwo('Pizza');

// ============= 10 Insert Elements ============= //

// const insertElement = () => {
// 	const filter = document.querySelector('.filter');
// 	const h1 = document.createElement('h1');
// 	const h1Text = document.createTextNode('nsertAdjecentElement');
// 	h1.appendChild(h1Text);
// 	filter.insertAdjacentElement('afterend', h1);
// };

// insertElement();

// const insertText = () => {
// 	const item = document.querySelector('li');
// 	item.insertAdjacentText('afterend', 'insertAdjecentText');
// };

// insertText();

// const insertHTML = () => {
// 	const clearBtn = document.querySelector('#clear');
// 	clearBtn.insertAdjacentHTML('beforebegin', '<h2>insertAdjecentHTML</h2>');
// };

// insertHTML();

// const insertBeforeItem = () => {
// 	const ul = document.querySelector('ul');
// 	const li = document.createElement('li');
// 	const liText = document.createTextNode('insertBefore');
// 	li.appendChild(liText);
// 	const thirdItem = ul.querySelector('li:nth-child(3)');
// 	ul.insertBefore(li, thirdItem);
// };

// insertBeforeItem();

// ============= 11 Custom Insert After ============= //

// const insertAftre = (newEl, existingEl) => {
// 	existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
// };

// const li = document.createElement('li');
// const liText = document.createTextNode('Insert Me After!');
// li.appendChild(liText);

// const firstItem = document.querySelector('li:first-child');

// insertAftre(li, firstItem);

// ============= 12 Replace Elements ============= //

// const replaceFirstItem = () => {
// 	const firstItem = document.querySelector('li');
// 	const li = document.createElement('li');
// 	const liText = document.createTextNode('Replaced First');
// 	li.appendChild(liText);
// 	firstItem.replaceWith(li);
// };

// replaceFirstItem();

// const replaceSecondItem = () => {
// 	const secondItem = document.querySelector('li:nth-child(2)');
// 	secondItem.outerHTML = '<li>Replaced Second</li>';
// };

// replaceSecondItem();

// const replaceAllItems = () => {
// 	const lis = document.querySelectorAll('li');
// 	lis.forEach((item, index) => (item.innerHTML = index === 1 ? (item.innerHTML = 'Second Item') : 'Replace All'));
// };

// replaceAllItems();

// const replaceChildHeading = () => {
// 	const header = document.querySelector('header');
// 	const h1 = document.querySelector('h1');
// 	const h2 = document.createElement('h2');
// 	h2.id = 'app-title';
// 	h2.innerText = 'Shopping List';
// 	header.replaceChild(h2, h1);
// };

// replaceChildHeading();

// ============= 13 Remove Elements ============= //

// const removeClearButton = () => {
// 	const clearBtn = document.querySelector('#clear');
// 	clearBtn.remove();
// };

// removeClearButton();

// const removeFirstItem = () => {
//     const ul = document.querySelector('ul');
//     const li = document.querySelector('li');
//     ul.removeChild(li);
// }

// removeFirstItem();

// const removeItem = (itemNumber) => {
// 	const ul = document.querySelector('ul');
// 	const li = document.querySelector(`li:nth-child(${itemNumber})`);
// 	ul.removeChild(li);
// };

// removeItem(1);
