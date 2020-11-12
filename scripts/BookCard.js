window.Library = window.Library  || {}; 

Library.BookCard = function (el) {
    let state = {
        index: 0, 
        title: 'title', 
        author: 'author', 
        pages: '1', 
        read: true
    } 

    el.innerHTML = `
        <div class="book-card"> 
          <span class="title"></span> by <span class="author"></span> 
          <span class="pages"></span> pages 
          <span class="read"></span> 
          <span class="close-button">+</span> 
          <span class="toggle-read">
            <span class="toggle-message"></span> 
            <input type="checkbox"> 
          </span> 
        </div> 
    `; 

    let titleEl = el.querySelector('.title'); 
    let authorEl = el.querySelector('.author'); 
    let pagesEl = el.querySelector('.pages'); 
    let readEl = el.querySelector('.read'); 
    let toggleMessage = el.querySelector('.toggle-message'); 

    let checkbox = el.querySelector('input[type="checkbox"]'); 

    el.querySelector('.close-button').addEventListener('click', function (e) {
        el.dispatchEvent(new CustomEvent('RemoveBook', {
            bubbles: true,
            detail: { bookIndex: state.index }, 
        })); 
    }); 

    checkbox.addEventListener('click', function (e) {
        el.dispatchEvent(new CustomEvent('ToggleRead', {
            bubbles: true, 
            detail: { bookIndex: state.index }, 
        })) 
    }); 

    el.BookCard = { update } 

    return el; 

    function update(next){
        Object.assign(state, next); 
        titleEl.innerText = state.title; 
        authorEl.innerText = state.author; 
        pagesEl.innerText = state.pages; 
        readEl.innerText = state.read ? 'You have read this book' : 'You have not read this book'; 

        toggleMessage.innerText = state.read ? "I haven't read this book." : "I have read this book"; 
    }
} 
