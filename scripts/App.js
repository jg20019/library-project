window.Library = window.Library || {}; 

Library.App = function (el) {
    el.innerHTML = `
       <div id="libraryView"></div> 
       <div id="form"></div>
    `; 

    const libraryView = el.querySelector('#libraryView'); 
    Library.LibraryView(libraryView); 
    
    const form = el.querySelector('#form'); 
    Library.AddBookForm(form);  

    el.addEventListener('HideForm', function (e) {
        form.AddBookForm.update({visible: false}); 
    }); 

    el.addEventListener('ShowForm', function (e) {
        form.AddBookForm.update({visible: true}); 
    }); 

    el.addEventListener('AddBook', function (e) {
        libraryView.LibraryView.addBook(e.detail.bookData); 
    }); 
};  

Library.App(document.querySelector('#root'));
