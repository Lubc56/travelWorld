const xhrBtn = document.getElementById("btnSearch")
const userInput = document.getElementById("cityInput")


function getText() {
    var taskText = userInput.value.trim();
    if(taskText.toLowerCase() == "beaches"){
        taskText="beach";
    } else if (taskText.toLowerCase() == "cities" || taskText.toLowerCase() == "country" ){
        taskText="city";
    } else if (taskText.toLowerCase() == "temples"){
        taskText="temple";
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


        switch (getText()) {
            case "city":
                var cities = xhr.response.countries;
                cities.forEach(function (city) {
                    console.log(city.name)
                })
                break;
            case "temple":
                var temples = xhr.response.temples;
                temples.forEach(function (temple) {
                    console.log(temple.name)
                })
                break;

            case "beach":
                var beaches = xhr.response.beaches;
                beaches.forEach(function (beach) {
                    console.log(beach.name)
                })
                break;
        }




    }

    xhr.send()
});



