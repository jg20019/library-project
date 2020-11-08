window.Library = window.Library || {}; 

Library.LibraryTable = function (el) {
    let state = {
        books: []
    };  

    el.innerHTML = `
        <div> This is where the library will go. </div>
    `; 
    
    update(); 

    /* Some message it might want to hear. 
     * - AddBook 
     * - RemoveBook
     */ 

    /* Some messages that it should send. 
     * - ShowForm
     */ 

    function update(){
    } 
}; 

