const movetoNext = () => {
	const pictures = ['./public/images/pic1.jpg', './public/images/pic2.jpg','./public/images/pic3.jpg']
//let click  = next picture 

	for( let index = 0; index < pictures.length; index++){
		pictures[index] = index 
	}

	return pictures 
}