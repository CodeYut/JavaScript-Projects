window.addEventListener('load', ()=> {
    let long;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const api = `https://api.openweathermap.org/data/2.5/onecall?lat={${lat}}&lon={${long}}&appid=
            {93838ab27db6fb6f2e90f517b224a7a0}`;

            fetch(api)
                .then(data => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                })
        });

            

    }else{
        h1.textContext = "You may have to turn on your location or change browsers!"
    }
});
