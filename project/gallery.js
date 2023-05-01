/*
 * Author: Isaac Ellingson
 * Date: 4/14/2023
 */ 

function loadInitial() {
	var galleries = document.getElementsByClassName("gallery_container");
	for(let i=0; i<galleries.length; i++) {
		galleries[i].setAttribute("slide", "01");
		let galleryFolder = galleries[i].getAttribute("gallery");
		let imageName = "media/"+galleryFolder+"/01.jpg";
		galleries[i].style.backgroundImage = "url('"+imageName+"')";
	}
}

function galleryForward(gallery) {
	var container = document.getElementById("gallery_"+gallery);
	var slideCount = container.getAttribute("slides") | 0;
	var slideNum = container.getAttribute("slide") | 0;
	
	slideNum = slideNum + 1;
	if (slideNum>slideCount) slideNum = 1;
	
	slideNum = ""+slideNum;
	if (slideNum.length == 1) slideNum = "0"+slideNum;
	
	var container = document.getElementById("gallery_"+gallery);
	var imageName = "media/"+gallery+"/"+slideNum+".jpg";
	container.style.backgroundImage = "url('"+imageName+"')";
	container.setAttribute("slide", slideNum);
	
	console.log(slideNum+" / "+slideCount);
}

function galleryBackward(gallery) {
	var container = document.getElementById("gallery_"+gallery);
	var slideCount = container.getAttribute("slides") | 0;
	var slideNum = container.getAttribute("slide") | 0;
	
	slideNum = slideNum - 1;
	if (slideNum<1) slideNum = slideCount;
	
	slideNum = ""+slideNum;
	if (slideNum.length == 1) slideNum = "0"+slideNum;
	
	var container = document.getElementById("gallery_"+gallery);
	var imageName = "media/"+gallery+"/"+slideNum+".jpg";
	container.style.backgroundImage = "url('"+imageName+"')";
	container.setAttribute("slide", slideNum);
}
