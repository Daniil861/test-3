var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

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

const el = document.querySelector('#machine');
const machine = new SlotMachine(el, {
	active: 0,
	delay: 450,
	auto: 1500
});

// Random Time
let minTime = 500;
let maxTime = 2000;
function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

// Casiono game 2
let casinoGold1 = document.querySelector('#name-1');
let casinoGold2 = document.querySelector('#name-2');
let casinoGold3 = document.querySelector('#name-3');
let casinoGold4 = document.querySelector('#name-4');
if (casinoGold1 && casinoGold2 && casinoGold3 && casinoGold4) {
	let mcasinoGold1 = new SlotMachine(casinoGold1, {
		active: 0,
		delay: 500
	});
	let mcasinoGold2 = new SlotMachine(casinoGold2, {
		active: 1,
		delay: 500
	});
	let mcasinoGold3 = new SlotMachine(casinoGold3, {
		active: 2,
		delay: 500
	});
	let mcasinoGold4 = new SlotMachine(casinoGold4, {
		active: 3,
		delay: 500
	});

	function gameSlotTwo() {
		mcasinoGold1.shuffle(9999);
		mcasinoGold2.shuffle(9999);
		mcasinoGold3.shuffle(9999);
		mcasinoGold4.shuffle(9999);
		setTimeout(() => mcasinoGold1.stop(), getRandomArbitrary(minTime, maxTime));
		setTimeout(() => mcasinoGold2.stop(), getRandomArbitrary(minTime, maxTime));
		setTimeout(() => mcasinoGold3.stop(), getRandomArbitrary(minTime, maxTime));
		setTimeout(() => mcasinoGold4.stop(), getRandomArbitrary(minTime, maxTime));
	}
}
// Spint Slot
let casinoAutoSpin;
let casinoGoldAutoSpin;
let casinoAgentJaneAutoSpin;
document.querySelector('.button-spin-2').addEventListener('click', () => {
	if (casinoGold1 && casinoGold2 && casinoGold3 && casinoGold4) {
		clearInterval(casinoGoldAutoSpin);
		gameSlotTwo()
		//count = 3;
		//mcasinoGold1.shuffle(9999);
		//mcasinoGold2.shuffle(9999);
		//mcasinoGold3.shuffle(9999);
		//mcasinoGold4.shuffle(9999);
		//setTimeout(() => mcasinoGold1.stop(), getRandomArbitrary(minTime, maxTime));
		//setTimeout(() => mcasinoGold2.stop(), getRandomArbitrary(minTime, maxTime));
		//setTimeout(() => mcasinoGold3.stop(), getRandomArbitrary(minTime, maxTime));
		//setTimeout(() => mcasinoGold4.stop(), getRandomArbitrary(minTime, maxTime));
	}
})
