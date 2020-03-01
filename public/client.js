// core file for client side js
const swup = new Swup()

// for preloader
document.getElementById("body").addEventListener("load", preLoader);
var preLoader = document.getElementById('preloader');
function preLoader(){
    preLoader.style.display = "none";
}