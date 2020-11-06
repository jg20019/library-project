window.Library = window.Library || {}; 

Library.Checkbox = function (el) {
    let state = {
        for: 'checkbox', 
        label: 'label text', 
    }; 

    el.innerHTML = `
      <div class="checkbox"> 
        <label></label> 
        <input type="checkbox" /> 
      </div> 
    `; 

    let checkbox = el.querySelector('input[type="checkbox"]'); 
    checkbox.addEventListener('click', function (e) {
        el.dispatchEvent(new CustomEvent('ChangeInput', {
            bubbles: true, 
            detail: {for: state.for}
        })); 
    }); 

    update(); 

    function update(next) {
        Object.assign(state, next); 

        el.querySelector('label').innerText = state.label; 
    } 

    el.Checkbox = { update }; 
}; 
