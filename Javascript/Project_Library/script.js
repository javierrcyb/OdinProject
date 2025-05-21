const myLibrary = [];

function Book(title, author, pages, editorial) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.editorial = editorial;
    this.read = false;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, editorial) {
    const book = new Book(title, author, pages, editorial);
    myLibrary.push(book);
}