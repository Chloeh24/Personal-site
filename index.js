var slides = document.querySelectorAll('.slide')
var next = document.querySelector('#next')
var prev = document.querySelector('#prev')

var auto = false;
var intervalTime = 5000;
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
        slides[slide.length-1].classList.add('current');
    }
};

//buttons

next.addEventListener('click', function() {
    nextSlide();
});

prev.addEventListener('click', function() {
    prevSlide();
});