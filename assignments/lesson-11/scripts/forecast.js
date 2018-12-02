var forecastRequest = new XMLHttpRequest();

forecastRequest.open('GET','https://api.openweathermap.org/data/2.5/forecast?&id=5604473&mode=xml&units=imperial&appid=8d52f67922af141683a343c685850f05', true);

forecastRequest.send();
	
forecastRequest.onload = function() {	
   var forecastInfo = JSON.parse(forecastRequest.responseText);
    console.log(forecastInfo);
   var arraycontainsMidday;
   var isFirstDay = true;
   
   for (var i=0; i < forecastInfo.cnt; i++)
   {
	   this.dateAndTime = forecastInfo.list[i].dt_txt.substring(10);
	   
	    //if midnight is found
        arraycontainsMidnight = (this.dateAndTime.indexOf("00:00:00") > -1);
   }	   
	
	document.getElementById('Day').innerHTML = forecastInfo.main.rain;
	
	
}

    var arraycontainsMidday;
    this.http.get('https://api.openweathermap.org/data/2.5/forecast?id=3362024&APPID=bbcf57969e78d1300a815765b7d587f0&units=metric').map(res=>res.json()).subscribe(data => {
    this.items = data;
      for(var i = 0; i < this.items.list.length; i++){
        this.dates = this.items.list[i].dt_txt.substring(10);
        this.temps = this.items.list[i].main;
        //if 12 o'clock middat is found
        arraycontainsMidday = (this.dates.indexOf("12:00:00") > -1);
      }

      for(var j = 0; j < this.items.list.length; j++){
        this.temps = this.items.list[j].main.temp;
      }

    })