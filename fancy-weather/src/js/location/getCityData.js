import Location from '../model/location';

export async function getCityData() {
    const latitude = sessionStorage.getItem('latitude');
    const longitude = sessionStorage.getItem('longitude');
    const apiKey = '685337f4b9c34a078fcd9a0da5516122';
    const lang = localStorage.getItem('lang');
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}&language=${lang}`;
    const response = await fetch(url);
    const data = await response.json();
    const city = data.results[0].components.city
    || data.results[0].components.town
    || data.results[0].components.village
    || data.results[0].components.county
    || data.results[0].components.state;
    const country = data.results[0].components.country;
    const timeZone = data.results[0].annotations.timezone.name;
    sessionStorage.setItem('timeZone', timeZone);
    sessionStorage.setItem('city', city);
    sessionStorage.setItem('country', country);
    return new Location(city, country, timeZone);
}
