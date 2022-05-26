function GetInfo() {

    var newName = document.getElementById("city");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML =newName.value;
    let Key = "777b995858df96d8a63d276827cb2cf5";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${newName.value}&units=metric&appid=${Key}`)
    .then(res => res.json()).then(data => {
        console.log(data);

    });
    
}
    

    
    
   

