   	
	
	var hightemp;
	var lowtemp;
	var windspeed;


	var aveTemp = ((hightemp + lowtemp) / 2);
	var s = (Math.pow(windspeed, 0.16));
	var windchill = 35.74 + 0.6215 * aveTemp - 35.75 * s +	0.4275 * aveTemp * s;

	windchill = Math.round(windchill) + "&deg;F";

document.getElementById("windchill").innerHTML = windchill;

