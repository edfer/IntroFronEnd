var meImg = document.querySelector("img[src='images/mirror-look-away copy.jpg']");

meImg.addEventListener("mouseover", function(evt){
	meImg.src = "images/mirror-look-straight copy.jpg";
});

meImg.addEventListener("mouseleave", function(evt){
	meImg.src = "images/mirror-look-away copy.jpg";
});
