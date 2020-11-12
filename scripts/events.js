window.Library = window.Library || {}; 

Library.Events = {
    dispatchEvent: (el, name, detail) => {
        el.dispatchEvent(new CustomEvent(name, {
            bubbles: true, 
            detail: detail, 
        })); 
    }, 
}; 
