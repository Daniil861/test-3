var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
if (isIE()) {
	document.querySelector('html').classList.add('ie');
}
if (isMobile.any()) {
	document.querySelector('html').classList.add('_touch');
}

// Получить цифры из строки
//parseInt(itemContactpagePhone.replace(/[^\d]/g, ''))

function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});

window.addEventListener("load", function () {
	if (document.querySelector('body')) {
		setTimeout(function () {
			document.querySelector('body').classList.add('_loaded');
		}, 0);
	}
});

function fullVHfix() {
	const fullScreens = document.querySelectorAll('[data-fullscreen]');
	if (fullScreens.length && isMobile.any()) {
		window.addEventListener('resize', fixHeight);
		function fixHeight() {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		}
		fixHeight();
	}
}
fullVHfix();

// Кнопки plus / minus - добавление/удаление 100 points в bet
const wrapper = document.querySelector('.wrapper');
const bet_inp = document.querySelector('.footer-actions__input_bet');
const minus_btn = document.querySelector('.footer-actions__button_minus');
const plus_btn = document.querySelector('.footer-actions__button_plus');
const preloader = document.querySelector('.preloader');
const terms = document.querySelector('.preloader__terms');
const privacy = document.querySelector('.preloader__privacy');
const acces_preloader = document.querySelector('.acces-preloader');
const lobby_button = document.querySelector('.header-info__button-lobby');

if (sessionStorage.getItem('preloader')) {
	if (document.querySelector('.preloader')) {
		document.querySelector('.preloader').classList.add('_hide');
	}
	document.querySelector('.wrapper').classList.add('_visible');
}

//Объявляем слушатель событий "клик" всего документа
document.addEventListener('click', (e) => {
	const targetElement = e.target;
	if (targetElement.closest('.footer-actions__button_minus')) {
		if (bet_inp.value >= 100) {
			bet_inp.value = bet_inp.value - 100;
		}
	}
	if (targetElement.closest('.footer-actions__button_plus')) {
		if (bet_inp.value >= 0) {
			bet_inp.value = +bet_inp.value + 100;
		}
	}
	if (targetElement.closest('.acces-preloader__play')) {
		preloader.classList.add('_hide');
		wrapper.classList.add('_visible');
		sessionStorage.setItem('preloader', true);
	}
	if (targetElement.classList.contains('acces-preloader__terms')) {
		acces_preloader.classList.add('_hide');
		terms.classList.add('_visible');
	}
	if (targetElement.classList.contains('acces-preloader__privacy')) {
		acces_preloader.classList.add('_hide');
		privacy.classList.add('_visible');
	}
	if (targetElement.closest('.preloader__close')) {
		if (terms.classList.contains('_visible')) {
			terms.classList.remove('_visible');
		}
		if (privacy.classList.contains('_visible')) {
			privacy.classList.remove('_visible');
		}
		acces_preloader.classList.remove('_hide');
	}
})

//========================================================================================================================================================
// Slotmashine

// Random Time
var minTime = 500;
var maxTime = 2000;
function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}
var casino1 = document.querySelector('#legends1');
var casino2 = document.querySelector('#legends2');
var casino3 = document.querySelector('#legends3');
var casino4 = document.querySelector('#legends4');
if (casino1 && casino2 && casino3 && casino4) {
	var mcasino1 = new SlotMachine(casino1, {
		active: 0,
		delay: 100,
	});
	var mcasino2 = new SlotMachine(casino2, {
		active: 2,
		delay: 100,
	});
	var mcasino3 = new SlotMachine(casino3, {
		active: 1,
		delay: 100,
	});
	var mcasino4 = new SlotMachine(casino4, {
		active: 5,
		delay: 100,
	});

	function gameSlotTwo() {
		mcasino1.shuffle(9999);
		mcasino2.shuffle(9999);
		mcasino3.shuffle(9999);
		mcasino4.shuffle(9999);
		setTimeout(() => mcasino1.stop(), getRandomArbitrary(minTime, maxTime));
		setTimeout(() => mcasino2.stop(), getRandomArbitrary(minTime, maxTime));
		setTimeout(() => mcasino3.stop(), getRandomArbitrary(minTime, maxTime));
		setTimeout(() => mcasino4.stop(), getRandomArbitrary(minTime, maxTime));
	}
}


// Второе казино
var casino5 = document.querySelector('#fallen1');
var casino6 = document.querySelector('#fallen2');
var casino7 = document.querySelector('#fallen3');
var casino8 = document.querySelector('#fallen4');
var casino9 = document.querySelector('#fallen5');
if (casino5 && casino6 && casino7 && casino8 && casino9) {
	var mcasino5 = new SlotMachine(casino5, {
		active: 1,
		delay: 100,
	});
	var mcasino6 = new SlotMachine(casino6, {
		active: 2,
		delay: 100,
	});
	var mcasino7 = new SlotMachine(casino7, {
		active: 6,
		delay: 100,
	});
	var mcasino8 = new SlotMachine(casino8, {
		active: 0,
		delay: 100,
	});
	var mcasino9 = new SlotMachine(casino9, {
		active: 4,
		delay: 100,
	});

	function gameSlotThree() {
		mcasino5.shuffle(9999);
		mcasino6.shuffle(9999);
		mcasino7.shuffle(9999);
		mcasino8.shuffle(9999);
		mcasino9.shuffle(9999);

		setTimeout(() => mcasino5.stop(), getRandomArbitrary(minTime, maxTime));
		setTimeout(() => mcasino6.stop(), getRandomArbitrary(minTime, maxTime));
		setTimeout(() => mcasino7.stop(), getRandomArbitrary(minTime, maxTime));
		setTimeout(() => mcasino8.stop(), getRandomArbitrary(minTime, maxTime));
		setTimeout(() => mcasino9.stop(), getRandomArbitrary(minTime, maxTime));

	}
}

// Объявляем событие клик на кнопках, запускаем необходимую слотмашину.
var casinoAutoSpin;
var casinoGoldAutoSpin;
var casinoAgentJaneAutoSpin;
if (document.querySelector('#spin')) {
	document.querySelector('#spin').addEventListener('click', () => {
		if (casino1 && casino2 && casino3 && casino4) {
			clearInterval(casinoAutoSpin);
			gameSlotTwo();
		}
		if (casino5 && casino6 && casino7 && casino8 && casino8) {
			clearInterval(casinoAutoSpin);
			gameSlotThree();
		}
	})
}

//Auto spin
if (document.querySelector('#bet')) {
	document.querySelector('#bet').addEventListener('click', () => {
		if (casino1 && casino2 && casino3 && casino4) {
			gameSlotTwo();
			let casinoAutoSpinCount = 0;
			casinoAutoSpin = setInterval(function () {
				casinoAutoSpinCount++;
				if (casinoAutoSpinCount < 10) {
					gameSlotTwo();
				} else {
					clearInterval(casinoAutoSpin);
				}
			}, 4000);
		}
		if (casino5 && casino6 && casino7 && casino8 && casino8) {
			gameSlotThree();
			let casinoAutoSpinCount = 0;
			casinoAutoSpin = setInterval(function () {
				casinoAutoSpinCount++;
				if (casinoAutoSpinCount < 10) {
					gameSlotThree();
				} else {
					clearInterval(casinoAutoSpin);
				}
			}, 4000);
		}
	})
}


