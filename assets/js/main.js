let $ = (selector) => document.querySelector(selector);
let _ = (selector) => document.querySelectorAll(selector);

let dropdowns = _('.dropdown-content')

let activateDropdown = () => {

    if (dropdowns) {
        dropdowns.forEach(dropdown => {
            dropdown.parentElement.addEventListener('click', () => {
                if (dropdown.parentElement.dataset.toggled == 'false') {
                    dropdown.parentElement.dataset.toggled = 'true';
                    dropdown.classList.add('toggled');
                }
                else {
                    dropdown.parentElement.dataset.toggled = 'false';
                    dropdown.classList.remove('toggled');
                }
            });
        });
    }

}

activateDropdown();