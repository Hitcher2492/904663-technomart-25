var overlay = document.querySelector(".overlay");

var linkCatalog = document.querySelector(".item-actions-buy");

var popupCatalog = document.querySelector(".modal-cart");
var closeCatalog = popupCatalog.querySelector(".modal-close");
var closeBtnCatalog = popupCatalog.querySelector(".btn-modal-close");

linkCatalog.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupCatalog.classList.add("modal-animation-catalog");
	overlay.style.display = "flex";
	popupCatalog.style.display = "block";
});

closeCatalog.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupCatalog.style.display = "none";
	overlay.style.display = "none";
});

closeBtnCatalog.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupCatalog.style.display = "none";
	overlay.style.display = "none";
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (overlay.style.display = "flex") {
			evt.preventDefault();
			popupCatalog.style.display = "none";
			overlay.style.display = "none";
		}
	}
});