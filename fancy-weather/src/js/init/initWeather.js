export function initWeather() {
    if (localStorage.getItem('celsium') === null) {
        localStorage.setItem('celsium', true);
    }

    const main = document.createElement('main');
    const weatherWrapper = document.createElement('section');
    weatherWrapper.classList.add('weatherWrapper');
    const weather = document.createElement('div');
    weather.classList.add('weather');

    const summary = document.createElement('div');
    summary.classList.add('summary');
    weatherWrapper.appendChild(summary);

    const city = document.createElement('div');
    city.classList.add('city');
    summary.appendChild(city);

    const location = document.createElement('h2');
    location.classList.add('location');
    location.classList.add('weather-location');
    city.appendChild(location);

    const dateTime = document.createElement('div');
    dateTime.classList.add('dateTime');

    const dayMonth = document.createElement('div');
    dayMonth.classList.add('dayMonth');
    dateTime.appendChild(dayMonth);

    const clock = document.createElement('div');
    clock.classList.add('clock');
    dateTime.appendChild(clock);

    summary.appendChild(dateTime);

    const weatherProp = document.createElement('div');
    weatherProp.classList.add('weatherProp');

    const weatherPropTemp = document.createElement('div');
    weatherPropTemp.classList.add('weatherPropTemp');
    weatherProp.appendChild(weatherPropTemp);

    const weatherPropDetails = document.createElement('div');
    weatherPropDetails.classList.add('weatherPropDetails');
    weatherProp.appendChild(weatherPropDetails);

    const weatherPropDetailsImage = document.createElement('div');
    weatherPropDetailsImage.classList.add('weatherPropDetailsImage');

    const canvas = document.createElement('CANVAS');
    canvas.id = 'currentlyWeather';
    canvas.width = 64;
    canvas.height = 64;
    weatherPropDetailsImage.appendChild(canvas);

    weatherPropDetails.appendChild(weatherPropDetailsImage);

    const weatherList = document.createElement('ul');
    weatherList.classList.add('weatherdescription');
    for (let i = 0; i < 4; i++) {
        const li = document.createElement('li');
        li.classList.add('li-item');
        weatherList.appendChild(li);
    }

    weather.appendChild(dateTime);
    weather.appendChild(weatherProp);
    weatherPropDetails.appendChild(weatherList);
    weatherWrapper.appendChild(weather);
    main.appendChild(weatherWrapper);
    document.getElementsByClassName('wrapper')[0].appendChild(main);
}
