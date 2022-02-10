const el = document.querySelector('#machine');
const machine = new SlotMachine(el, {
	active: 0,
	delay: 450,
	auto: 1500
});

// Random Time
var minTime = 500;
var maxTime = 2000;
function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

// Casiono game 2
var casinoGold1 = document.querySelector('#name1');
var casinoGold2 = document.querySelector('#name2');
var casinoGold3 = document.querySelector('#name3');
var casinoGold4 = document.querySelector('#name4');
if (casinoGold1 && casinoGold2 && casinoGold3 && casinoGold4) {
	var mcasinoGold1 = new SlotMachine(casinoGold1, {
		active: 0,
		delay: 500
	});
	var mcasinoGold2 = new SlotMachine(casinoGold2, {
		active: 1,
		delay: 500
	});
	var mcasinoGold3 = new SlotMachine(casinoGold3, {
		active: 2,
		delay: 500
	});
	var mcasinoGold4 = new SlotMachine(casinoGold4, {
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
var casinoAutoSpin;
var casinoGoldAutoSpin;
var casinoAgentJaneAutoSpin;
document.querySelector('#spinSlot').addEventListener('click', () => {
	if (casinoGold1 && casinoGold2 && casinoGold3 && casinoGold4) {
		// clearInterval(casinoGoldAutoSpin);
		// gameSlotTwo()
		count = 3;
		mcasinoGold1.shuffle(9999);
		mcasinoGold2.shuffle(9999);
		mcasinoGold3.shuffle(9999);
		mcasinoGold4.shuffle(9999);
		setTimeout(() => mcasinoGold1.stop(), getRandomArbitrary(minTime, maxTime));
		setTimeout(() => mcasinoGold2.stop(), getRandomArbitrary(minTime, maxTime));
		setTimeout(() => mcasinoGold3.stop(), getRandomArbitrary(minTime, maxTime));
		setTimeout(() => mcasinoGold4.stop(), getRandomArbitrary(minTime, maxTime));
	}
})
