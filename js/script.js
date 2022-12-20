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

$(".qi__wrap").click(function () {
  const $this = $(this);
  if (!$this.hasClass('active')) {
    $this.addClass("active");
  } else {
    $this.removeClass('active');
  }
  $this.siblings().removeClass("active");
});

document.addEventListener("click", e => {
  let anchorlink = e.target.closest('a[href^="#"]');

  if (anchorlink) {
    e.preventDefault();
    let hashval = anchorlink.getAttribute('href')
    let target = document.querySelector(hashval)
    const yOffset = +0;
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });

    history.pushState(null, null, hashval)
    e.preventDefault();
  }
})
function removeCls() {
  $('.burger').removeClass('active');
  $('.nav').removeClass('active');
  $('body').removeClass('locked');
}

         
     
