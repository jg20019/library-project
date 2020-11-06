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
}; 
