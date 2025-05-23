const myLibrary = [];

const addBookButton = document.querySelector(".add-book");
const bookForm = document.querySelector('dialog');
const XbuttonClose = document.querySelector('.close');
const formSubmission = document.querySelector('form');

addBookButton.addEventListener('click', () => {
  bookForm.showModal();
});

XbuttonClose.addEventListener('click', () => {
    bookForm.close();
});

formSubmission.addEventListener('submit', (event) => {
  event.preventDefault();

  addBookToLibrary(
    event.target.title.value,
    event.target.author.value,
    event.target.pages.value,
    event.target.read.value
  );

  formSubmission.reset();
  console.log(myLibrary);   
});





function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}