var navbarItems = document.getElementsByClassName('navbar-item');

for (var i = 0; i < navbarItems.length; i++){
	navbarItems[i].addEventListener('click', function(evt){	

		var sectionToGo = this.getElementsByTagName('a')[0].href.split('#');
		
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
		elem = document.getElementById("top-window");
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
}

var meOffset = cumulativeOffset(document.getElementById("me"));
var studiesOffset = cumulativeOffset(document.getElementById("studies"));
var workOffset = cumulativeOffset(document.getElementById("work"));
var aboutMeOffset = cumulativeOffset(document.getElementById("about-me"));
var contactOffset = cumulativeOffset(document.getElementById("contact"));

var itemInNavbar = document.getElementsByClassName('navbar').find("navbar-item");

window.addEventListener("scroll", changeMyStyle);

function changeMyStyle(evt){
	var previous;

	if (window.pageYOffset >= 0 && window.pageYOffset < meOffset) {
		if(!previous) {
			previous = 1;
		} else if(previous == 1){
			return false;
		}

		itemInNavbar.style.boxShadow = 0px -3px 0 rgba(230, 230, 230, 0.9) inset;
		document.querySelector("a[href='#me']").prentNode.ClassList.add("active");
	} else if (window.pageYOffset >= 0 && window.pageYOffset < studiesOffset) {
		if(!previous) {
			previous = 2;
		} else if(previous == 2){
			return false;
		}

		itemInNavbar.style.boxShadow = 0px -3px 0 rgba(230, 230, 230, 0.9) inset;
		document.querySelector("a[href='#top-window']").prentNode.ClassList.add("active");
	}
}



































