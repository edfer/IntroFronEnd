var navbarItems = document.getElementsByClassName("navbar-item");

for (var i = 0; i < navbarItems.length; i++){

	navbarItems[i].addEventListener("click", function(evt){	


		deleteActiveClass();

		var sectionToGo = this.getElementsByTagName("a")[0].href.split("#");
		
		if(sectionToGo.length > 1) {
			evt.preventDefault();
			var goTo = sectionToGo[sectionToGo.length - 1];
			getElementByIdAndScroll(goTo);
		}
	});
}

function getElementByIdAndScroll(name) {
	var elem;
	if (name == '') {
		elem = document.getElementsByClassName("header00")[0];
	} else {
		elem = document.getElementById(name);
	}

	scrollToElement(elem);
}

function scrollToElement(element) {
	var jump = parseInt(element.getBoundingClientRect().top * .3);
	document.body.scrollTop += jump;
	document.documentElement.scrollTop += jump;

	if (!element.lastJump || element.lastJump > Math.abs(jump)) {
		element.lastJump = Math.abs(jump);

		setTimeout(function() {
			scrollToElement(element);
		}, "60");

	} else {
		element.lastJump = null;
	}
}

// ACTIVE ITEM

var cumulativeOffset = function(element) {
	var top = 0;
	do {
		top += element.offsetTop || 0;
		element = element.offsetParent;
	} while(element);

	return top;
};


var meOffset = cumulativeOffset(document.getElementById("me")) - 37;
var studiesOffset = cumulativeOffset(document.getElementById("studies")) -37;
var workOffset = cumulativeOffset(document.getElementById("work")) - 37;
var aboutMeOffset = cumulativeOffset(document.getElementById("about-me")) -37;
var contactOffset = cumulativeOffset(document.getElementById("contact")) - 37;


// var itemInNavbar = document.getElementsByClassName('navbar-item')[0];


window.addEventListener("scroll", changeMyStyle);

function changeMyStyle(evt){
	var previous;

	if (window.pageYOffset >= 0 && window.pageYOffset < meOffset) {
		if(!previous) {
			previous = 1;
		} else if(previous == 1){
			return false;
		}


		deleteActiveClass();
		document.querySelector('a[href="#home"]').parentNode.classList.add("active");


	} else if (window.pageYOffset >= meOffset && window.pageYOffset < studiesOffset) {
		if(!previous) {
			previous = 2;
		} else if(previous == 2){
			return false;
		}


		deleteActiveClass();
		document.querySelector("a[href='#me']").parentNode.classList.add("active");


	} else if (window.pageYOffset >= studiesOffset && window.pageYOffset < workOffset) {
		if(!previous) {
			previous = 3;
		} else if(previous == 3){
			return false;
		}


		deleteActiveClass();
		document.querySelector("a[href='#studies']").parentNode.classList.add("active");

	} else if 	(window.pageYOffset >= workOffset && window.pageYOffset < aboutMeOffset) {
		if (!previous) {
			previous = 4;
		} else if(previous == 4){
			return false;
		}

		deleteActiveClass();
		document.querySelector("a[href='#work']").parentNode.classList.add("active")


	} else if (window.pageYOffset >= aboutMeOffset && window.pageYOffset < contactOffset){
		if (!previous) {
			previous = 5;
		} else if (previous == 5){
			return false;
		}


		deleteActiveClass();
		document.querySelector("a[href='#about-me']").parentNode.classList.add("active")
	} else if (window.pageYOffset >= contactOffset && window.pageYOffset < (pageYOffset + 500)) {
		if (!previous) {
			previous = 5;
		} else if (previous == 5){
			return false;
		}

		deleteActiveClass();
		document.querySelector("a[href='#contact']").parentNode.classList.add("active");
	}
	
}

function deleteActiveClass() {
	for(var i = 0; i < navbarItems.length; i++){
		navbarItems[i].classList.remove("active");	
	}
}

































