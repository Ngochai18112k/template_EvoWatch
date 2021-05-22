const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const openSearch = $('.search');
const closeSearch1 = $('.search__box-close');
const closeSearch2 = $('.search__overlay');

const openModal = $('.product__add');
const closeModal1 = $('.modal__close');
const closeModal2 = $('.modal__overlay');

openSearch.onclick = function () {
    $('#search').classList.add('active');
}
closeSearch1.onclick = function () {
    $('#search').classList.remove('active');
}
closeSearch2.onclick = function () {
    $('#search').classList.remove('active');
}
openModal.onclick = function () {
    $('#modal').classList.add('active');
}
closeModal1.onclick = function () {
    $('#modal').classList.remove('active');
}
closeModal2.onclick = function () {
    $('#modal').classList.remove('active');
}