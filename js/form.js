var form = document.getElementById("form-require-service");
var textDescription = document.getElementById("text-description");

// MAX-WORDS -> 250

var textArea = document.getElementById('text-area');
var maxWords = 151;

// if (!Modernizr.formvalidation) {
//     $.getScript('libs/h5f.min.js');
// }

var needVideo = document.getElementById("services-yes");
var noNeedVideo = document.getElementById("services-no");

var firstNameInput = document.getElementById("first-name");

needVideo.addEventListener("click", function(evt) {
    if (this.value == "yes") {
        textDescription.style.display = "block";
        textArea.setAttribute('required', 'true');
        firstNameInput.focus();
        goodByeMessage.style.display = "none";
    }
});

var goodByeMessage = document.getElementById("good-bye");

noNeedVideo.addEventListener("click", function(evt) {
    if (this.value == "no") {
        textDescription.style.display = "none";
        textArea.removeAttribute('required');
        goodByeMessage.style.display = "block";
    }
});

var words = textArea.value.split(/\b[\s,\.-:;]*/);

textArea.addEventListener("input", function(evt) {
    var words = textArea.value.split(/\b[\s,\.-:;]*/);

    if (words.length > maxWords) {
        words.splice(maxWords);
        
        words.pop();
        textArea.value = words.join(' ');
        
    }

    // console.log('words: ', words);

});

textArea.addEventListener("keyup", function(evt) {
    var wordcount;
    wordcount = textArea.value.split(/\b[\s,\.-:;]*/).length;

    if (wordcount >= maxWords) { 
        alert('Has llegado al límite de ' + (maxWords - 1) + ' palabras permitidas');
        return false;      
    }

    // console.log('wordcount: ' + wordcount);

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
            console.log(words);
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

        if (document.getElementById("text-area").checkValidity() == false) {

            alert("Describe brevemente los requerimientos de tu proyecto");
            evt.preventDefault();
            return false;
        }

        // VALIDATION FOR IE9

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

        if (document.getElementById("text-area").value.length == 0) {

            alert("Describe brevemente los requerimientos de tu proyecto");
            evt.preventDefault();
            return false;
        }

    }

    // MAX-WORDS -> 250

    // document.getElementById('text-area').oninput(function(){
    //     var words = textArea.value.split(/\b[\s,\.-:;]*/);

    //     alert('work');

    // });








    // evt.preventDefault();

    // setTimeout(function() {

    //     sendNotification("Nos pondremos en contacto en 24h", "Para más información, Mastercard");

    // }, 1000);

});
