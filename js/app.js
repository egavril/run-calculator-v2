var distanceInput = document.getElementById('distanceInput');
var hoursInput = document.getElementById('hoursInput');
var minutesInput = document.getElementById('minutesInput');
var secondsInput = document.getElementById('secondsInput');
var calculateButton = document.getElementById('calculateButton');
var paceInput = document.getElementById("paceInput")

distanceInput.addEventListener("keyup", calculateStats);
hoursInput.addEventListener("keyup", calculateStats);
minutesInput.addEventListener("keyup", calculateStats);
secondsInput.addEventListener("keyup", calculateStats);
paceInput.addEventListener("keyup", calculateStats);

function calculateStats() {

	// convert input strings to number values
	var miles = Number(distanceInput.value);
	var	hours = Number(hoursInput.value);
	var	minutes = Number(minutesInput.value);
	var	seconds = Number(secondsInput.value);

  if (!miles)
    return paceInput.value = 0;

	// convert to minutes per mile
	var totalMinutes = ((hours * 60) + minutes + (seconds / 60)),
			pace = (totalMinutes / miles),
			paceMinutes = Math.floor(pace),
			paceSeconds = Math.round((pace - paceMinutes) * 60);

	if (paceSeconds < 10) {
		paceSeconds = '0' + paceSeconds;
	}

	return paceInput.value = paceMinutes + ':' + paceSeconds;
}
