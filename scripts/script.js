// slider

let sliderControl = document.querySelectorAll('.slider-controls li'),
    sliderContent = document.querySelectorAll('.slider-main'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next');
    
for(let i = 0; i < sliderControl.length; i++){
    sliderControl[i].addEventListener('click', function(){
        for(let k = 0; k < sliderControl.length; k++){
            sliderControl[k].classList.remove('active');
            sliderContent[k].classList.remove('active');
        }
        this.classList.add('active');
        sliderContent[i].classList.add('active');
    })
}

let slideIndex = 1;
function showSlides(n) { 
    if(n<1) slideIndex = sliderContent.length;
    else if(n>sliderContent.length) slideIndex = 1;
    for(let i =0; i<sliderContent.length; i++){
        sliderContent[i].classList.remove('active');
        sliderControl[i].classList.remove('active');
    }
    sliderContent[slideIndex - 1].classList.add('active');
    sliderControl[slideIndex - 1].classList.add('active');
 }
 showSlides(slideIndex);
 function plusSlides(n) { 
     showSlides(slideIndex +=n);
  }
  prev.addEventListener('click', function () { 
      plusSlides(-1);
   })
  next.addEventListener('click', function () { 
    plusSlides(1);
   })

//    burger menu
let headerList = document.querySelector('.header-nav__bottom-list');
let burgerMenu = document.querySelector('.burger-menu');
burgerMenu.addEventListener('click', (event)=>{
    event.preventDefault();
    headerList.classList.toggle('fading');
})
document.addEventListener('click', function(event){
    if(!event.target.closest('.header-nav__bottom-list') && !event.target.closest('.burger-menu')){
        headerList.classList.remove('fading');
    }
})

//tabs
let sectionAssortiment = document.querySelectorAll('.section-assortiment'),
    sectionAssortimentControls = document.querySelectorAll('.main-nav-links ul li a');
for(let i = 0; i < sectionAssortimentControls.length; i++){
    sectionAssortimentControls[i].addEventListener('click', function(event){
        event.preventDefault();
        for(let j = 0; j < sectionAssortimentControls.length; j++){
            sectionAssortimentControls[j].classList.remove('active');
            sectionAssortiment[j].classList.remove('active');
        }
        this.classList.add('active');
        sectionAssortiment[i].classList.add('active');
    })
}
