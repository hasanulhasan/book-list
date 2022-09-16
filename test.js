let form = document.querySelector("#book-form")

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
}

form.addEventListener('submit', newBook)

function newBook(e) {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let isbn = document.getElementById('isbn').value;
  let book = new Book(title, author, isbn);
  // console.log(book);
  let ui = new UI();
  ui.addBookList(book);
  ui.clearField();

  e.preventDefault();
}