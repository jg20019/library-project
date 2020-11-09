window.Library = window.Library  || {}; 

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
          by <span class="author"></span> 
          <span class="pages"></span> pages 
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
