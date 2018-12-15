var section = document.querySelector('section');
var requestURL = 'https://parkinson-kristen.github.io/assignments/lesson-11/templedata.json';
var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
        
    request.onload = function() {
    var templeInfo = request.response;
    showTempledata(templeInfo);
        }
        
    function showTempledata(jsonObj) {
        var dataInfo = jsonObj['temples'];
        for (var i = 0; i < dataInfo.length; i++) {
            
            if (i === 3) {
                continue;
            }
				
            var myArticle = document.createElement('article');
            var myH2 = document.createElement('h2');
			var myImage = document.createElement('img');
            var myH3 = document.createElement('h3');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
			var myPara4 = document.createElement('p');
            var myPara5 = document.createElement('p');
            var myPara6 = document.createElement('p');
			var myPara7 = document.createElement('p');
            var myPara8 = document.createElement('p');
            var myPara9 = document.createElement('p');
			var myPara10 = document.createElement('p');
			var myPara11 = document.createElement('p');
            var myPara12 = document.createElement('p');
            var myPara13 = document.createElement('p');
			var myPara14 = document.createElement('p');

            myH2.textContent = dataInfo[i].name;
			myImage.textContent = dataInfo[i].imgPath;
			myImage.setAttribute("src", dataInfo[i].imgPath);
				/*myImage.setAttribute("width", "304");
				myImage.setAttribute("height", "228");
				myImage.setAttribute("alt", "Photo description");	*/		
            myH3.textContent = 'Address: ' + dataInfo[i].address;
            myPara1.textContent = 'Phone Number: ' + dataInfo[i].telephone;
            myPara2.textContent = 'email: ' + dataInfo[i].email;
            myPara3.textContent = 'Services: ' + dataInfo[i].services;
			myPara4.textContent = 'History: ' + dataInfo[i].history;
			myPara5.textContent = 'Temple Facts: ' + dataInfo[i].templeFacts;
			myPara6.textContent = 'Year Announces: ' + dataInfo[i].yearAnnounced;
			myPara7.textContent = 'Ground Breaking: ' + dataInfo[i].groundbreaking;
			myPara8.textContent = 'Dedicated: ' + dataInfo[i].dedicated;
			myPara9.textContent = 'Ordinance Schedule - Endowments: ' + dataInfo[i].endowments;
			myPara10.textContent = 'Ordinance Schedule - Initiatory: ' + dataInfo[i].initiatory;
			myPara11.textContent = 'Ordinance Schedule - Baptism: ' + dataInfo[i].baptism;
			myPara12.textContent = 'Ordinance Schedule - Sealings: ' + dataInfo[i].sealings
			myPara13.textContent = 'Temple Closures: ' + dataInfo[i].templeClosures;
			myPara14.textContent = 'Additional Information: ' + dataInfo[i].addlInformation;

            myArticle.appendChild(myH2);
			myArticle.appendChild(myImage);
            myArticle.appendChild(myH3);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);

            section.appendChild(myArticle);
        }        
    }