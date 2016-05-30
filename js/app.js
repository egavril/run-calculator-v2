var distanceInput = document.getElementById('distanceInput');
var hoursInput = document.getElementById('hoursInput');
var minutesInput = document.getElementById('minutesInput');
var secondsInput = document.getElementById('secondsInput');
var calculateButton = document.getElementById('calculateButton');
var paceOutput = document.getElementById('pace');


// calculateButton.addEventListener('click', function() {

document.getElementById("distanceInput").addEventListener("keyup", calculateStats);

document.getElementById("hoursInput").addEventListener("keyup", calculateStats);

document.getElementById("minutesInput").addEventListener("keyup", calculateStats);

document.getElementById("secondsInput").addEventListener("keyup", calculateStats);

document.getElementById("paceInput").addEventListener("keyup", calculateStats);

function calculateStats() {

	//convert input strings to number values
	var miles = parseFloat(distanceInput.value); 
	var	hours = parseFloat(hoursInput.value);
	var	minutes = parseFloat(minutesInput.value);
	var	seconds = parseFloat(secondsInput.value);

	//convert to minutes per mile
	var totalMinutes = ((hours * 60) + minutes + (seconds / 60)),
			pace = (totalMinutes / miles), 
			paceMinutes = Math.floor(pace), 
			paceSeconds = Math.round((pace - paceMinutes) * 60);

	if (paceSeconds < 10) {
		paceSeconds = '0' + paceSeconds;
	}
	
	document.getElementById('paceInput').innerHTML = paceMinutes + ':' + paceSeconds;

};