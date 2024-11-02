// examine the doc object
// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[9]);
// document.all[9].textContent = 'JS Manipulation';
// console.log(document.forms[0]);
// console.log(document.images);

// getElementById
//console.log(document.getElementById("header-title"));
// let headerTitle = document.getElementById("header-title");
// let header = document.getElementById("main-header");
//console.log(headerTitle);
// headerTitle.textContent = 'Hello!';
// headerTitle.innerHTML = '<h1>Hello</h1>';
// header.style.borderBottom = 'solid 3px black';

// getElementsByClassName
// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// items.style.backgroundColor = 'lightgrey'; //doesn't work

// for (var i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = 'lightgrey';
// }

// getElementsByTagName
// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for (var i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = 'lightgrey';
// }

// querySelector
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px grey';

// var input = document.querySelector('input');
// input.value = 'Hello world!';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'Send';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondChild = document.querySelector('.list-group-item:nth-child(2)');
// secondChild.style.color = 'coral';

//querySelectorAll
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = "Hello!";

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = '#F4F4F4';
// }

// for(var i = 0; i < even.length; i++) {
//   even[i].style.backgroundColor = '#CCC';
// }

// Traversing the DOM
var itemList = document.querySelector('#items');

// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
// console.log(itemList.childNodes); //receives "\n" as separate text nodes
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

// firstChild - give " " or "\n" before first element of list
// console.log(itemList.firstChild);

// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// lastChild - give " " or "\n" before first element of list
// console.log(itemList.lastChild);

// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling - gives " " or "\n" after the element
// console.log(itemList.nextSibling);

// nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);

// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// createElement
// create a div
var newDiv = document.createElement('div');

// add class
newDiv.className = 'hello';

// add id
newDiv.id = 'hello1';

// add attribute
newDiv.setAttribute('title', 'hello div');

// create text node
var newDivText = document.createTextNode('Hello world!');

// add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);