
var service = document.getElementById("menu1")
var display = 0;


function hideShowService() {
    if (display == 1) {
        service.style.display = "block";
        display = 0;
    } else {
        service.style.display = "none";
        display = 1;
    }
}

var touch = document.getElementById("menu2")

function hideShowContact() {
    if (display == 1) {
        touch.style.display = "block";
        display = 0;
    } else {
        touch.style.display = "none";
        display = 1;
    }
}

var policy = document.getElementById("menu3")

function hideShowPolicy() {
    if (display == 1) {
        policy.style.display = "block";
        display = 0;
    } else {
        policy.style.display = "none";
        display = 1;
    }
}

var connect = document.getElementById("menu4")

function hideShowConnect() {
    if (display == 1) {
        connect.style.display = "block";
        display = 0;
    } else {
        connect.style.display = "none";
        display = 1;
    }
}

