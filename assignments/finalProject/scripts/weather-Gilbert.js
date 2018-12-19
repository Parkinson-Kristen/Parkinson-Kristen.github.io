var weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET','https://api.openweathermap.org/data/2.5/weather?&id=5295903&units=imperial&APPID=8d52f67922af141683a343c685850f05', true);

weatherRequest.send();


weatherRequest.onload = function(){
   var weatherInfo = JSON.parse(weatherRequest.responseText);
    console.log(weatherInfo);
	
	document.getElementById('city').innerHTML = weatherInfo.name;
    document.getElementById('current').innerHTML = weatherInfo.main.temp;
    document.getElementById('description').innerHTML = weatherInfo.weather["0"].description;

	var weatherIcon = 'https://openweathermap.org/img/w/' + weatherInfo.weather["0"].icon + '.png';
    document.getElementById('weatherimage').src = weatherIcon;
	
}