var form = document.getElementById("form-contact");
var requireService = document.getElementById("require-service");


var needVideo = document.getElementById("services-yes");
var noNeedVideo = document.getElementById("services-no");


needVideo.addEventListener("click", function(evt) {
    if (this.value == "yes") {
        form.style.display = "block";
    }
});

noNeedVideo.addEventListener("click", function(evt) {
    if (this.value == "no") {
        form.style.display = "none"
    }
});



form.addEventListener("submit", function(evt) {

    var firstNameInput = document.getElementById("first-name");
    var lastNameInput = document.getElementById("last-name");
    var emailInput = document.getElementById("email");
    var phoneNumInput = document.getElementById("phone-num");

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











    




});
