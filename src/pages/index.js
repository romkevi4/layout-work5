import './index.css';

const popup = document.querySelector('#popup');
const createNewShop = document.querySelector('#createNewShop');
const closePopup = document.querySelector('#closePopup');

createNewShop.addEventListener('click', () => {
    popup.classList.remove('d-none');
    popup.classList.add('d-flex');
});

closePopup.addEventListener('click', () => {
    popup.classList.remove('d-flex');
    popup.classList.add('d-none');
});