function tabs (headerSelector, tabSelector, contentSelector, activeClass)  {

    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);
     let  init = true;
     let  currentItem = 0;   

        header.addEventListener('click', (e) => {
            e.stopImmediatePropagation();

            const target = e.target;            
            if (target &&
                (target.classList.contains(tabSelector.replace(/\./, "")) || 
                    target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {

                    tab.forEach((item, i) => {
                        if (target == item || target.parentNode == item) {  
                         
                          hideTabContent(init, currentItem);
                       //  showTabContent(init, i);
                            currentItem = i;

                           setTimeout(() => {   
                             showTabContent(init, i);
                             currentItem = i;
                           }, 400); 
                        }
                        init = false;
                });
            }
        });

function hideTabContent(init, currentItem) {

    if (!init) {
        fadeOut (content[currentItem], 400);
    }
    tab.forEach(item => {
        item.classList.remove(activeClass);
    });
}

function showTabContent(init, i = 0) {
    if (!init) {
        fadeIn (content[i], 400);
    } else content[i].style.display = 'flex';

    tab[i].classList.add(activeClass);
}

function fadeOut (el, timeout)  {
    el.style.opacity = 1;      
    el.style.transition = `opacity ${timeout}ms ease-in-out`; 
    el.style.opacity = 0;

    //  el.addEventListener('transitionend', () => {
    //      el.style.display = 'none';
    //  });

      setTimeout(() => {   
         el.style.display = 'none';
      }, timeout);
    
  };

  function fadeIn (el, timeout)  {
    
    el.style.display = 'flex';
    el.style.opacity = 0;   
    el.style.transition = `opacity ${timeout}ms ease-in-out`; 
    console.log(el);

    // el.addEventListener('transitionend', () => {
    //     console.log(el);
    //     el.style.opacity = 1
    // });
      setTimeout(() => {
         el.style.opacity = 1;
      }, timeout);
  };

hideTabContent(init);
showTabContent(init);

}

document.addEventListener('DOMContentLoaded', () => {
    tabs('.radiobutton-section ', '.label', '.book-section', 'active-tab');
});
