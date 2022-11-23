// Init Storage
const storage = new Storage;
// Get stored location data
const weatherLocation = storage.getLocationData();
console.log(weatherLocation)
// Instansiaze Classes
const weather = new Weather(weatherLocation.longitude, weatherLocation.latitude)
const ui = new UI;


// event DOMContentLoaded
document.addEventListener('DOMContentLoaded', getWeather);

// click event
document.querySelector('#w-change-btn').addEventListener('click', (e) =>{
  const longitudeInputDOM = parseFloat(document.querySelector('#longitude').value)
  const latitudeInputDOM = parseFloat(document.querySelector('#latitude').value)
  // cahange location
  weather.changeLocation(longitudeInputDOM, latitudeInputDOM);
  // set location in LS
  storage.setLocationData(longitudeInputDOM, latitudeInputDOM);
  // get and displat weather
  getWeather()
})

function getWeather(){
  // get weather from api
 weather.getWeather( )
  .then(res => {
    console.log(res)
    ui.paint(res)
    
  }).catch(err => err)
  

}

