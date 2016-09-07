const slideIndex = 0;
showSlides();

const showSlides = () => {
    const i;
    const slides = document.getElementsByClassName("mySlides");
    	for (index = 0; index < slides.length; index++) {
        slides[index].style.display = "none"; 
    } slideIndex++;
    	if (slideIndex> slides.length) {slideIndex = 1} 
    	slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}