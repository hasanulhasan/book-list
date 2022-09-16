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
    console.log(book);
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
  ui.addBookList(book)

  e.preventDefault();
}