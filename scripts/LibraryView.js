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

    el.querySelector('header button').addEventListener('click', function (e) {
        el.dispatchEvent(new CustomEvent('ShowForm', {
            bubbles: true
        })); 
    }); 

    el.addEventListener('ToggleRead', function (e) {
        let books = state.books.map((book, index) => {
            console.log(book); 
            if (index === e.detail.bookIndex) {
                book.toggleRead(); 
                return book; 
            } else {
                return book; 
            } 
        }); 
        update({books}); 
    }); 

    el.addEventListener('RemoveBook', function (e) {
        let books = state.books.filter((book, index) => {
            return index !== e.detail.bookIndex;  
        }); 
        update({books}); 
    }); 

    function addBook(bookData) {
        let {title, author, numPages, read} = bookData; 
        let book = {title, author, pages: numPages, read}; 
        state.books.push(book); 
        update(); 
    }

    function update(next){
        Object.assign(state, next); 
        let booksEl = el.querySelector('.books'); 
        booksEl.innerHTML = ''; 

        if (state.books.length === 0) {
            booksEl.innerHTML = `
                <div class='empty-library-message'>
                    You don't have any books in your library 
                </div>`; 
        } else { 
            state.books.forEach((book, index) => {
                let card = new Library.BookCard(document.createElement('div')); 
                book.index = index;  
                card.BookCard.update(book); 
                booksEl.appendChild(card); 
            }); 
        } 
    } 

    el.LibraryView = { addBook, update };  
}; 
