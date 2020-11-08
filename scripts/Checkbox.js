window.Library = window.Library || {}; 

Library.Checkbox = function (el) {
    let state = {
        label: 'label text', 
        onClick: 'CheckboxClicked'
    }; 

    el.innerHTML = `
      <div class="checkbox"> 
        <label></label> 
        <input type="checkbox" /> 
      </div> 
    `; 

    let checkbox = el.querySelector('input[type="checkbox"]'); 
    checkbox.addEventListener('click', function (e) {
        el.dispatchEvent(new CustomEvent(state.onClick, {
            bubbles: true, 
        })); 
    }); 

    update(); 

    function update(next) {
        Object.assign(state, next); 

        el.querySelector('label').innerText = state.label; 
    } 

    el.Checkbox = { update }; 
}; 
