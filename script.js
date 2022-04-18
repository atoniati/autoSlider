let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    
    // Setting display as none for the divs mySlides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
 
    // When finished to show all the images, return to first one
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    // Removing active classname from divs dot
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
