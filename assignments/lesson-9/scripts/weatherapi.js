weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET','https://api.openweathermap.org/data/2.5/weather?&id=5604473&units=imperial&APPID=8d52f67922af141683a343c685850f05', true);

weatherRequest.send();

weatherRequest.onload =  function () {
    weatherData = JSON.parse(weatherRequest.responseText);
	console.log(weatherInfo);
	
	document.getElementById('city').innerHTML = weatherInfo.name;
    document.getElementById('current-temp').innerHTML = weatherInfo.main.temp;
    document.getElementById('description').innerHTML = weatherInfo.weather["0"].description;
	document.getElementById('humidity').innerHTML = weatherInfo.main.humidity + '%';
	document.getElementById('hightemp').innerHTML = weatherInfo.main.temp_max;
    document.getElementById('lowtemp').innerHTML = weatherInfo.main.temp_min;
    document.getElementById('windspeed').innerHTML = weatherInfo.wind.speed;
}