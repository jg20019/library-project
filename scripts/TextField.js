window.Library = window.Library || {}; 

Library.TextField = function (el) {
    let state = {}; 

    el.innerHTML = 
       `<div class='text-input'> 
          <input type="text" autocomplete="off" required />
          <label class="label-name"> 
            <span class="content-name"></span> 
          </label>
        </div>`; 

    const input = el.querySelector('input'); 
    input.addEventListener('input', function (e) {
        let detail = {
            for: state.label, 
            value: e.target.value
        }; 
        el.dispatchEvent(new CustomEvent('ChangeInput', {
            bubbles: true, 
            detail: detail
        })); 
    }); 

    function update(next) {
        Object.assign(state, next); 
        el.querySelector('.content-name').innerText = state.label;  
        el.querySelector('input').value = state.value; 
    } 

    el.TextField = {update}; 
} 
