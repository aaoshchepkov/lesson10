let books = document.querySelector('.books');
let book = document.querySelectorAll('.book');
let body = document.querySelector('body');
let a = document.querySelectorAll('a');
let adv = document.querySelector('.adv');
let list = document.querySelectorAll('ul');
console.log(list);
let itemBook2 = list[0].querySelectorAll('li');
console.log(itemBook2);
let itemBook5 = list[5].querySelectorAll('li');
console.log(itemBook5);

let itemBook6 = list[2].querySelectorAll('li');
console.log(itemBook6);



console.log(books);
console.log(book);


books.prepend(book[1]);
books.append(book[3]);
books.append(book[5]);
books.append(book[2]);

body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

a[4].textContent = 'Книга 3. this и Прототипы Объектов';

adv.style.display = 'none';


list[0].append(itemBook2[4]);
list[0].append(itemBook2[5]);
list[0].append(itemBook2[7]);
list[0].append(itemBook2[9]);
list[0].append(itemBook2[2]);
list[0].append(itemBook2[10]);


list[5].append(itemBook5[9]);
list[5].append(itemBook5[3]);
list[5].append(itemBook5[4]);
list[5].append(itemBook5[2]);
list[5].append(itemBook5[6]);
list[5].append(itemBook5[7]);
list[5].append(itemBook5[5]);
list[5].append(itemBook5[8]);
list[5].append(itemBook5[10]);

list[2].insertAdjacentHTML('beforeend', '<li>Глава 8: За пределами ES6</li>');
list[2].append(itemBook6[9]);