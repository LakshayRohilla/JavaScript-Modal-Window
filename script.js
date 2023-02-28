'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
console.log(btnShowModal);

for (let i = 0; i < btnShowModal.length; i++)
    btnShowModal[i].addEventListener('click', function () {
        // Open the modal window.
        modal.classList.remove('hidden','secondClass');
        overlay.classList.remove('hidden');
    });

    // Close the modal window.
    const closeModal = function () {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }

    btnCloseModal.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

// Close the modal using ESC button.
document.addEventListener('keypress', function (e) {
    console.log(e.key);

    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});