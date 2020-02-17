// let modal;
let modalBtn = _('.modal-button');

let modalContent = $('#myModal #content');


modalBtn.forEach(btn => {
    let id = btn.dataset.target;
    let modal = $('#' + id);

    btn.addEventListener('click', () => {
        modal.style.display = "flex";
    });

    modal.querySelector('.close').onclick = () => {
        modal.style.display = "none";
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

});