"use strict";

setInterval(() => {
	const date = new Date(2021, 3, 7).getTime();
	let now = new Date();
	let countFrom = new Date(date);
	let timeDifference = (now - date);

	let secondsInADay = 60 * 60 * 1000 * 24;
	let secondsInAHour = 60 * 60 * 1000;

	let days = Math.floor(timeDifference / (secondsInADay) * 1);
	let hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
	let mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
	let secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

	document.querySelector("[data-countdown]").innerHTML = `${days} dni ${hours} godzin ${mins} minut ${secs} sekund temu`;
}, 1000);