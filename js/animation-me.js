var meImg = document.getElementById('title-img-animated');

meImg.addEventListener('mousemove', function(evt){
	meImg.style.backgroundPosition = evt.pageX * -1 / 12 + "px " + evt.pageY * -1 / 12 + "px";
});

meImg.addEventListener('mouseleave', function(evt) {
	meImg.style.backgroundPosition = "center center";
});