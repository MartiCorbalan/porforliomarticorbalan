/*(function(){
    const listElements = document.querySelectorAll('.menu_item--show');
    const list = document.querySelector('.menu_links');
    const menu = document.querySelector('.menu_hamburguer');
  
    const addClick = ()=>{
      listElements.forEach(element => {
        element.addEventListener('click', ()=>{
          let subMenu = element.children[1];
          element.classList.toggle('menu_item--active');
  
  
        });
      });
    }
    const deleteStyleHeigth = ()=>{
      listElements.forEach(element=>{
        if(element.children[1].getAttribute('style')){
          element.children[1].removeAttribute('style');
          element.classList.remove('menu_item--active');
        }
      })
    }
  
    window.addEventListener('resize', ()=>{
      if(window.innerHeight > 800){
        deleteStyleHeigth();
      }else{
        addClick();
      }
    });
    if(window.innerHeight <= 800){
      addClick();
    }
  
    menu.addEventListener('click', ()=> list.classList.toggle('menu_links--show'));
  
  })();*/