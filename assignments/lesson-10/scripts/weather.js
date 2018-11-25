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
}

function calculateNext5DayNames()
{
	var d = new Date();
	//var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var daysAbbr = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


	var daysnames = days[d.getDay()];
	var monthsnames = months[d.getMonth()];

	document.getElementById("currentdate").innerHTML = daysnames + ", " + d.getDate() + " " + monthsnames + " " + d.getFullYear();	
}


 