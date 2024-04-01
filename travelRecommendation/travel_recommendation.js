const xhrBtn = document.getElementById("btnSearch")
const clearBtn = document.getElementById("btnClear")
const userInput = document.getElementById("cityInput")



function getText() {
    var taskText = userInput.value.trim();
    if (taskText.toLowerCase() == "beaches") {
        taskText = "beach";
    } else if (taskText.toLowerCase() == "cities" || taskText.toLowerCase() == "country") {
        taskText = "city";
    } else if (taskText.toLowerCase() == "temples") {
        taskText = "temple";
    }
    return taskText.toLowerCase()
}

xhrBtn.addEventListener("click", function () {
    console.log(getText())
    var xhr = new XMLHttpRequest();

    var url = 'travel_recommendation_api.json';

    xhr.open('GET', url, true);

    xhr.responseType = 'json';

    xhr.onload = function () {
        var resultsDiv = document.getElementById("containerResults")

        switch (getText()) {
            case "city":
                var country = xhr.response.countries;
                country.forEach(function (city) {
                    city.cities.forEach(function (citiesA) {
                        var infoResult = document.createElement('div');
                        infoResult.classList.add('infoResult');
                        var resultimg = document.createElement('img');
                        var resulth2 = document.createElement('h2');
                        var resultp = document.createElement('p');
                        const resultbutton = document.createElement('button');
                        resultbutton.textContent = "visit"

                        resultimg.src = citiesA.imageUrl
                        resulth2.textContent = citiesA.name
                        resultp.textContent = citiesA.description

                        infoResult.appendChild(resultimg)
                        infoResult.appendChild(resulth2)
                        infoResult.appendChild(resultp)
                        infoResult.appendChild(resultbutton)
                        resultsDiv.appendChild(infoResult)
                    })
                    console.log(city.name)
                })
                break;
            case "temple":
                var temples = xhr.response.temples;
                temples.forEach(function (temple) {
                    var infoResult = document.createElement('div');
                    infoResult.classList.add('infoResult');
                    var resultimg = document.createElement('img');
                    var resulth2 = document.createElement('h2');
                    var resultp = document.createElement('p');
                    const resultbutton = document.createElement('button');
                    resultbutton.textContent = "visit"

                    resultimg.src = temple.imageUrl
                    resulth2.textContent = temple.name
                    resultp.textContent = temple.description

                    infoResult.appendChild(resultimg)
                    infoResult.appendChild(resulth2)
                    infoResult.appendChild(resultp)
                    infoResult.appendChild(resultbutton)
                    resultsDiv.appendChild(infoResult)
                    console.log(temple.name)
                })
                break;

            case "beach":
                var beaches = xhr.response.beaches;
                beaches.forEach(function (beach) {
                    var infoResult = document.createElement('div');
                    infoResult.classList.add('infoResult');
                    var resultimg = document.createElement('img');
                    var resulth2 = document.createElement('h2');
                    var resultp = document.createElement('p');
                    const resultbutton = document.createElement('button');
                    resultbutton.textContent = "visit"

                    resultimg.src = beach.imageUrl
                    resulth2.textContent = beach.name
                    resultp.textContent = beach.description

                    infoResult.appendChild(resultimg)
                    infoResult.appendChild(resulth2)
                    infoResult.appendChild(resultp)
                    infoResult.appendChild(resultbutton)
                    resultsDiv.appendChild(infoResult)
                    console.log(beach.name)
                })
                break;
        }




    }

    xhr.send()
});

function clearResults() {
    var resultsDiv = document.getElementById("containerResults")
    while (resultsDiv.firstChild) {
        resultsDiv.removeChild(resultsDiv.firstChild);
    }
}

