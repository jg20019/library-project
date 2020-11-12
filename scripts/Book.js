window.Library = window.Library || {}; 

class Book {
    constructor(title, author, pages, read) {
        this.title = title; 
        this.author = author; 
        this.pages = pages; 
        this.read = read; 
    } 

    toggleRead() {
        return new Book(this.title, this.author, this.pages, !this.read); 
    } 
} 

Library.Book = Book; 

