	var high = 90;
	var low = 66;
	var windSpeed = 5;


	var avereageTemp = ((high + low) / 2);
	var s = (Math.pow(windSpeed, 0.16));
	var windchill = 35.74 + (0.6215 * avereageTemp) - (35.75 * windSpeed) +	(0.4275 * avereageTemp * s);

	windchill = Math.round(windchill) + "&deg;F";

document.getElementById("windchill").innerHTML = windchill;

