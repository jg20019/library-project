window.Library = window.Library  || {}; 

class BookCard {
    constructor(el) {
        this.el = el; 
        this.el.innerHTML = `
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

        this.titleEl = el.querySelector('.title'); 
        this.authorEl = el.querySelector('.author'); 
        this.pagesEl = el.querySelector('.pages'); 
        this.readEl = el.querySelector('.read'); 
        this.toggleMessage = el.querySelector('.toggle-message'); 
        this.checkbox = el.querySelector('input[type="checkbox"]'); 

        this.state = {
            index: 0, 
            title: 'title', 
            author: 'author', 
            pages: '1', 
            read: true, 
        }; 
    
        this.el.querySelector('.close-button').addEventListener('click', e => {
            this.el.dispatchEvent(new CustomEvent('RemoveBook', {
                bubbles: true,
                detail: { bookIndex: this.state.index }, 
            })); 
        }); 

        this.checkbox.addEventListener('click', e => {
            this.el.dispatchEvent(new CustomEvent('ToggleRead', {
                bubbles: true, 
                detail: { bookIndex: this.state.index }, 
            })) 
        }); 

        this.el.BookCard = this;  
        return el; 
    } 

    update(next) {
        Object.assign(this.state, next); 

        let {title, author, pages, read } = this.state; 
        this.titleEl.innerText = title; 
        this.authorEl.innerText = author; 
        this.pagesEl.innerText = pages; 
        this.readEl.innerText = read ? 'You have read this book' : 'You have not read this book'; 
        this.toggleMessage.innerText = read ? "I haven't read this book." : "I have read this book"; 
    } 
} 

Library.BookCard = BookCard; 
