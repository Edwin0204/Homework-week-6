let i=0
function Click() {

    var newName = document.getElementById("city");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML =newName.value;
    let key = "777b995858df96d8a63d276827cb2cf5";
    let historyEl = document.getElementById("history");
    let searchHistory = JSON.parse(localStorage.getItem("history")) || [];
  
    

    searchHistory.push(newName.value);
    localStorage.setItem("history", JSON.stringify(searchHistory));
    console.log(searchHistory[1]);
     
    for (i=i; i < searchHistory.length; i++) {
        let newPlace = document.createElement("button");
        newPlace.setAttribute("class", "form-control d-block text-center");
        newPlace.innerHTML = searchHistory[i];
        historyEl.appendChild(newPlace);
    }
    

   fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${newName.value}&units=metric&appid=${key}`)
    .then(res => res.json()).then(data => {
        console.log(data);

            for(i = 0; i<40; i=i+7){
                document.getElementById("day" + (i+1) + "temperature").innerHTML = "Temp: " + (data.list[i].main.temp)+ "°";              
                
            }
            for(i = 0; i<40; i=i+7){
                document.getElementById("day" + (i+1) + "wind-speed").innerHTML = "Wind: " + (data.list[i].wind.speed)+ "MPH";
    
            }
            for(i = 0; i<40; i=i+7){
                document.getElementById("day" + (i+1) + "humidity").innerHTML = "humidity: " + (data.list[i].main.humidity)+ "%";
    
            }      
            for(i = 0; i<40; i=i+7){
                document.getElementById("day" + (i+1) + "current-pic").src = "http://openweathermap.org/img/wn/"+
                data.list[i].weather[0].icon
                +".png";
            } 
            for(i = 0; i<40; i=i+7){
                var fecha= (data.list[i].dt_txt)
                 document.getElementById("day" + (i+1)).innerHTML = fecha.split(' ')[0];

    
            }          

            let lat = data.city.coord.lat;
            let lon = data.city.coord.lon;
        
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily,minutely,alerts&appid=${key}`)
            .then(res => res.json()).then(data => {
                console.log(data);
                document.getElementById("day1UV-index").innerHTML = "UV index: " + (data.current.uvi);
            });



    });
    
console.log(localStorage);
  

}
    
    
   function Clear(){
    localStorage.clear();
    searchHistory = [];
    window.location.reload();
   };

