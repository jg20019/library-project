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
        
        visible: true, 
    }; 

    el.innerHTML = 
        `<div class="bg-modal">  
          <div class="form-modal"> 
            <h1> Add Book </h1>
            <div class="form">
                  <div class="close-button">+</div> 
                  <div class="title"></div>
                  <div class="author"></div>
                  <div class="pages"></div>
                  <div class="read"></div> 
                  <input type="submit" value="Add Book">
            </div> 
          </div> 
         </div>`; 

    const modal = el.querySelector('.bg-modal'); 

    const titleField = el.querySelector('.title'); 
    Library.TextField(titleField); 
    titleField.TextField.update({onChange: 'TitleChanged'}); 
    el.addEventListener('TitleChanged', function (e) {
        update({title: e.detail.value, titleError: ""});
    }); 

    const authorField = el.querySelector('.author'); 
    Library.TextField(authorField); 
    authorField.TextField.update({onChange: 'AuthorChanged'}) 
    el.addEventListener('AuthorChanged', function (e) {
        update({author: e.detail.value, authorError: ""}); 
    }); 

    const pagesField = el.querySelector('.pages'); 
    Library.TextField(pagesField); 
    pagesField.TextField.update({onChange: 'PagesChanged'}) 
    el.addEventListener('PagesChanged', function (e) {
        update({pages: e.detail.value, pagesError: ""}); 
    }); 

    const readField = el.querySelector('.read'); 
    Library.Checkbox(readField); 
    readField.Checkbox.update({onClick: 'ToggleRead'}) 
    el.addEventListener('ToggleRead', function (e) {
        update({read: !state.read}) 
    });

    readField.Checkbox.update({for: 'read'})


    el.querySelector('input[type="submit"]').addEventListener('click', e => {
        submit(); 
    });

    el.querySelector('.close-button').addEventListener('click', e => {
        el.dispatchEvent(new CustomEvent('HideForm', {
            bubbles: true 
        })); 
    }); 
    update(); 

    el.AddBookForm = { update } 


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

        if (state.visible) {
            showModal(); 
        } else {
            hideModal(); 
        } 
    }

    function hideModal(){
        modal.style.display = 'none'; 
    } 

    function showModal(){
        modal.style.display = 'flex'; 
    } 


    function validateTitle(title) {
        if (Library.Utils.isBlank(title)) {
            return ['', 'title is blank']; 
        } else {
            return [title.trim(), ''];  
        } 
    } 

    function validateAuthor(author) {
        if (Library.Utils.isBlank(author)) {
           return ['', 'author is blank']; 
        } else {
            return [author.trim(), '']; 
        } 
    } 

    function validatePages(pages) {
       if (Library.Utils.isBlank(pages)) {
           return ['', 'pages is blank']; 
       } else {
           numPages = parseInt(pages)
           if (isNaN(numPages)) {
               return ['', 'number of pages should be a number.']; 
           } else if (numPages <= 0) {
               return ['', 'number of pages should be greater than 0']; 
           } else {
               return [numPages, '']; 
           } 
       } 
    } 

    function validateBook(titleField, authorField, pagesField, readField) {

       let title, titleError; 
       [title, titleError] = validateTitle(titleField);  

       let author, authorError; 
       [author, authorError] = validateAuthor(authorField); 

       let numPages, pagesError; 
       [numPages, pagesError] = validatePages(pagesField); 

       let read = readField; 

       let valid = !(titleError || authorError || pagesError); 
       let errors = {titleError, authorError, pagesError}; 

       let bookData = {title, author, numPages, read} 
       return [bookData, valid, errors]; 
    } 

    function addBook(bookData) {
        el.dispatchEvent(new CustomEvent('AddBook', {
            bubbles: true, 
            detail: {bookData}, 
        })); 
    } 

    function clearFields() {
        update({title: "", author: "", pages: "", read: false}); 
    } 

    function showErrors(errors) {
        update(errors); 
    } 

    function submit() {
       let bookData, valid, errors; 
       [bookData, valid, errors] = validateBook(state.title, state.author, state.pages, state.read); 

       if (valid) {
           addBook(bookData);  
           clearFields(); 
       }  else {
           showErrors(errors); 
       } 
    } 
}
