
var form = document.getElementById("form-contact");
var requireService = document.getElementById("require-service");


var needVideo = document.getElementById("services-yes");
var noNeedVideo = document.getElementById("services-no");


needVideo.addEventListener("click", function(evt) {
    if (this.value == "yes") {
        requireService.style.display = "block";
    } 
});

noNeedVideo.addEventListener("click", function(evt){
	if (this.value == "no") {
		requireService.style.display = "none"
	}
});



// form.addEventListener("Submit", function(evt) {

// var inputFirstName = document.getElementById("first-name");
// var inputLastName = document.getElementById("last-name");
// var 



// });
