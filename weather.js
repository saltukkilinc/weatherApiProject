class Weather {
  constructor (latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.type = 'hourly';
  }

  async getWeather() {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${this.latitude}&longitude=${this.longitude}&${this.type}=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation,rain,weathercode,pressure_msl,surface_pressure,cloudcover,windspeed_10m,winddirection_10m`);

    const data = await response.json();
    return data
  }

  changeLocation(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
  }


}