var cartBut = document.getElementById("cart-menu");
var buyBut = document.getElementById("buy-btn");

var lightboxDiv = document.getElementById("lightbox");
var closeBut = document.getElementById("close-but");


closeBut.onclick = function () {
    lightboxDiv.style.display = "none";
}

cartBut.onclick = function() {
    lightboxDiv.style.display = "fixed";
}