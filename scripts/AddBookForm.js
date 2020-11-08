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
    console.log('Pages changed')
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
        addBook(); 
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
        console.log(state); 
    }

    function hideModal(){
        modal.style.display = 'none'; 
    } 

    function showModal(){
        modal.style.display = 'flex'; 
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
