const image1=new Image()
image1.src="./images/pic1.jpg"

const image2=new Image()
image2.src="./images/pic2.jpg"

const image3=new Image()
image3.src="./images/pic1.jpg"


const step=1
const slideit = () => {
//if browser does not support the image object, exit.
	if (!document.images)
	return
		document.images.slide.src=eval("image"+step+".src")
	if (step<3)
		step++
	else
		step=1
//call function "slideit()" every 2.5 seconds
		setTimeout("slideit()",2500)
}
