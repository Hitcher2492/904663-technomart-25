// ------ПЕРЕМЕННЫЕ ДЛЯ МОДАЛЬНОГО ОКНА MODAL-CART------

var overlayModalCart = document.querySelector(".overlay-cart");

var linkCatalog = document.querySelectorAll(".item-actions-buy");

var popupCatalog = document.querySelector(".modal-cart");
var closeCatalog = document.querySelector(".modal-cart .modal-close");
var closeBtnCatalog = document.querySelector(".btn-modal-close"); 

// ------МОДАЛЬНОЕ ОКНО MODAL-CART------

// ------Открытие окна------
for (let i = 0; i < linkCatalog.length; i++) {
	linkCatalog[i].addEventListener("click", function(evt) {
		evt.preventDefault();
		popupCatalog.classList.add("modal-animation-catalog");
		overlayModalCart.style.display = "flex";
	});
}

// ------Закрытие окна при нажатии на крестик------
closeCatalog.addEventListener("click", function(evt) {
	evt.preventDefault();
	overlayModalCart.style.display = "none";
});

// ------Закрытие окна при нажатии на кнопку Продолжить покупки------
closeBtnCatalog.addEventListener("click", function(evt) {
	evt.preventDefault();
	overlayModalCart.style.display = "none";
});

// ------Закрытие окна при нажатии на Esc------
window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (overlayModalCart.style.display = "flex") {
			evt.preventDefault();
			overlayModalCart.style.display = "none";
		}
	}
});