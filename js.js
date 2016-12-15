var cartBut = document.getElementById("cart-menu");
var buyBut = document.getElementById("buy-btn");

var lightboxDiv = document.getElementById("lightbox");
var closeBut = document.getElementById("close-but");
var lightContent = document.getElementById("cart-div");
var amountDiv = document.getElementById("amount");
var lightContainer = document.getElementById("lightbox-container");
var amountpricediv = document.getElementById("totalpricediv");

var totalPrice = document.createElement("div");
amountpricediv.appendChild(totalPrice);

closeBut.onclick = function () {
    lightboxDiv.style.display = "none";
}

cartBut.onclick = function() {
    lightboxDiv.style.display = "block";
}

var price = 200;
var idx = 0;
buyBut.onclick = function () {
	lightboxDiv.style.display = "block";
	idx = idx + 1;
    price = price * idx;
    amountDiv.innerHTML = "FasTap x "+idx;
    totalPrice.className = "label label-primary totalamount center-block";
    totalPrice.innerHTML = "Total Amount: $"+ price;
    
    
}
