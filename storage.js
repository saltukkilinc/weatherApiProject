class Storage {
  constructor() {
    this.longitude;
    this.latitude;
    this.defaultlongitude = 40.71;
    this.defaultLatitude = -74.01;
  }

  getLocationData(){
    if(localStorage.getItem('longitude') === null) {
      this.longitude = this.defaultlongitude
    } else {
      this.longitude = localStorage.getItem('longitude')
    }

    if(localStorage.getItem('latitude') === null) {
      this.latitude = this.defaultLatitude
    } else {
      this.latitude = localStorage.getItem('latitude')
    }

    return {
      longitude: this.longitude,
      latitude: this.latitude
    }
  }

  setLocationData(longitude, latitude){
    localStorage.setItem('longitude', longitude)
    localStorage.setItem('latitude', latitude)

  }
}