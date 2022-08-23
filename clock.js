// <div id="clock"></div> para que se vea el reloj

// <script src="clock.js"></script>

// CSS

// #clock {
//     font-family: system-ui;
//     font-size: 2em;
//     width: 70vw;
//     margin: 30vh;
//     text-align: center;
//     border: 2px solid black;
//     border-radius: 20px;
// }


setInterval(showTime, 1000);
function showTime() {
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	am_pm = " AM";

	if (hour > 12) {
		hour -= 12;
		am_pm = " PM";
	}
	if (hour == 0) {
		hr = 12;
		am_pm = " AM";
	}

	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime = hour + ":"
			+ min + ":" + sec + am_pm;

	document.getElementById("clock")
			.innerHTML = currentTime;
}
showTime();
