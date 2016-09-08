$(function(){
  var numberOfImages = $('.carousel .carousel-image').length;

  $('.carousel .carousel-image:first-child').addClass('carousel-center-stage')
  $('.carousel .carousel-dot:first-child').addClass('active')

  $('.carousel > .carousel-dots > .carousel-dot').on('click', function(event){
    event.preventDefault();
    var dot = $(this);
    var index = dot.index();
    scrollToImage(index)
  });

  $('.carousel > .carousel-arrow').on('click', function(event){
    event.preventDefault()

    var arrow = $(this)
    if( arrow.is('.carousel-arrow-left')){
      slideLeft()
    }

    if( arrow.is('.carousel-arrow-right')){
      slideRight()
    }
  })

  var slideTimeout=0;


  var scrollToImage = function(imageIndex, slideRight){
    var currentImage = $('.carousel > .carousel-center-stage')
    var nextImage = $('.carousel > .carousel-image:nth-child('+(imageIndex+1)+')')
    if (currentImage.index() === nextImage.index()) return;

    var dot = $('.carousel > .carousel-dots > .carousel-dot:nth-child('+(imageIndex+1)+')')
    dot.addClass('active').siblings().removeClass('active')
    nextImage
      .removeClass('carousel-image-animated')
      .removeClass('carousel-center-stage')
      .removeClass(slideRight ? 'carousel-stage-right' : 'carousel-stage-left')
      .addClass(slideRight ? 'carousel-stage-left' : 'carousel-stage-right')

    slideTimeout = setTimeout(function(){
      currentImage
        .addClass('carousel-image-animated')
        .removeClass('carousel-center-stage')
        .removeClass(slideRight ? 'carousel-stage-left' : 'carousel-stage-right')
        .addClass(slideRight ? 'carousel-stage-right' : 'carousel-stage-left')
      nextImage
        .addClass('carousel-image-animated')
        .removeClass('carousel-stage-right')
        .removeClass('carousel-stage-left')
        .addClass('carousel-center-stage') 
    }, 50) 

  }

  var slideRight = function(){
    var currentImageIndex = $('.carousel > .carousel-center-stage').index()
    var nextImageIndex = (currentImageIndex + 1) % numberOfImages;
    scrollToImage(nextImageIndex, false)
  };

  var slideLeft = function(){
    var currentImageIndex = $('.carousel > .carousel-center-stage').index()
    var nextImageIndex = (currentImageIndex - 1) 
    if (nextImageIndex < 0) nextImageIndex += numberOfImages
    nextImageIndex = nextImageIndex % numberOfImages;
    scrollToImage(nextImageIndex, true)
  };

})




$(function() {
  $('.burger').click(function(event) {
    event.preventDefault()
    $('.nav-dropdown').slideToggle('fast')
  })
})
