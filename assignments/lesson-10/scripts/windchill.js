   	var high = 90;
	var low = 66;
	var windSpeed = 5;


	var aveTemp = ((high + low) / 2);
	var s = (Math.pow(windSpeed, 0.16));
	var windchill = 35.74 + (0.6215 * aveTemp) - (35.75 * s) +	(0.4275 * aveTemp * s);

	windchill = Math.round(windchill) + "&deg;F";

document.getElementById("windchill").innerHTML = windchill;

