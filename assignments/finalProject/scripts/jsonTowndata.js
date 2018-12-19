var section = document.querySelector('section');
var requestURL = 'https://parkinson-kristen.github.io/assignments/finalProject/templedata.json';
var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
        
    request.onload = function() {
    var cityInfo = request.response;
    showCitydata(cityInfo);
        }
        
    function showCitydata(jsonObj) {
        var townInfo = jsonObj['towns'];
        for (var i = 0; i < townInfo.length; i++) {
            
            if (i === 4) {
                continue;
            }
				
            var myArticle = document.createElement('article');
            var myH2 = document.createElement('h2');
			var myImage = document.createElement('img');
            var myH3 = document.createElement('h3');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p')

            myH2.textContent = townInfo[i].name;
			myImage.textContent = townInfo[i].imgPath;
			myImage.setAttribute("src", townInfo[i].imgPath);
				/*myImage.setAttribute("width", "304");
				myImage.setAttribute("height", "228");
				myImage.setAttribute("alt", "Photo description");	*/		
            myH3.textContent = 'Motto: ' + townInfo[i].motto;
            myPara1.textContent = 'Year Founded: ' + townInfo[i].yearFounded;
            myPara2.textContent = 'Population: ' + townInfo[i].currentPopulation;
            myPara3.textContent = 'Average Rainfall: ' + townInfo[i].averageRainfall;

            myArticle.appendChild(myH2);
			myArticle.appendChild(myImage);
            myArticle.appendChild(myH3);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);

            section.appendChild(myArticle);
        }        
    }