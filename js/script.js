const slideshow = document.querySelector("section.slideshow")
const images = slideshow.querySelectorAll("img")

function show(imageNumber){
	slideshow.style.display = "block"
	images.forEach(image =>{
		image.style.zIndex = 0
	})

	images[imageNumber].style.zIndex = 1
}

function hide(){
	slideshow.style.display = "none"
}

function showAbout(){
	show(0)
	document.getElementById("about-text").style.opacity="1"
	document.getElementById("projects").style.opacity="0"
}

function hideAbout(){
	hide()
	document.getElementById("about-text").style.opacity="0"
	document.getElementById("projects").style.opacity="1"
}