const titleInput = document.getElementById('bookTitle');
const authorInput = document.getElementById('bookAuthor');
const addBook = document.getElementById('add');
const list = document.getElementById('list');

let BookArray = [];

class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  add() {
    BookArray.push(new Book(this.id, this.title, this.author));
  }

  saveTolocal() {
    localStorage.setItem('BookArray', JSON.stringify(this.BookArray));
  }

  DispalyTheBook() {
    const title = document.createElement('li');
    const author = document.createElement('li');
    const remove = document.createElement('Button');
    const line = document.createElement('hr');
    const titleLi = document.createTextNode(this.title);
    const authorLi = document.createTextNode(this.author);
    remove.textContent = 'remove';
    remove.value = this.id;
    remove.id = this.id;
    remove.className = 'removeButton';
    title.id = `title${this.id}`;
    author.id = `author${this.id}`;
    const removeButton = document.getElementById(this.id);
    if (removeButton == null) {
      title.appendChild(titleLi);
      author.appendChild(authorLi);
      list.appendChild(title);
      list.appendChild(author);
      list.appendChild(remove);
      list.appendChild(line);
    }
  }
}
let id = 0;
addBook.addEventListener('click', () => {
  const myBook = new Book(id, titleInput.value, authorInput.value);
  myBook.add();
  myBook.saveTolocal();
  myBook.DispalyTheBook();
  id += 1;
});
