const carousel = () => {
  const  i;
  const  x = document.getElementsByClassName("mySlides");
  for (index = 0; index < x.length; index++) {
    x[index].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}