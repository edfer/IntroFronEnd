var form = document.getElementById("form-require-service");
var textDescription = document.getElementById("text-description");


if (!Modernizr.formvalidation) {
    $.getScript('libs/h5f.min.js');
}



var needVideo = document.getElementById("services-yes");
var noNeedVideo = document.getElementById("services-no");

var firstNameInput = document.getElementById("first-name");

needVideo.addEventListener("click", function(evt) {
    if (this.value == "yes") {
        textDescription.style.display = "block";
        firstNameInput.focus();
    }
});

var goodByeMessage = document.getElementById("good-bye");

noNeedVideo.addEventListener("click", function(evt) {
    if (this.value == "no") {
        textDescription.style.display = "none";
        goodByeMessage.style.display = "block";
    }
});



form.addEventListener("submit", function(evt) {


    var firstNameInput = document.getElementById("first-name");
    var lastNameInput = document.getElementById("last-name");
    var emailInput = document.getElementById("email");
    var phoneNumInput = document.getElementById("phone-num");

    var button = document.getElementById("submit-request");

    if (firstNameInput.checkValidity() == false) {
        alert("Falta tu nombre");
        firstNameInput.focus();
        evt.preventDefault();
        return false;
    }

    if (lastNameInput.checkValidity() == false) {
        alert("Falta tu apellido");
        lastNameInput.focus();
        evt.preventDefault();
        return false;
    }

    if (emailInput.checkValidity() == false) {
    	alert("Falta el email");
    	emailInput.focus();
    	evt.preventDefault();
    	return false;
    }

    if (phoneNumInput.checkValidity() == false) {
    	alert("Falta el teléfono");
    	phoneNumInput.focus();
    	evt.preventDefault();
    	return false;
    }

    

    
    evt.preventDefault();

    setTimeout(function(){
        
        goodByeMessage;

    }, 1000);

    return true;

});



















