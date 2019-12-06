var container = document.querySelector('.slide-container');
var slides = Array.from(container.children);
var prevButton = document.querySelector('.left');
var nextButton = document.querySelector('.right');
var dotsNav = document.querySelector('.slider-nav');
var dots = Array.from(dotsNav.children);

var slideWidth = slides[0].getBoundingClientRect().width;

//slide position
slides.forEach(function(slide, index) {
    slide.style.left = slideWidth*index + 'px';
})

//Show prev
nextButton.addEventListener(function('click', e) {
    var currentSlide = container.querySelector('.current-slide');
    var nextSlide = currentSlide.nextElementSibling;
    var slideDistance = nextSlide.style.left;

    container.style.left = 'translateX(-' + slideDistance + ')';

    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide');
})





//show next