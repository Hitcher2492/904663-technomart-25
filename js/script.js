var linkModalLogin = document.querySelector(".about-contacts .about-btn");

var overlay = document.querySelector(".overlay");
var popupModalLogin = document.querySelector(".modal-login");
var closeModalLogin = popupModalLogin.querySelector(".modal-close");

var submit = popupModalLogin.querySelector(".btn-submit");

var login = popupModalLogin.querySelector(".name");
var email = popupModalLogin.querySelector(".e-mail");
var message = popupModalLogin.querySelector(".message");

// -----------------------------------------------------

var linkModalMap = document.querySelector(".about-contacts-img");

var popupModalMap = document.querySelector(".modal-map");
var closeModalMap = popupModalMap.querySelector(".modal-close");

linkModalLogin.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupModalLogin.classList.add("modal-animation");
	overlay.style.display = "flex";
	popupModalLogin.style.display = "block";
	login.focus();
});

closeModalLogin.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupModalLogin.style.display = "none";
	overlay.style.display = "none";
	popupModalLogin.classList.remove("modal-error");
});

submit.addEventListener("click", function(evt) {
	if (!login.value || !email.value || !message.value) {
		evt.preventDefault();
		popupModalLogin.classList.remove("modal-error");
      	popupModalLogin.offsetWidth = popupModalLogin.offsetWidth;
		popupModalLogin.classList.add("modal-error");
	}
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (overlay.style.display = "flex") {
			evt.preventDefault();
			popupModalLogin.style.display = "none";
			overlay.style.display = "none";
			popupModalLogin.classList.remove("modal-error");
		}
	}
});

// --------------------------------------------------------

linkModalMap.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupModalMap.classList.add("modal-animation");
	overlay.style.display = "flex";
	popupModalMap.style.display = "block";
});

closeModalMap.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupModalMap.style.display = "none";
	overlay.style.display = "none";
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (overlay.style.display = "flex") {
			evt.preventDefault();
			popupModalMap.style.display = "none";
			overlay.style.display = "none";
		}
	}
});
