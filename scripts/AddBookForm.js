window.Library = window.Library || {}; 


Library.AddBookForm = function (el) {
    let state = {
        title: "",
        titleError: "", 
        author: "", 
        authorError: "",
        pages: "", 
        pagesError: "", 
        read: false,
    }; 

    el.innerHTML = 
        `<div class="form">
          <div class="close-button">+</div> 
          <div class="title"></div>
          <div class="author"></div>
          <div class="pages"></div> 
          <div class="read"></div> 
          <input type="submit" value="Add Book">
        </div>`; 

    const titleField = el.querySelector('.title'); 
    Library.TextField(titleField); 

    const authorField = el.querySelector('.author'); 
    Library.TextField(authorField); 

    const pagesField = el.querySelector('.pages'); 
    Library.TextField(pagesField); 

    const readField = el.querySelector('.read'); 
    Library.Checkbox(readField); 
    readField.Checkbox.update({for: 'read'})

    el.addEventListener('ChangeInput', function (e) {
        if (e.detail.for === 'title') {
            update({title: e.detail.value, titleError: ""}); 
        } else if (e.detail.for === 'author') {
            update({author: e.detail.value, authorError: ""}); 
        } else if (e.detail.for === 'pages') {
            update({pages: e.detail.value, pagesError: ""}) 
        } else if (e.detail.for === 'read') {
            update({read: !state.read})
        } 
    }); 

    el.querySelector('input[type="submit"]').addEventListener('click', e => {
        addBook(); 
    });

    update(); 


    function update(next){
        Object.assign(state, next); 

        titleField.TextField.update({
            label: 'title', 
            value: state.title, 
            error: state.titleError, 
        }); 

        authorField.TextField.update({
            label: 'author',
            value: state.author, 
            error: state.authorError, 
        }); 

        pagesField.TextField.update({
            label: 'pages', 
            value: state.pages, 
            error: state.pagesError, 
        }); 

        readField.Checkbox.update({
            label: 'Have you read this book?'
        }) 

        console.log(state); 
    }

    function addBook() {
       /* Validates the form. If form is valid, adds a book to 
        * the library. If form is invalid, sets and displays appropriate
        * error messages. 
        */ 

       let valid = true; 

       let title; 
       if (Library.Utils.isBlank(state.title)) {
           state.titleError = "title is blank"
           valid = false;
       } else {
           title = state.title.trim(); 
       } 

       let author; 
       if (Library.Utils.isBlank(state.author)) {
           state.authorError = "author is blank"
           valid = false;
       } else {
           author = state.author.trim(); 
       } 

       let pages; 
       if (Library.Utils.isBlank(state.pages)) {
           state.pagesError = "pages is blank"
           valid = false; 
       } else {
           pages = parseInt(state.pages)
           if (isNaN(pages)) {
               state.pagesError = "number of pages should be a number."; 
               valid = false; 
           } else if (pages <= 0) {
               state.pagesError = "number of pages should be greater than 0"; 
               valid = false;
           } 
       } 

       let read = state.read; 

       if (valid) {
           console.log('Book is valid'); 
           console.log({title, author, pages, read}) 
       }  else {
           console.log('There were errors. Try again.')
       } 

       update(); 
    } 
}

Library.AddBookForm(document.querySelector('#form')); 
