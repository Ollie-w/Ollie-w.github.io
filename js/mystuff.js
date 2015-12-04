"use strict"

//Cycle through an array of words and change its color with an array of colors

        var i = 0;

        function myTimeout1() {
            var text = ["Beautiful", "Functional", "Innovative"];
            var color = ["#3B6F68", "#B64D14", "#56A5B4"];
           
var targetText = document.getElementById("cyclingText");              
targetText.textContent = text[i];
targetText.style.color = color[i];
            i += 1;
            if (i === text.length) {
                i = 0;
            }
        }

function timedText() {
    setInterval(myTimeout1, 2500) 
}


timedText();