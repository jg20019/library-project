window.Library = window.Library || {}; 

Library.Checkbox =  function (el) {
    state = {
        label: 'label text', 
        onClick: 'CheckboxClicked'
    };  

    el = el;
    el.innerHTML = `
        <div class="checkbox"> 
           <label></label> 
           <input type="checkbox" /> 
        </div> 
    `; 
     
    checkbox = el.querySelector('input[type="checkbox"]'); 
    checkbox.addEventListener('click', e => {
            Library.Events.dispatchEvent(el, state.onClick); 
    }); 
    
    el.Checkbox = {update} ; 

    function update(next) {
        Object.assign(state, next); 
        el.querySelector('label').innerText = state.label; 
    } 

    return el; 
} 
