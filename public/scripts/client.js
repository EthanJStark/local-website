$(function(){
  $('.carousel > .carousel-arrow').on('click', function(event){
    event.preventDefault()

    var arrayPictures = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg']

    var arrow = $(this)
    if( arrow.is('.carousel-arrow-left')){
      slideLeft()
    }

    if( arrow.is('.carousel-arrow-right')){
      slideRight()
    }
  })

  var slideLeft = function(){
    $('.carousel > .carousel-showing').removeClass('carousel-showing')
  }
})

$(document).ready(function() {
  $('.burger').click(function() {
    $('.nav-dropdown').slideToggle('fast')
  })
})


// const carousel = () => {
//   const  x = document.getElementsByClassName("mySlides");
//   for (index = 0; index < x.length; index++) {
//     x[index].style.display = "none";
//   }
//   myIndex++;
//   if (myIndex > x.length) {
//     myIndex = 1
//   }
//   x[myIndex - 1].style.display = "block";
//   setTimeout(carousel, 2000); // Change image every 2 seconds
// }
