let $ = (selector) => document.querySelector(selector);
let _ = (selector) => document.querySelectorAll(selector);
let c = (element) => document.createElement(element);

let xmenus = _('.xmenu-content');
let activexmenu = _('.xmenu.active');

let activatexmenu = () => {

    if (xmenus) {
        xmenus.forEach(xmenu => {
            xmenu.parentElement.addEventListener('click', () => {
                if (xmenu.parentElement.dataset.toggled == 'true') {
                    xmenu.parentElement.dataset.toggled = 'false';
                    xmenu.classList.remove('toggled');
                }
                else {
                    xmenu.parentElement.dataset.toggled = 'true';
                    xmenu.classList.add('toggled');
                }
            })
        })
    }

}


activatexmenu();
activexmenu[0].click();

let inputControls = _('.input-control input');

inputControls.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focus');
        input.parentElement.setAttribute('data-toggled', 'true');
    });
    input.addEventListener('blur', () => {
        if (input.value == '') {
            input.parentElement.classList.remove('focus');
            input.parentElement.removeAttribute('data-toggled', 'true');
        }
        else {
            input.parentElement.classList.remove('focus');
            input.parentElement.setAttribute('data-toggled', 'true');
        }
    });
});
