import {closeModal, openModal} from './modal.js';
import {postData} from '../services/service.js';


function forms(formSelector, modalTimerId){
    // Отпрввление данных на сервер FORMS

    const forms = document.querySelectorAll(formSelector);
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо, скоро с вами свяжемся',
        failure: 'Что то пошло не так...'
    };

    forms.forEach(item => {
        bindpostData(item);
    });


    

    function bindpostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessege = document.createElement('img');        // !!!
            statusMessege.src = message.loading;                        // !!!
            statusMessege.style.cssText = `
                display: block;
                margin: 0 auto;
            `;                // !!!
            //form.append(statusMessege);
            form.insertAdjacentElement('afterend', statusMessege);                                 // !!!

            
            const formData = new FormData(form);
            const object = {};
            formData.forEach(function(value, i){
                object[i] = value;
            });
//Смотря в каком виде надо получить данные от старницы(JSON/formData) (урок 56) 
            
            postData('http://localhost:3000/requests', JSON.stringify(object))
            .then(data => { //Если успешно, можно использовать много раз
                    console.log(data);
                     showTYModal(message.success);
                     
                     statusMessege.remove();
            }).catch(() => { //если есть ошибка, то выполняется этот блок
                showTYModal(message.failure);
            }).finally(() => { //Выполняется всегда последним
                form.reset();
            });


            

        });
    }

    function showTYModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
      
        prevModalDialog.classList.add('hide');
        openModal('.modal', modalTimerId);
      
        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>&times;</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
      
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal('.modal');
        }, 4000);
    }
}
export default forms;