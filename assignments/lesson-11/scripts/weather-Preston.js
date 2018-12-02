var weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET','https://api.openweathermap.org/data/2.5/weather?&id=5604473&units=imperial&APPID=8d52f67922af141683a343c685850f05', true);

weatherRequest.send();


weatherRequest.onload = function(){
   var weatherInfo = JSON.parse(weatherRequest.responseText);
    console.log(weatherInfo);
	
	document.getElementById('city').innerHTML = weatherInfo.name;
    document.getElementById('current').innerHTML = weatherInfo.main.temp;
    document.getElementById('description').innerHTML = weatherInfo.weather["0"].description;
	document.getElementById('humidity').innerHTML = weatherInfo.main.humidity + '%';
	document.getElementById('hightemp').innerHTML = weatherInfo.main.temp_max;
    document.getElementById('lowtemp').innerHTML = weatherInfo.main.temp_min;
    document.getElementById('windspeed').innerHTML = weatherInfo.wind.speed;
	
	if (weatherInfo.rain)
	{
		document.getElementById('precipitation').innerHTML = weatherInfo.rain;
	}

	if (weatherInfo.snow)
	{
		document.getElementById('precipitation').innerHTML = weatherInfo.snow;
	}
	else
	{
		document.getElementById('precipitation').innerHTML = 0;
	}	
	
	var weatherIcon = 'https://openweathermap.org/img/w/' + weatherInfo.weather["0"].icon + '.png';
    document.getElementById('weatherimage').src = weatherIcon;
	
	var hightemp = weatherInfo.main.temp_max;
	var lowtemp = weatherInfo.main.temp_min;
	var windspeed = weatherInfo.wind.speed;


	var aveTemp = ((hightemp + lowtemp) / 2);
	var s = (Math.pow(windspeed, 0.16));
	var windchill = 35.74 + 0.6215 * aveTemp - 35.75 * s +	0.4275 * aveTemp * s;

	windchill = Math.round(windchill);

document.getElementById("windchill").innerHTML = windchill;
}


 