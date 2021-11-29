function openModal(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';
  if (modalTimerId) {
    clearInterval(modalTimerId);
  }
 
  }
  function closeModal(modalSelector){
    const modal = document.querySelector(modalSelector);
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
  }

function modal(triggerSelector, modalSelector,modalTimerId) {
//MODAL!!!
    
const modalTrigger = document.querySelectorAll(triggerSelector),
modal = document.querySelector(modalSelector);





modalTrigger.forEach(item => {
item.addEventListener('click', () => openModal(modalSelector, modalTimerId));
});





modal.addEventListener('click', (e) => {
if(e.target === modal || e.target.getAttribute('data-close') == '') {
  closeModal(modalSelector);
}
});

document.addEventListener('keydown', (e) => {
if (e.code === "Escape" && modal.classList.contains('show')) {
  closeModal(modalSelector);
}
});



//Если верхняя часть прокрутки + элемент на странице = полному размеру страницы, то ...
// console.log(window.pageYOffset);
// console.log(document.documentElement.clientHeight);
// console.log(document.documentElement.scrollHeight);

//{once:true} Использовать только 1 раз 

function showModalByScroll() {
if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {   
  openModal(modalSelector,modalTimerId);
  window.removeEventListener('scroll', showModalByScroll);
}
}
window.addEventListener('scroll', showModalByScroll); 


//  //создание еще одного модального окна( окно успешной отправки)

 





}

export default modal;
export {closeModal};
export {openModal};