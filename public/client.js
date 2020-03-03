// core file for client side js
const swup = new Swup()

//preloader
$(document).ready(() => {
    var preLoader = document.getElementById('preloader');
    setTimeout(() => preLoader.style.display = "none", 3000)
});