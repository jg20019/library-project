window.Library = window.Library || {}; 

Library.LibraryTable = function (el) {
    let state = {
        books: [
            { title: 'A Tale of Two Cities.', 
              author: 'Charles Dickens', 
              pages: 295, 
              read: true
            }, 
        ]
    };  

    el.innerHTML = `
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

    function update(){
        let booksEl = el.querySelector('.books'); 
        booksEl.innerHTML = ''; 
        state.books.forEach(book => {
            let card = Library.BookCard(document.createElement('div')); 
            card.BookCard.update(book); 
            booksEl.appendChild(card); 
        }); 
    } 
}; 

Library.BookCard = function (el) {
    let state = {
        title: 'title', 
        author: 'author', 
        pages: '1', 
        read: true
    } 

    el.innerHTML = `
        <div class="book-card"> 
          <span class="title"></span> 
          <span class="author"></span> 
          <span class="pages"></span> 
          <span class="read"></span> 
        </div> 
    `; 

    let titleEl = el.querySelector('.title'); 
    let authorEl = el.querySelector('.author'); 
    let pagesEl = el.querySelector('.pages'); 
    let readEl = el.querySelector('.read'); 

    el.BookCard = { update } 

    return el; 

    function update(next){
        Object.assign(state, next); 

        titleEl.innerText = state.title; 
        authorEl.innerText = state.author; 
        pagesEl.innerText = state.pages; 
        readEl.innerText = state.read ? 'You have read this book' : 'You have not read this book'; 
    }
} 
