window.Library = window.Library || {}; 

Library.App = function (el) {
    el.innerHTML = `
       <div id="libraryTable"></div> 
       <div id="form"></div>
    `; 

    const libraryTable = el.querySelector('#libraryTable'); 
    Library.LibraryTable(libraryTable); 
    
    const form = el.querySelector('#form'); 
    Library.AddBookForm(form);  

    el.addEventListener('HideForm', function (e) {
        form.AddBookForm.update({visible: false}); 
    }); 

    el.addEventListener('ShowForm', function (e) {
        form.AddBookForm.update({visible: true}); 
    }); 
};  

// Library.App(document.querySelector('#root'));
Library.LibraryView(document.querySelector('#root')); 
