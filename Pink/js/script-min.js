var toggle=document.querySelector(".main-nav__toggle"),menu=document.querySelector(".main-nav__menu"),nav=document.querySelector(".main-nav");toggle.addEventListener("click",function(e){e.preventDefault(),menu.classList.toggle("main-nav__menu--closed"),nav.classList.toggle("main-nav--closed")});