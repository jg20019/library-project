window.Library = window.Library  || {}; 

Library.BookCard = function (el) {
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

    const titleEl = el.querySelector('.title'); 
    const authorEl = el.querySelector('.author'); 
    const pagesEl = el.querySelector('.pages'); 
    const readEl = el.querySelector('.read'); 
    const toggleMessage = el.querySelector('.toggle-message'); 
    const checkbox = el.querySelector('input[type="checkbox"]'); 

    const state = {
        index: 0, 
        title: 'title', 
        author: 'author', 
        pages: '1', 
        read: true, 
    }; 

    el.querySelector('.close-button').addEventListener('click', e => {
        Library.Events.dispatchEvent(el, 'RemoveBook', {bookIndex: state.index}); 
    }); 

    checkbox.addEventListener('click', e => {
        Library.Events.dispatchEvent(el, 'ToggleRead', {bookIndex: state.index});
    }); 

    el.BookCard = { update }; 
    return el; 

    function update(next) {
        Object.assign(state, next); 

        let {title, author, pages, read } = state; 
        titleEl.innerText = title; 
        authorEl.innerText = author; 
        pagesEl.innerText = pages; 
        readEl.innerText = read ? 'You have read this book' : 'You have not read this book'; 
        toggleMessage.innerText = read ? "I haven't read this book." : "I have read this book"; 
    } 
}; 
