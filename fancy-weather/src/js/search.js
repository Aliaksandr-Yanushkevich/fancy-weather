// import './APIClock';
search = function() {
    const searchButton = document.getElementsByClassName('searchSubmit')[0];
    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        getDataFromCity();
    })
}

getDataFromCity = async function() {
    const apiKey = '685337f4b9c34a078fcd9a0da5516122';
    const place = document.getElementsByClassName('searchField')[0].value;
    const lang = localStorage.getItem('lang').toLocaleLowerCase();
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${place}&key=${apiKey}&language=${lang}`;
    const response = await fetch(url);
    const data = await response.json();
    const city = data.results[0].components.city || data.results[0].components.town || data.results[0].components.village || data.results[0].components.county || data.results[0].components.state;
    const country = data.results[0].components.country;
    const timeZone = data.results[0].annotations.timezone.name;
    const gps = data.results[0].geometry;
    const latitude = gps.lat.toFixed(4);
    const longitude = gps.lng.toFixed(4);
    // sessionStorage.setItem('timeZone', data.timezone);
    sessionStorage.setItem('timeZone', timeZone);
    sessionStorage.setItem('city', city);
    sessionStorage.setItem('country', country);
    sessionStorage.setItem('latitude', latitude);
    sessionStorage.setItem('longitude', longitude);
    document.getElementsByClassName('weather-location')[0].innerHTML = `${city}, ${country}`
    displayLocation();  // refresh gps coordinates
    const darkskyData = await darksky(); // refresh weather and forecast
    const searchCurrentlyIcon = darkskyData.currently.icon;
    // console.log(searchCurrentlyIcon);
    clearTimeout(MyClock); // remove prev clock and execute target clock from search
    clock();    
    
    initMap();
    const season = getSeason();
    const dayTime = getDayTime();

    getBackground(season, dayTime, searchCurrentlyIcon);
 }

 