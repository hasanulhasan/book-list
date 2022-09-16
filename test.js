let form = document.querySelector("#book-form")

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

form.addEventListener('submit', newBook)

function newBook(e) {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let isbn = document.getElementById('isbn').value;
  let book = new Book(title, author, isbn);
  console.log(book);

  e.preventDefault();
}