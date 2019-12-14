var slides = document.querySelectorAll('.slide')
var next = document.querySelector('#next')
var prev = document.querySelector('#prev')

var auto = true;
var slideInterval;

//show next

function nextSlide() {
    var current = document.querySelector('.current');
    current.classList.remove('current');

    if(current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    } else {
        slides[0].classList.add('current');
    }

};

//show prev;

function prevSlide() {
    var current = document.querySelector('.current');
    current.classList.remove('current');

    if(current.previousElementSibling) {
        current.previousElementSibling.classList.add('current');
    } else {
        slides[slides.length-1].classList.add('current');
    }
};

//buttons

next.addEventListener('click', function() {
    nextSlide();

    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000)
    }

});

prev.addEventListener('click', function() {
    prevSlide();

    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000)
    }
});

if(auto){
    slideInterval = setInterval(nextSlide, 5000)
}