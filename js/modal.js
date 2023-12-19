export const openModalWindow = function() {
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    const openModal = document.querySelector('.header__btn');
    openModal.addEventListener('click', function() {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}


export const closeModalWindow = function(){
    const modal = document.querySelector(`.modal`);
    const overlay = document.querySelector(`.overlay`);
    const btnClose = document.querySelector(`.close-modal`);
    btnClose.addEventListener(`click`, function(){
        modal.classList.add(`hidden`);
        overlay.classList.add(`hidden`);
    });
}

export const overlayModal = function(){
    const modal = document.querySelector(`.modal`);
    const overlay = document.querySelector(`.overlay`);
    overlay.addEventListener(`click`, function(){
    modal.classList.add(`hidden`);
    overlay.classList.add(`hidden`);
});
}