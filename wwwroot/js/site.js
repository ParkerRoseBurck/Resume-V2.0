// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

let moonshotButton = document.getElementById('moonshot-button');
let moonshotInfo = document.getElementById('moonshot-info');
let moonshotShowing = false;
let csvButton = document.getElementById('csv-button');
let csvInfo = document.getElementById('csv-info');
let csvShowing = false;
let kastemButton = document.getElementById('kastem-button');
let kastemInfo = document.getElementById('kastem-info');
let kastemShowing = false;
let mynetworxButton = document.getElementById('mynetworx-button');
let mynetworxInfo = document.getElementById('mynetworx-info');
let mynetworxShowing = false;
let vetButton = document.getElementById('vet-button');
let vetInfo = document.getElementById('vet-info');
let vetShowing = false;
let emulatorButton = document.getElementById('emulator-button');
let emulatorInfo = document.getElementById('emulator-info');
let emulatorShowing = false;
let scrabbleButton = document.getElementById('scrabble-button');
let scrabbleInfo = document.getElementById('scrabble-info');
let scrabbleShowing = false;
let newcomerButton = document.getElementById('newcomer-button');
let newcomerInfo = document.getElementById('newcomer-info');
let newcomerShowing = false;

moonshotButton.onclick = function () {
    if (moonshotShowing) {
        moonshotInfo.style.display = "none";
        moonshotButton.style.backgroundImage = "url('../img/downarrow-thin-green.PNG')";
        
        moonshotShowing = false;

    } else {
        moonshotInfo.style.display = "block";
        moonshotButton.style.backgroundImage = "url('../img/uparrow-thin-green.PNG')";
        
        moonshotShowing = true;
    }
}
csvButton.onclick = function () {
    if (csvShowing) {
        csvInfo.style.display = "none";
        csvButton.style.backgroundImage = "url('../img/downarrow-thin-green.PNG')";
        csvShowing = false;

    } else {
        csvInfo.style.display = "block";
        csvButton.style.backgroundImage = "url('../img/uparrow-thin-green.PNG')";
        csvShowing = true;
    }
}
kastemButton.onclick = function () {
    if (kastemShowing) {
        kastemInfo.style.display = "none";
        kastemButton.style.backgroundImage = "url('../img/downarrow-thin-green.PNG')";
        kastemShowing = false;

    } else {
        kastemInfo.style.display = "block";
        kastemButton.style.backgroundImage = "url('../img/uparrow-thin-green.PNG')";
        kastemShowing = true;
    }
}


mynetworxButton.onclick = function () {
    if (mynetworxShowing) {
        mynetworxInfo.style.display = "none";
        mynetworxButton.style.backgroundImage = "url('../img/downarrow-thin-green.PNG')";
        mynetworxShowing = false;

    } else {
        mynetworxInfo.style.display = "block";
        mynetworxButton.style.backgroundImage = "url('../img/uparrow-thin-green.PNG')";
        mynetworxShowing = true;
    }
}

vetButton.onclick = function () {
    if (vetShowing) {
        vetInfo.style.display = "none";
        vetButton.style.backgroundImage = "url('../img/downarrow-thin-green.PNG')";
        vetShowing = false;

    } else {
        vetInfo.style.display = "block";
        vetButton.style.backgroundImage = "url('../img/uparrow-thin-green.PNG')";
        vetShowing = true;
    }
}

emulatorButton.onclick = function () {
    if (emulatorShowing) {
        emulatorInfo.style.display = "none";
        emulatorButton.style.backgroundImage = "url('../img/downarrow-thin-green.PNG')";
        emulatorShowing = false;

    } else {
        emulatorInfo.style.display = "block";
        emulatorButton.style.backgroundImage = "url('../img/uparrow-thin-green.PNG')";
        emulatorShowing = true;
    }
}

scrabbleButton.onclick = function () {
    if (scrabbleShowing) {
        scrabbleInfo.style.display = "none";
        scrabbleButton.style.backgroundImage = "url('../img/downarrow-thin-green.PNG')";
        scrabbleShowing = false;

    } else {
        scrabbleInfo.style.display = "block";
        scrabbleButton.style.backgroundImage = "url('../img/uparrow-thin-green.PNG')";
        scrabbleShowing = true;
    }
}

newcomerButton.onclick = function () {
    if (newcomerShowing) {
        newcomerInfo.style.display = "none";
        newcomerButton.style.backgroundImage = "url('../img/downarrow-thin-green.PNG')";
        newcomerShowing = false;

    } else {
        newcomerInfo.style.display = "block";
        newcomerButton.style.backgroundImage = "url('../img/uparrow-thin-green.PNG')";
        newcomerShowing = true;
    }
}

