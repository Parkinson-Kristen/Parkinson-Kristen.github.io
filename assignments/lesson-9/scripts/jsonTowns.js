var section = document.querySelector('section');
var requestURL = 'https://parkinson-kristen.github.io/assignments/lesson-9/towndata.json';
var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
        
    request.onload = function() {
    var townInfo = request.response;
    showTownInfo(townInfo);
        }
        
    function showTownInfo(jsonObj) {
        var town = jsonObj['towns'];
        for (var i = 0; i < town.length; i++) {
            
            if (i === 2) {
                continue;
            }
            var myArticle = document.createElement('article');
            var myH2 = document.createElement('h2');
            var myH3 = document.createElement('h3');
			var myImage = document.getElementById('myImg').src;
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            var myList = document.createElement('ul');

            myH2.textContent = town[i].name;
			myImage.textContent = town[i].imgPath;
            myH3.textContent = 'Motto: ' + town[i].motto;
            myPara1.textContent = 'Year Founded: ' + town[i].yearFounded;
            myPara2.textContent = 'Population: ' + town[i].currentPopulation;
            myPara3.textContent = 'Average Rainfall: ' + town[i].averageRainfall;

            myArticle.appendChild(myH2);
			myArticle.appendChild(myImg);
            myArticle.appendChild(myH3);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);

            section.appendChild(myArticle);
        }        
    }