var cartBut = document.getElementById("cart-menu");
var buyBut = document.getElementById("buy-btn");

var lightboxDiv = document.getElementById("lightbox");
var closeBut = document.getElementById("close-but");
var lightContent = document.getElementById("cart-div");

closeBut.onclick = function () {
    lightboxDiv.style.display = "none";
}

cartBut.onclick = function() {
    lightboxDiv.style.display = "block";
}

var idx = 0
buyBut.onclick = function () {
	lightboxDiv.style.display = "block";
	idx = idx + 1;
	lightContent.innerHTML ="FasTap x " + idx;
}
