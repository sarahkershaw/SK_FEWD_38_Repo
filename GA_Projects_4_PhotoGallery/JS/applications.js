$(document).ready(function(){

	var slideShow = ["Images/image_0.jpg","Images/image_1.jpg","Images/image_2.jpg","Images/image_3.jpg","Images/image_4.jpg","Images/image_5.jpg","Images/image_06.jpg",
	"Images/image_7.jpg","Images/image_8.jpg","Images/image_9.jpg","Images/image_10.jpg","Images/image_11.jpg","Images/image_12.jpg"]


 function swapImage(whichNum){
 	var img = document.getElementById('imageViewer');
	img.setAttribute('src',images [whichNum]);
	currentImage=whichNum;
 };








	// function switchImage(){
	// 	for (var i = 0; i < slideShow.length; i++){

	// 	}
	// }


	// $('.thumbNails').hover(function(){
		
	// });

	/* CHRIS' CODE
	var images = ["Image/image_0.jpg", "Image/image_1.jpg", "Image/image_2.jpg", "Image/image_3.jpg", "Image/image_4.jpg", "Image/image_5.jpg",]
	"Image/image_6.jpg", "Image/image_7.jpg"]

	var currentImage=0;

	function changePicture(whichNum) {
	var img = document.getElementById('mainImage');
	img.setAttribute('src', images[whichNum]);
	currentImage=whichNum;
	}

	function nextImage (){
	currentImage++;
	if(currentImage===images.length){
	   currentImage=0;
	}
	img.setAttribute('src',images[currentImage]);
	}

	function prevImage () {
	currentImage=currentImage -1;
	if(currentImage===-1){
	   currentImage=0;
	}
	var img=document.getElementById('mainImage');
	img.setAttribute('src',images[currentImage]);
	}

	*/
});