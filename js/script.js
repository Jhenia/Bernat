 //Header burger     
      let header__burger = document.querySelector('.burger');
        let header_menu = document.querySelector('.header__menu');
        let back = document.querySelector('body');


        header__burger.onclick = function(){
            header__burger.classList.toggle('active');
            header_menu.classList.toggle('active');
            back.classList.toggle('locked');
        }
//Header burger   
$(".qi__container .qi__wrap").click(function () {
  const $this = $(this);
  if (!$this.hasClass('active')) {
    $this.addClass("active");
  } else {
    $this.removeClass('active');
  }
  $this.siblings().removeClass("active");
});


         
     
