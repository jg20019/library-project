window.Library = window.Library || {}; 

Library.LibraryView = function (el) {
    let state = {
        books: [
            { title: 'A Tale of Two Cities', 
              author: 'Charles Dickens', 
              pages: 295, 
              read: true
            },
            { title: 'Great Expectations', 
              author: 'Charles Dickens', 
              pages: 300, 
              read: false
            }, 
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

