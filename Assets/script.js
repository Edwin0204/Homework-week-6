function GetInfo() {

    var newName = document.getElementById("city");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML =newName.value;
    let Key = "777b995858df96d8a63d276827cb2cf5";
    var today = new Date();

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${newName.value}&units=metric&appid=${Key}`)
    .then(res => res.json()).then(data => {
        console.log(data);

            for(i = 0; i<6; i++){
                document.getElementById("day" + (i+1) + "temperature").innerHTML = "Temp: " + (data.list[i].main.temp)+ "°";
    
            }
            for(i = 0; i<6; i++){
                document.getElementById("day" + (i+1) + "wind-speed").innerHTML = "Wind: " + (data.list[i].wind.speed)+ "MPH";
    
            }
            for(i = 0; i<6; i++){
                document.getElementById("day" + (i+1) + "humidity").innerHTML = "humidity: " + (data.list[i].main.humidity)+ "%";
    
            }      
            for(i = 0; i<6; i++){
                document.getElementById("day" + (i+1) + "current-pic").src = "http://openweathermap.org/img/wn/"+
                data.list[i].weather[0].icon
                +".png";
            } 
            for(i = 1; i<6; i++){
                 document.getElementById("day" + (i+1)).innerHTML = (data.list[i].dt_txt)
                //document.getElementById("day" + (i+1)).innerHTML =  new Date(data.list[i].dt*1000);
    
            }          


    });
    
}
    

    
    
   

