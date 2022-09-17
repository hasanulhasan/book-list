let form = document.querySelector("#book-form")
let bookList = document.querySelector('#book-list');
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  constructor() {

  }
  addBookList(book) {
    let list = document.querySelector('#book-list');
    let row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <a href="" class="delete">X</a>`
    list.appendChild(row)
  }
  clearField() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
  showAlert(message, className) {
    let div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    let container = document.querySelector('.container');
    let form = document.querySelector("#book-form");
    container.insertBefore(div, form);
    setInterval(function () {
      document.querySelector('.alert').remove();
    }, 3000)
  }
  deleteBookList(target) {
    if (target.hasAttribute('href')) {
      target.parentElement.remove();
    }
  }
}

form.addEventListener('submit', newBook);
bookList.addEventListener('click', deleteBook);

function newBook(e) {
  let title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  let ui = new UI();
  if (title === '' || author === '' || isbn === '') {
    // alert('Your input is not valid');
    ui.showAlert('Please enter a valid input', 'error');
  }
  else {
    let book = new Book(title, author, isbn);
    ui.addBookList(book);
    ui.clearField();
    ui.showAlert('Book Added', 'success');
  }
  e.preventDefault();
}

function deleteBook(e) {
  let ui = new UI();
  ui.deleteBookList(e.target);
  ui.showAlert('Book Removed', 'success');
  e.preventDefault();
}