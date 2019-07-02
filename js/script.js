// ------ПЕРЕМЕННЫЕ ДЛЯ МОДАЛЬНОГО ОКНА MODAL-LOGIN------

var linkModalLogin = document.querySelector(".about-contacts .about-btn");

var overlayModalLogin = document.querySelector(".overlay-login");
var popupModalLogin = document.querySelector(".modal-login");
var closeModalLogin = popupModalLogin.querySelector(".modal-close");
var submit = popupModalLogin.querySelector(".btn-submit");

var login = popupModalLogin.querySelector(".name");
var email = popupModalLogin.querySelector(".e-mail");

// ------ПЕРЕМЕННЫЕ ДЛЯ МОДАЛЬНОГО ОКНА MODAL-MAP------

var linkModalMap = document.querySelector(".about-contacts-img");

var overlayModalMap = document.querySelector(".overlay-map");

var popupModalMap = document.querySelector(".modal-map");
var closeModalMap = popupModalMap.querySelector(".modal-close");

// ------МОДАЛЬНОЕ ОКНО MODAL-LOGIN------

// ------Открытие окна------
linkModalLogin.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupModalLogin.classList.add("modal-animation");
	overlayModalLogin.style.display = "flex";
	login.focus();
});

// ------Закрытие окна при нажатии на крестик------
closeModalLogin.addEventListener("click", function(evt) {
	evt.preventDefault();
	overlayModalLogin.style.display = "none";
	popupModalLogin.classList.remove("modal-error");
});

// ------Анимация и фокус------
submit.addEventListener("click", function(evt) {
	if (!login.value || !email.value) {
		evt.preventDefault();
		popupModalLogin.classList.remove("modal-error");
      	popupModalLogin.offsetWidth = popupModalLogin.offsetWidth;
		popupModalLogin.classList.add("modal-error");
		if (login.value) {
			email.focus();
		} else {
			login.focus();
		}
	} 
});

// ------Закрытие окна при нажатии на Esc------
window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (overlayModalLogin.style.display = "flex") {
			evt.preventDefault();
			overlayModalLogin.style.display = "none";
			popupModalLogin.classList.remove("modal-error");
		}
	}
});

// ------МОДАЛЬНОЕ ОКНО MODAL-MAP------

// ------Открытие окна------
linkModalMap.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupModalMap.classList.add("modal-animation");
	overlayModalMap.style.display = "flex";
});

// ------Закрытие окна при нажатии на крестик------
closeModalMap.addEventListener("click", function(evt) {
	evt.preventDefault();
	overlayModalMap.style.display = "none";
});

// ------Закрытие окна при нажатии на Esc------
window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (overlayModalMap.style.display = "flex") {
			evt.preventDefault();
			overlayModalMap.style.display = "none";
		}
	}
});

// ------ПЕРЕМЕННЫЕ ДЛЯ МОДАЛЬНОГО ОКНА MODAL-CART------

var overlayModalCart = document.querySelector(".overlay-cart");

var linkCatalog = document.querySelectorAll(".catalog-body .item-actions-buy");

var popupCatalog = document.querySelector("catalog-body .modal-cart");
var closeCatalog = popupCatalog.querySelector(".modal-cart .modal-close");
var closeBtnCatalog = popupCatalog.querySelector(".btn-modal-close"); 

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