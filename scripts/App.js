window.Library = window.Library || {}; 

Library.App = function (el) {
    el.innerHTML = `
       <div></div>
       <button> Add Book </button> 
    `; 

    const addButton = el.querySelector('button'); 

    addButton.addEventListener('click', function (e) {
        console.log('Button Clicked'); 
        addButton.dispatchEvent(new CustomEvent('ShowForm', {
            bubbles: true
        })); 
    }); 

    const form = el.querySelector('div'); 
    Library.AddBookForm(el.querySelector('div'))

    el.addEventListener('HideForm', function (e) {
        form.AddBookForm.update({visible: false}); 
    }); 

    el.addEventListener('ShowForm', function (e) {
        form.AddBookForm.update({visible: true}); 
    }); 
};  

Library.App(document.querySelector('#root')); 
