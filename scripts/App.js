window.Library = window.Library || {}; 


Library.App = function (el) {
    let state = {
        title: "",
        author: "", 
        pages: "", 
    }; 

    el.innerHTML = 
        `<div class="form">
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
    el.addEventListener('ChangeInput', function (e) {
        if (e.detail.for === 'title') {
            update({title: e.detail.value}); 
        } else if (e.detail.for === 'author') {
            update({author: e.detail.value}); 
        } else if (e.detail.for === 'pages') {
            update({pages: e.detail.value}) 
        } 
    }); 

    update(); 


    function update(next){
        Object.assign(state, next); 

        titleField.TextField.update({label: 'title', value: state.title}); 
        authorField.TextField.update({label: 'author', value: state.author}); 
        pagesField.TextField.update({label: 'pages', value: state.pages}); 
        console.log(state); 
    }
};

Library.App(document.querySelector('#root')); 
