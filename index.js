var slides = document.getElementsByClassName('slide');

var slideIndex = 1;

showSlides(slideIndex);

//Show  next/previous 

function changeSlide(n) {
    showSlides(slideIndex += n);
};


//show slide

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
     } 
     if (n < 1) {
         slideIndex = slides.length;
     }

     for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = 'block';

};
