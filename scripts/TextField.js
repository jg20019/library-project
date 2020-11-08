window.Library = window.Library || {}; 

Library.TextField = function (el) {
    let state = {
        error: '',
        onChange: 'ChangeInput' 
    }; 

    el.innerHTML = 
       `<span class='error'></span> 
        <div class='text-input'> 
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
        el.dispatchEvent(new CustomEvent(state.onChange, {
            bubbles: true, 
            detail: detail
        })); 
    }); 

    function update(next) {
        Object.assign(state, next); 
        el.querySelector('.content-name').innerText = state.label;  
        el.querySelector('input').value = state.value; 
        if (state.error !== '') {
            el.querySelector('.error').innerHTML = `<p> ${state.error} </p>`;
        } else {
            el.querySelector('.error').innerText = state.error;
        } 
    } 

    el.TextField = {update}; 
} 
