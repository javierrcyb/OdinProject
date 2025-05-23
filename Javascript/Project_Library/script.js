const myLibrary = [];

const showFormAddBook = document.querySelector(".add-book");
const bookForm = document.querySelector('dialog');
const XbuttonClose = document.querySelector('.close');
const formSubmission = document.querySelector('form');
const bookContainer = document.querySelector('.books-container');
const addBookButton = document.querySelector('.submit-button');
showFormAddBook.addEventListener('click', () => {
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

    bookForm.close();
    displayBooks(myLibrary);
    formSubmission.reset();
});

function displayBooks(myLibrary) {
    bookContainer.innerHTML = '';

    myLibrary.forEach((book) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        bookCard.innerHTML = `
      <h2>${book.title}</h2>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Read: ${book.read ? "Sí" : "No"}</p>
      <button class="change-read-status">Change Read Status</button>
      <button class="remove-book">Remove</button>
    `;

        const changeStatusButton = bookCard.querySelector(".change-read-status");
        changeStatusButton.addEventListener("click", () => {
            book.read = !book.read;  // Alterna entre true y false
            displayBooks(myLibrary);
        });

        const removeButton = bookCard.querySelector(".remove-book");
        removeButton.addEventListener("click", () => {
            const index = myLibrary.indexOf(book);
            if (index > -1) {
                myLibrary.splice(index, 1);
                displayBooks(myLibrary);
            }
        });

        bookContainer.appendChild(bookCard);
    });
}





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
    const book = new Book(title, author, pages, read === "true");
    myLibrary.push(book);
}