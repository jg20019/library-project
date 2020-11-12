window.Library = window.Library || {}; 

class Checkbox {
    constructor(el) {
        this.state = {
            label: 'label text', 
            onClick: 'CheckboxClicked'
        };  

        this.el = el;
        this.el.innerHTML = `
            <div class="checkbox"> 
               <label></label> 
               <input type="checkbox" /> 
            </div> 
        `; 

        this.checkbox = this.el.querySelector('input[type="checkbox"]'); 
        this.checkbox.addEventListener('click', e => {
            Library.Events.dispatchEvent(this.el, this.state.onClick); 
        }); 

        this.el.Checkbox = this; 
        return this.el;
    } 

    update(next) {
        Object.assign(this.state, next); 
        this.el.querySelector('label').innerText = this.state.label; 
    } 
} 

Library.Checkbox = Checkbox; 
