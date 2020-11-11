window.Library = window.Library || {}; 

Library.LibraryView = function (el) {
    let state = {
        books: [
            new Library.Book(
                'A Tale of Two Cities', 
                'Charles Dickens', 
                295, 
                true), 

            new Library.Book(
                'Great Expectations', 
                'Charles Dickens', 
                300,
                false), 
        ]
    };  

    el.innerHTML = `
        <header> 
            <h1> Library </h1> 
            <button> Add Book </button> 
        </header>  
        <div class="books"></div>
    `; 
   

    update(); 

    /* Some message it might want to hear. 
     * - AddBook 
     * - RemoveBook
     */ 

    /* Some messages that it should send. 
     * - ShowForm
     */ 

    el.querySelector('header button').addEventListener('click', function (e) {
        el.dispatchEvent(new CustomEvent('ShowForm', {
            bubbles: true
        })); 
    }); 

    function addBook(bookData) {
        let {title, author, numPages, read} = bookData; 
        let book = {title, author, pages: numPages, read}; 
        state.books.push(book); 
        update(); 
    }

    function update(){
        let booksEl = el.querySelector('.books'); 
        booksEl.innerHTML = ''; 
        state.books.forEach(book => {
            let card = Library.BookCard(document.createElement('div')); 
            card.BookCard.update(book); 
            booksEl.appendChild(card); 
        }); 
    } 

    el.LibraryView = { addBook, update };  
}; 
