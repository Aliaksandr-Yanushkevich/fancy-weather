export function displayLocation() {
    const latitude = Number(sessionStorage.getItem('latitude'));
    const longitude = Number(sessionStorage.getItem('longitude'));
    const latitudeDegree = Math.trunc(latitude);
    const longitudeDegree = Math.trunc(longitude);
    const latitudeMinutes = Math.trunc((latitude - latitudeDegree) * 60);
    const longitudeMinutes = Math.trunc((longitude - longitudeDegree) * 60);

    if (localStorage.getItem('lang') === 'en') {
        document.getElementsByClassName('latitude')[0].innerHTML = `Latitude: ${latitudeDegree}°${latitudeMinutes}'`;
        document.getElementsByClassName('longitude')[0].innerHTML = `Longitude: ${longitudeDegree}°${longitudeMinutes}'`;
    }
    if (localStorage.getItem('lang') === 'ru') {
        document.getElementsByClassName('latitude')[0].innerHTML = `Широта: ${latitudeDegree}°${latitudeMinutes}'`;
        document.getElementsByClassName('longitude')[0].innerHTML = `Долгота: ${longitudeDegree}°${longitudeMinutes}'`;
    }
    if (localStorage.getItem('lang') === 'be') {
        document.getElementsByClassName('latitude')[0].innerHTML = `Шырата: ${latitudeDegree}°${latitudeMinutes}'`;
        document.getElementsByClassName('longitude')[0].innerHTML = `Даўгата: ${longitudeDegree}°${longitudeMinutes}'`;
    }
}
