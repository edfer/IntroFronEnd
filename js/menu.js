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
	var jump = parseInt(element.getBoundingClientRect().top * .5);
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


var meOffset = cumulativeOffset(document.getElementById("me"));
var studiesOffset = cumulativeOffset(document.getElementById("studies"));
var workOffset = cumulativeOffset(document.getElementById("work"));
var aboutMeOffset = cumulativeOffset(document.getElementById("about-me"));
var contactOffset = cumulativeOffset(document.getElementById("contact"));

// var itemInNavbar = document.getElementsByClassName('navbar-item')[0];

window.addEventListener("scroll", changeMyStyle);

function changeMyStyle(evt){
	// var previous;

	if (window.pageYOffset >= 0 && window.pageYOffset < meOffset) {
		// if(!previous) {
		// 	previous = 1;
		// } else if(previous == 1){
		// 	return false;
		// }

		

		deleteActiveClass();
		document.querySelector("a[href='#']").parentNode.classList.add("active");

	} else if (window.pageYOffset >= meOffset && window.pageYOffset < studiesOffset) {
		// if(!previous) {
		// 	previous = 2;
		// } else if(previous == 2){
		// 	return false;
		// }

		

		deleteActiveClass();
		document.querySelector("a[href='#me']").parentNode.classList.add("active");


	} else if (window.pageYOffset >= studiesOffset && window.pageYOffset < workOffset) {
		// if(!previous) {
		// 	previous = 3;
		// } else if(previous == 3){
		// 	return false;
		// }

		

		deleteActiveClass();
		document.querySelector("a[href='#studies']").parentNode.classList.add("active");
	}
}

function deleteActiveClass() {
	for(var i = 0; i < navbarItems.length; i++){
		navbarItems[i].classList.remove("active");	
	}
}
































