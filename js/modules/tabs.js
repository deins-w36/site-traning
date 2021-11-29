function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass){
    //TABS!!!!!!!!!!!!!!!!
 const tabs = document.querySelectorAll(tabsSelector),
       tabsContent = document.querySelectorAll(tabsContentSelector),
       tabsParent = document.querySelector(tabsParentSelector);

        
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');

            tabs.forEach(item => {
                item.classList.remove(activeClass);
            });
        });
    }

    function showTabContent(index = 0) {  //Если вызывать функцию без аргументов, то нач знач index = число    
        tabsContent[index].classList.add('show', 'fade');
        tabsContent[index].classList.remove('hide');
        tabs[index].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent(); 

    tabsParent.addEventListener('click', e => {
        if (e.target && e.target.classList.contains(tabsSelector.slice(1))) {
            e.preventDefault();
            
            tabs.forEach((item, i) => {
                if (e.target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

export default tabs;