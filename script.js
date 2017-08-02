	//document.getElementById("demo").addEventListener("click", myFunction);

	var audioAlert = document.getElementById("myAudio");

	//-- TIMER MINUTES --//

	//The variables that will never change
	var userHours = 0;
	var userMinutes = 25;
	var userSeconds = 0;

	//The variables that will countdown and change
	var countdownHours = userHours;
	var countdownMinutes = userMinutes;
	var countdownSeconds = userSeconds;


	//-- HTML SELECT --//
	var hoursHtml = document.getElementById("showHours");
	var minutesHtml = document.getElementById("showMinutes");
	var secondsHtml = document.getElementById("showSeconds");

	var showHoursHtml = document.getElementById("hours");
	var showMinutesHtml = document.getElementById("minutes");
	var showSecondsHtml = document.getElementById("seconds");

	//-- WORK TIMER --//
	var date = new Date();

	var setMinutes = date.setHours(countdownHours, countdownMinutes, countdownSeconds);

	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();

	hoursHtml.innerHTML = checkTime(hours);
	minutesHtml.innerHTML = checkTime(minutes);
	secondsHtml.innerHTML = checkTime(seconds);

	showHoursHtml.innerHTML = checkTime(hours);
	showMinutesHtml.innerHTML = checkTime(minutes);
	showSecondsHtml.innerHTML = checkTime(seconds);


	//-- BREAK TIMER  --//

	//The variables that will never change
	var breakHours = 0;
	var breakMinutes = 5;
	var breakSeconds = 0;

	//The variables that will countdown and change
	var countDownBreakHours = breakHours;
	var countDownBreakMinutes = breakMinutes;
	var countDownBreakSeconds = breakSeconds;

	var breakHoursHtml = document.getElementById("breakHours");
	var breakMinutesHtml = document.getElementById("breakMinutes");
	var breakSecondsHtml = document.getElementById("breakSeconds");

	var showBreakHoursHtml = document.getElementById("showBreakHours");
	var showBreakMinutesHtml = document.getElementById("showBreakMinutes");
	var showBreakSecondsHtml = document.getElementById("showBreakSeconds");


	var breakDate = new Date();

	var setBreakMinutes = date.setHours(countDownBreakHours, countDownBreakMinutes, countDownBreakSeconds);

	var breakHoursGet = date.getHours();
	var breakMinutesGet = date.getMinutes();
	var breakSecondsGet = date.getSeconds();

	breakHoursHtml.innerHTML = checkTime(breakHoursGet);
	breakMinutesHtml.innerHTML = checkTime(breakMinutesGet);
	breakSecondsHtml.innerHTML = checkTime(breakSecondsGet);

	showBreakHoursHtml.innerHTML = checkTime(breakHoursGet);
	showBreakMinutesHtml.innerHTML = checkTime(breakMinutesGet);
	showBreakSecondsHtml.innerHTML = checkTime(breakSecondsGet);



	var t;
	var timer_is_on = 0;

	function timeControl(breakOrTimer, plusOrMinus) {
		if (breakOrTimer == 'timer') {
			if (plusOrMinus == "+") {
				if (timer_is_on != 1) {
					stopCount();

					userMinutes += 1;
					countdownMinutes += 1;

					date = new Date();
					setMinutes = date.setHours(countdownHours, countdownMinutes, countdownSeconds = 0);
					hours = date.getHours();
					minutes = date.getMinutes();
					seconds = date.getSeconds();

					hoursHtml.innerHTML = checkTime(hours);
					minutesHtml.innerHTML = checkTime(minutes);
					secondsHtml.innerHTML = checkTime(seconds);

					showHoursHtml.innerHTML = checkTime(hours);
					showMinutesHtml.innerHTML = checkTime(minutes);
					showSecondsHtml.innerHTML = checkTime(seconds);

					if (minutes == 59) {
						hours = hours + 1;
					}
				}
			} else if (plusOrMinus == "-") {
				if (timer_is_on != 1) {
					if (userMinutes == 1) {
						stopCount();
						userMinutes = 1;
						userSeconds = 0;
						return;
					}

					userMinutes -= 1;
					countdownMinutes -= 1;

					date = new Date();

					setMinutes = date.setHours(countdownHours, countdownMinutes, countdownSeconds = 0)

					hours = date.getHours();
					minutes = date.getMinutes();
					seconds = date.getSeconds();

					hoursHtml.innerHTML = checkTime(hours);
					minutesHtml.innerHTML = checkTime(minutes);
					secondsHtml.innerHTML = checkTime(seconds);

					showHoursHtml.innerHTML = checkTime(hours);
					showMinutesHtml.innerHTML = checkTime(minutes);
					showSecondsHtml.innerHTML = checkTime(seconds);
					console.log(userMinutes);
					console.log(countdownMinutes);
				}
			}
		} else if (breakOrTimer == 'break') {
			if (timer_is_on != 1) {
				if (plusOrMinus == "+") {
					breakMinutes += 1;
					countDownBreakMinutes += 1;

					breakDate = new Date();
					setBreakMinutes = date.setHours(countDownBreakHours, countDownBreakMinutes, countDownBreakSeconds = 0);

					breakHoursGet = date.getHours();
					breakMinutesGet = date.getMinutes();
					breakSecondsGet = date.getSeconds();


					breakHoursHtml.innerHTML = checkTime(breakHoursGet);
					breakMinutesHtml.innerHTML = checkTime(breakMinutesGet);
					breakSecondsHtml.innerHTML = checkTime(breakSecondsGet);

					showBreakHoursHtml.innerHTML = checkTime(breakHoursGet);
					showBreakMinutesHtml.innerHTML = checkTime(breakMinutesGet);
					showBreakSecondsHtml.innerHTML = checkTime(breakSecondsGet);

					if (breakMinutesGet == 59) {
						breakHoursGet = breakHoursGet + 1;
					}
				} else if (plusOrMinus == "-") {
					if (timer_is_on != 1) {
						if (breakMinutes == 1) {
							stopCount();
							breakMinutes = 1;
							breakSeconds = 0;
							return;
						}
						breakMinutes -= 1;
						countDownBreakMinutes -= 1;

						breakDate = new Date();
						setBreakMinutes = date.setHours(countDownBreakHours, countDownBreakMinutes, countDownBreakSeconds = 0);

						breakHoursGet = date.getHours();
						breakMinutesGet = date.getMinutes();
						breakSecondsGet = date.getSeconds();


						breakHoursHtml.innerHTML = checkTime(breakHoursGet);
						breakMinutesHtml.innerHTML = checkTime(breakMinutesGet);
						breakSecondsHtml.innerHTML = checkTime(breakSecondsGet);

						showBreakHoursHtml.innerHTML = checkTime(breakHoursGet);
						showBreakMinutesHtml.innerHTML = checkTime(breakMinutesGet);
						showBreakSecondsHtml.innerHTML = checkTime(breakSecondsGet);
					}
				}
			}
		}
	}


	function timedCount() {

		date = new Date();

		setMinutes = date.setHours(countdownHours, countdownMinutes, countdownSeconds);

		hours = date.getHours();
		minutes = date.getMinutes();
		seconds = date.getSeconds();

		countdownSeconds = countdownSeconds - 1;

		showHoursHtml.innerHTML = checkTime(hours);
		showMinutesHtml.innerHTML = checkTime(minutes);
		showSecondsHtml.innerHTML = checkTime(seconds);

		console.log(userMinutes);

		if (hours == 0 && minutes == 0 && seconds == 0) {
			countDownBreakHours = breakHours;
			countDownBreakMinutes = breakMinutes;
			countDownBreakSeconds = breakSeconds;
			audioAlert.play();
			clearTimeout(t);
			return breakCount();
		}


		t = setTimeout(function() {
			timedCount()
		}, 1000);
	}

	function startCount() {
		if (!timer_is_on) {
			timer_is_on = 1;
			if (hours == 0 && minutes == 0 && seconds == 0) {
				breakCount();

			} else {
				timedCount();
			}
		}
	}

	function stopCount() {
		clearTimeout(t);
		timer_is_on = 0;
	}

	function checkTime(i) {
		if (i < 10) {
			i = "0" + i;
		}
		return i;
	}

	function breakCount() {
		breakDate = new Date();

		setBreakMinutes = date.setHours(countDownBreakHours, countDownBreakMinutes, countDownBreakSeconds);

		breakHoursGet = date.getHours();
		breakMinutesGet = date.getMinutes();
		breakSecondsGet = date.getSeconds();

		countDownBreakSeconds = countDownBreakSeconds - 1;

		showBreakHoursHtml.innerHTML = checkTime(breakHoursGet);
		showBreakMinutesHtml.innerHTML = checkTime(breakMinutesGet);
		showBreakSecondsHtml.innerHTML = checkTime(breakSecondsGet);

		t = setTimeout(function() {
			breakCount()
		}, 1000);

		if (breakHoursGet == 0 && breakMinutesGet == 0 && breakSecondsGet == 0) {
			countdownHours = userHours;
			countdownMinutes = userMinutes;
			countdownSeconds = userSeconds;
			audioAlert.play();
			clearTimeout(t);
			return timedCount();
		}
	}