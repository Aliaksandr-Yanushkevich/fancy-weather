export function updateCityData(location) {
    const { city, country } = location;
    document.getElementsByClassName(
        'weather-location',
    )[0].innerHTML = `${city}, ${country}`;
}
