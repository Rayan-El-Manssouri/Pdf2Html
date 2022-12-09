var loader = document.querySelector('.loader');
var chargement = document.querySelector('.chargement');
document.body.style.overflow = "hidden";
window.addEventListener('load', () => {
    loader.classList.add('test')
    chargement.classList.add('test')
    document.body.style.overflow = "auto";
})