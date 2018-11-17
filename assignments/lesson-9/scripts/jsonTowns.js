var section = document.querySelector('section');
var requestURL = 'https://parkinson-kristen.github.io/assignments/lesson-9/towndata.json';
var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
        
    request.onload = function() {
    var townIntro = request.response;
    showTownIntro(townIntro);
        }
        
    function showTownIntro(jsonObj) {
        var intro = jsonObj['towns'];
        for (var i = 0; i < intro.length; i++) {		
            var myArticle = document.createElement('article');
            var myH2 = document.createElement('h2');
            var myH3 = document.createElement('h3');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p')

            myH2.textContent = intro[i].name;
            myH3.textContent = 'Motto: ' + intro[i].motto;
            myPara1.textContent = 'Year Founded: ' + intro[i].yearFounded;
            myPara2.textContent = 'Population: ' + intro[i].currentPopulation;
            myPara3.textContent = 'Average Rainfall: ' + intro[i].averageRainfall;

            myArticle.appendChild(myH2);
            myArticle.appendChild(myH3);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);

            section.appendChild(myArticle);
        }        
    }