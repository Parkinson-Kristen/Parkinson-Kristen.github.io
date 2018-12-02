fetch
('https://api.openweathermap.org/data/2.5/forecast?&id=5607916&units=imperial&APPID=8d52f67922af141683a343c685850f05'
)
	.then(function(response){
		return response.json();
	})
	.then(function(jsObject) {
		console.log(jsObject);
		
		// iterate thru list of forecast and dates looking for 15:00 (3:00 pm) records and record index
		let tempforecast = [];
		let day = 1;
		let daysAbbr = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
		let icon = [];
		let daysName = [];
		jsObject.list.forEach(x => {
			if (x.dt_txt.includes('15:00:00')) {
				tempforecast[day] = x.main.temp_max;
            icon[day] = x.weather[0].icon;
			var d = new Date(x.dt_txt);
			daysName[day] = daysAbbr[d.getDay()];			
				day++;
			}
		});
		
		for (var i = 1; i <= 5; i++) {
			document.getElementById('tempforecastday' + i) //need a tempforecast1....5 in your html for temperature
			.innerHTML = Math.round((tempforecast[i]*1.8)+32);			
			document.getElementById('forecastday' + i) //need a forecast1....5 in your html for day name
			.innerHTML = daysName[i];
            var img = document.createElement("img");
            img.src = "https://openweathermap.org/img/w/"+icon[i]+".png";
            var src = document.getElementById('icon' + i); //need a icon1....5 for your icon image
			src.appendChild(img); 			
		}
	});