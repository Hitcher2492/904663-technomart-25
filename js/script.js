// ------ПЕРЕМЕННЫЕ ДЛЯ МОДАЛЬНОГО ОКНА MODAL-LOGIN------

var linkModalLogin = document.querySelector(".about-contacts .about-btn");

var overlayModalLogin = document.querySelector(".overlay-login");
var popupModalLogin = document.querySelector(".modal-login");
var closeModalLogin = document.querySelector(".modal-login .modal-close");
var submit = document.querySelector(".modal-login .btn-submit");

var login = document.querySelector(".name");
var email = document.querySelector(".e-mail");

// ------ПЕРЕМЕННЫЕ ДЛЯ МОДАЛЬНОГО ОКНА MODAL-MAP------

var linkModalMap = document.querySelector(".about-contacts-img");

var overlayModalMap = document.querySelector(".overlay-map");

var popupModalMap = document.querySelector(".modal-map");
var closeModalMap = document.querySelector(".modal-map .modal-close");

// ------ПЕРЕМЕННЫЕ ДЛЯ МОДАЛЬНОГО ОКНА MODAL-CART------

var overlayModalCart = document.querySelector(".overlay-cart");

var linkCatalog = document.querySelectorAll(".item-actions-buy");

var popupCatalog = document.querySelector(".modal-cart");
var closeCatalog = document.querySelector(".modal-cart .modal-close");
var closeBtnCatalog = document.querySelector(".btn-modal-close"); 

// ------МОДАЛЬНОЕ ОКНО MODAL-CART------

// ------Открытие окна------
if (linkCatalog != null) {
	for (let i = 0; i < linkCatalog.length; i++) {
		linkCatalog[i].addEventListener("click", function(evt) {
			evt.preventDefault();
			popupCatalog.classList.add("modal-animation-catalog");
			overlayModalCart.style.display = "flex";
		});
	}
}

// ------Закрытие окна при нажатии на крестик------
if (closeCatalog != null) {
	closeCatalog.addEventListener("click", function(evt) {
		evt.preventDefault();
		overlayModalCart.style.display = "none";
	});
}


// ------Закрытие окна при нажатии на кнопку Продолжить покупки------
if (closeBtnCatalog != null) {
	closeBtnCatalog.addEventListener("click", function(evt) {
		evt.preventDefault();
		overlayModalCart.style.display = "none";
	});
}

// ------Закрытие окна при нажатии на Esc------
window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (overlayModalCart.style.display = "flex") {
			evt.preventDefault();
			overlayModalCart.style.display = "none";
		}
	}
});

// ------МОДАЛЬНОЕ ОКНО MODAL-LOGIN------

// ------Открытие окна------
if (linkModalLogin != null) {
	linkModalLogin.addEventListener("click", function(evt) {
		evt.preventDefault();
		popupModalLogin.classList.add("modal-animation");
		overlayModalLogin.style.display = "flex";
		login.focus();
	});
}

// ------Закрытие окна при нажатии на крестик------
if (closeModalLogin != null) {
	closeModalLogin.addEventListener("click", function(evt) {
		evt.preventDefault();
		overlayModalLogin.style.display = "none";
		popupModalLogin.classList.remove("modal-error");
	});
}

// ------Анимация и фокус------
if (submit != null) {
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
}

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
if (linkModalMap != null) {
	linkModalMap.addEventListener("click", function(evt) {
		evt.preventDefault();
		popupModalMap.classList.add("modal-animation");
		overlayModalMap.style.display = "flex";
	});
}

// ------Закрытие окна при нажатии на крестик------
if (closeModalMap) {
	closeModalMap.addEventListener("click", function(evt) {
		evt.preventDefault();
		overlayModalMap.style.display = "none";
	});
}

// ------Закрытие окна при нажатии на Esc------
window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (overlayModalMap.style.display = "flex") {
			evt.preventDefault();
			overlayModalMap.style.display = "none";
		}
	}
});