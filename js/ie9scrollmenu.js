var isIE = /*@cc_on!@*/ false || !!document.documentMode;

if (isIE) {
    // var oldMenu.document.getElementsByClassName('navbar-item');
    // var oldMenu = document.querySelector("a[href='#home']");
    // document.querySelector('a[href="#home"]').parentNode.className += "active";

    var navbarItems = document.getElementsByClassName("navbar-item");

    for (var i = 0; i < navbarItems.length; i++) {

        navbarItems[i].addEventListener("click", function(evt) {
      

            var sectionToGo = this.getElementsByTagName("a")[0].href.split("#");

            if (sectionToGo.length > 1) {
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
        } while (element);

        return top;
    };

    var oldMenu1 = document.getElementById("1");
    var oldMenu2 = document.getElementById("2");
    var oldMenu3 = document.getElementById("3");
    var oldMenu4 = document.getElementById("4");
    var oldMenu5 = document.getElementById("5");
    var oldMenu6 = document.getElementById("6");

    var homeOffset = cumulativeOffset(oldMenu1)- 37;
    var meOffset = cumulativeOffset(oldMenu2) - 37;
    var studiesOffset = cumulativeOffset(oldMenu3) - 37;
    var workOffset = cumulativeOffset(oldMenu4) - 37;
    var aboutMeOffset = cumulativeOffset(oldMenu5) - 37;
    var contactOffset = cumulativeOffset(oldMenu6) - 37;


    

    oldMenu1.addEventListener("click", function(evt) {
        oldMenu1.style.color = 'black';
        oldMenu1.style.backgroundColor = 'white';

        oldMenu2.style.color = 'whihte';
        oldMenu2.style.backgroundColor = 'black';

        oldMenu3.style.color = 'white';
        oldMenu3.style.backgroundColor = 'black';

        oldMenu4.style.color = 'white';
        oldMenu4.style.backgroundColor = 'black';

        oldMenu5.style.color = 'white';
        oldMenu5.style.backgroundColor = 'black';

        oldMenu6.style.color = 'white';
        oldMenu6.style.backgroundColor = 'black';

    });


    if (window.pageYOffset >= 0 && window.pageYOffset < meOffset) {

        oldMenu1.style.color = 'black';
        oldMenu1.style.backgroundColor = 'white';

        oldMenu2.style.color = 'whihte';
        oldMenu2.style.backgroundColor = 'black';

        oldMenu3.style.color = 'white';
        oldMenu3.style.backgroundColor = 'black';

        oldMenu4.style.color = 'white';
        oldMenu4.style.backgroundColor = 'black';

        oldMenu5.style.color = 'white';
        oldMenu5.style.backgroundColor = 'black';

        oldMenu6.style.color = 'white';
        oldMenu6.style.backgroundColor = 'black';
    }

    oldMenu2.addEventListener("click", function(evt) {

        oldMenu2.style.color = 'black';
        oldMenu2.style.backgroundColor = 'white';

        oldMenu1.style.color = 'whihte';
        oldMenu1.style.backgroundColor = 'black';

        oldMenu3.style.color = 'white';
        oldMenu3.style.backgroundColor = 'black';

        oldMenu4.style.color = 'white';
        oldMenu4.style.backgroundColor = 'black';

        oldMenu5.style.color = 'white';
        oldMenu5.style.backgroundColor = 'black';

        oldMenu6.style.color = 'white';
        oldMenu6.style.backgroundColor = 'black';
    });

    if (window.pageYOffset >= meOffset && window.pageYOffset < studiesOffset) {

    	oldMenu2.style.color = 'black';
        oldMenu2.style.backgroundColor = 'white';

        oldMenu1.style.color = 'whihte';
        oldMenu1.style.backgroundColor = 'black';

        oldMenu3.style.color = 'white';
        oldMenu3.style.backgroundColor = 'black';

        oldMenu4.style.color = 'white';
        oldMenu4.style.backgroundColor = 'black';

        oldMenu5.style.color = 'white';
        oldMenu5.style.backgroundColor = 'black';

        oldMenu6.style.color = 'white';
        oldMenu6.style.backgroundColor = 'black';

    }

    oldMenu3.addEventListener("click", function(evt) {
        oldMenu3.style.color = 'black';
        oldMenu3.style.backgroundColor = 'white';

        oldMenu1.style.color = 'whihte';
        oldMenu1.style.backgroundColor = 'black';

        oldMenu2.style.color = 'white';
        oldMenu2.style.backgroundColor = 'black';

        oldMenu4.style.color = 'white';
        oldMenu4.style.backgroundColor = 'black';

        oldMenu5.style.color = 'white';
        oldMenu5.style.backgroundColor = 'black';

        oldMenu6.style.color = 'white';
        oldMenu6.style.backgroundColor = 'black';
    });

    oldMenu4.addEventListener("click", function(evt) {
        oldMenu4.style.color = 'black';
        oldMenu4.style.backgroundColor = 'white';

        oldMenu1.style.color = 'whihte';
        oldMenu1.style.backgroundColor = 'black';

        oldMenu2.style.color = 'white';
        oldMenu2.style.backgroundColor = 'black';

        oldMenu3.style.color = 'white';
        oldMenu3.style.backgroundColor = 'black';

        oldMenu5.style.color = 'white';
        oldMenu5.style.backgroundColor = 'black';

        oldMenu6.style.color = 'white';
        oldMenu6.style.backgroundColor = 'black';
    });

    oldMenu5.addEventListener("click", function(evt) {
        oldMenu5.style.color = 'black';
        oldMenu5.style.backgroundColor = 'white';

        oldMenu1.style.color = 'whihte';
        oldMenu1.style.backgroundColor = 'black';

        oldMenu2.style.color = 'white';
        oldMenu2.style.backgroundColor = 'black';

        oldMenu3.style.color = 'white';
        oldMenu3.style.backgroundColor = 'black';

        oldMenu4.style.color = 'white';
        oldMenu4.style.backgroundColor = 'black';

        oldMenu6.style.color = 'white';
        oldMenu6.style.backgroundColor = 'black';
    });

    oldMenu6.addEventListener("click", function(evt) {
        oldMenu6.style.color = 'black';
        oldMenu6.style.backgroundColor = 'white';

        oldMenu1.style.color = 'whihte';
        oldMenu1.style.backgroundColor = 'black';

        oldMenu2.style.color = 'white';
        oldMenu2.style.backgroundColor = 'black';

        oldMenu3.style.color = 'white';
        oldMenu3.style.backgroundColor = 'black';

        oldMenu4.style.color = 'white';
        oldMenu4.style.backgroundColor = 'black';

        oldMenu5.style.color = 'white';
        oldMenu5.style.backgroundColor = 'black';
    });
}
