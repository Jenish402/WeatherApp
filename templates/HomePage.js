let locationVariable;
document.getElementById('search-btn').addEventListener('click', () => {
    let searchInput = document.getElementById('searchBar').value;
    locationVariable = searchInput;

const weatherApi = `http://api.weatherapi.com/v1/current.json?key=4954087548a64399ab854348240110&q=${locationVariable}`;
const futureApi = `http://api.weatherapi.com/v1/forecast.json?key=4954087548a64399ab854348240110&q=${locationVariable}&days=7`;

// fetch(`http://api.weatherapi.com/v1/current.json?key=4954087548a64399ab854348240110&q=${locationVariable}`)
// fetch('http://api.weatherapi.com/v1/forecast.json?key=4954087548a64399ab854348240110&q=LOCATION&days=7')

Promise.all([
    fetch(weatherApi).then((response) => response.json()),
    fetch(futureApi).then((response) => response.json())

])
  .then(([data, futureData]) => {
    let weatherdata1 = data.location;
    let weatherdata2 = data.current;
    let weatherdata3 = data.current.condition;
    let weatherdata4 = weatherdata3.icon;
    // let wfuturedata01 = futureData.forecast.forecastday;
    let wlocationdata = '';
    let wtempraturedata = '';
    let wconditiondata = '';
    let wclouddata = '';
    let whumiditydata ='';
    let wultraviletdata = '';
    let wwindspeeddata = '';
    let wdayornotdata = '';
    // let wforcastdata = '';

        wlocationdata += `
        <div>
            
            <p>${weatherdata1.name}</p>
            
        </div>
        `
        wtempraturedata += `
        <div>
            <p>${weatherdata2.temp_c}°C</p>
        </div>
        `
        wconditiondata += `
        <div>
            <p>${weatherdata3.text}</p>
        </div>
        `
        wclouddata += `
        <div>
            <p>${weatherdata2.humidity}</p>
        </div>
        `
        whumiditydata += `
        <div>
            <p>${weatherdata2.cloud}%</p>
        </div>
        `
        wultraviletdata += `
        <div>
            <p>${weatherdata2.uv}</p>
        </div>
        `
        wwindspeeddata += `
        <div>
            <p>${weatherdata2.wind_kph}kph</p>
        </div>
        `
        wdayornotdata += `
        <div>
            <p>${weatherdata2.is_day}</p>
        </div>
        `


    if(weatherdata2.is_day === 1 ){
        document.getElementById('dayornot').innerHTML = 'Day';
    }
    else{
        document.getElementById('dayornot').innerHTML = 'Night';   
    }

    // wfuturedata01.forEach((day) => {
    //     wforcastdata += `<p>${day.day.avgtemp_c}°C</p>`
    //     document.getElementById('forcasttemp').innerHTML = wforcastdata;
    // })

        document.getElementById('locationName').innerHTML = wlocationdata;
        document.getElementById('carosolcityname').innerHTML = wlocationdata;
        document.getElementById('carosolcitytemp').innerHTML = wtempraturedata;
        document.getElementById('aboutday').innerHTML = wconditiondata;
        document.getElementById('cityweathericon').src = `http:${weatherdata4}`;
        document.getElementById('rainornot').innerHTML = wconditiondata;
        document.getElementById('rainyicon').src = `http:${weatherdata4}`;
        document.getElementById('cloudornot').innerHTML = wclouddata;
        document.getElementById('humidityornot').innerHTML = whumiditydata;
        document.getElementById('ultravioletornot').innerHTML = wultraviletdata;
        document.getElementById('windspeed').innerHTML = wwindspeeddata;

  })
  .catch(error => {
    console.error('Error:', error); // Handle the error correctly
  });

});


