function hasFormValidation() {

    return (typeof document.createElement('input').checkValidity == 'function');

};

form.addEventListener("submit", function(evt) {

        if (hasFormValidation()) {

            if (true) {

                var firstNameInput = document.getElementById("first-name");

                if (firstNameInput.checkValidity() == false) {
                    alert("Falta tu nombre");
                    firstNameInput.focus();
                    evt.preventDefault();
                    return false;
                }

            }
            if (false) {

                if (nameInput.value.length == 0) {
                    alert("Falta tu nombre");
                    nameInput.focus();
                    evt.preventDefault();
                    return false;
                }
            }
        }
    
};
