var form = document.getElementById("form-require-service");
var textDescription = document.getElementById("text-description");


// if (!Modernizr.formvalidation) {
//     $.getScript('libs/h5f.min.js');
// }



var needVideo = document.getElementById("services-yes");
var noNeedVideo = document.getElementById("services-no");

var firstNameInput = document.getElementById("first-name");

needVideo.addEventListener("click", function(evt) {
    if (this.value == "yes") {
        textDescription.style.display = "block";
        firstNameInput.focus();
        goodByeMessage.style.display = "none";
    }
});

var goodByeMessage = document.getElementById("good-bye");

noNeedVideo.addEventListener("click", function(evt) {
    if (this.value == "no") {
        textDescription.style.display = "none";
        goodByeMessage.style.display = "block";
    }
});

function hasFormValidation() {

    return (typeof document.createElement('input').checkValidity == 'function');

};

form.addEventListener("submit", function(evt) {



    var firstNameInput = document.getElementById("first-name");
    var lastNameInput = document.getElementById("last-name");
    var emailInput = document.getElementById("email");
    var phoneNumInput = document.getElementById("phone-num");


    if (hasFormValidation()) {





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
    } else {

        if (firstNameInput.value.length == 0) {
            alert("Falta tu nombre");
            firstNameInput.focus();
            evt.preventDefault();
            return false;
        }



        if (document.getElementById("last-name").value.length == 0) {
            alert("Falta tu apellido");
            document.getElementById("last-name").focus();
            evt.preventDefault();
            return false;
        }



        if (document.getElementById("email").value.length == 0) {
            alert("Falta tu email");
            emailInput.focus();
            evt.preventDefault();
            return false;
        }

        if (phoneNumInput.value.length == 0) {
            alert("Falta tu teléfono");
            phoneNumInput.focus();
            evt.preventDefault();
            return false;
        }

    }

    // evt.preventDefault();

    // setTimeout(function() {

    //     sendNotification("Nos pondremos en contacto en 24h", "Para más información, Mastercard");

    // }, 1000);

});


























//
