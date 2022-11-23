class UI {
  constructor() {
    this.latitude = document.querySelector('#w-latitude')
    this.longitude = document.querySelector('#w-longitude')
    this.temperature = document.querySelector('#w-temperature')
    this.rain = document.querySelector('#w-rain')
    this.cloudcover = document.querySelector('#w-cloudcover')
    this.humidty = document.querySelector('#w-humidty')
    this.dewpoint = document.querySelector('#w-dewpoint')
    this.pressure = document.querySelector('#w-pressure')
    this.windspeed = document.querySelector('#w-windspeed')
  }

  paint(weather) {
    this.latitude.textContent = `lat: ${weather.latitude}`
    this.longitude.textContent = `long: ${weather.longitude}`
    this.temperature.textContent = `tem: ${weather.hourly.temperature_2m[0]}`
    this.rain.textContent = `rain: ${weather.hourly.rain[0]}`
    this.cloudcover.textContent = `cloud: ${weather.hourly.cloudcover[0]}`
    this.humidty.textContent = `relative humidty: ${weather.hourly.relativehumidity_2m[0]}`
    this.dewpoint.textContent = `dewpoint: ${weather.hourly.dewpoint_2m[0]}`
    this.pressure.textContent = `pressure: ${weather.hourly.pressure_msl[0]}`
    this.windspeed.textContent = `windspeed: ${weather.hourly.windspeed_10m[0]}`
  }
}

