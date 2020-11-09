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

