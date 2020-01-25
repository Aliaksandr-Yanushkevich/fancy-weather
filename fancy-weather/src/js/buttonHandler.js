import { getBackground } from './init/getBackground';
import { darksky } from './forecast/darksky';
import { getCityData } from './location/getCityData';
import { displayLocation } from './location/displayLocation';
import { dayMonth } from './forecast/dayMonth';
import { updateCityData } from './location/updateCityData';

export function backgroundRefresh(season, dayTime, currentlyIcon) {
    const imgRefresh = document.getElementsByClassName(
        'button-changeBackground',
    )[0];
    imgRefresh.addEventListener('click', () => getBackground(season, dayTime, currentlyIcon));
}

export function tempUnit(
    currentlytemp,
    apparentTemperature,
    dayForecast1,
    dayForecast2,
    dayForecast3,
) {
    const cel = document.getElementsByClassName('temp-celsium')[0];
    const far = document.getElementsByClassName('temp-fahrenheit')[0];
    cel.addEventListener('click', () => cels(
        currentlytemp,
        apparentTemperature,
        dayForecast1,
        dayForecast2,
        dayForecast3,
    ));
    far.addEventListener('click', () => fahr(
        currentlytemp,
        apparentTemperature,
        dayForecast1,
        dayForecast2,
        dayForecast3,
    ));

    function fahr(
        currentlytemp,
        apparentTemperature,
        dayForecast1,
        dayForecast2,
        dayForecast3,
    ) {
        localStorage.setItem('celsium', false);
        cel.classList.remove('active');
        far.classList.add('active');
        currentlytemp = Math.round((currentlytemp * 9) / 5 + 32);
        apparentTemperature = Math.round((apparentTemperature * 9) / 5 + 32);
        const avgTemp1 = Math.round(
            (((dayForecast1.temperatureHigh + dayForecast1.temperatureLow) / 2) * 9)
        / 5
        + 32,
        );
        const avgTemp2 = Math.round(
            (((dayForecast2.temperatureHigh + dayForecast2.temperatureLow) / 2) * 9)
        / 5
        + 32,
        );
        const avgTemp3 = Math.round(
            (((dayForecast3.temperatureHigh + dayForecast3.temperatureLow) / 2) * 9)
        / 5
        + 32,
        );
        document.getElementsByClassName(
            'weatherPropTemp',
        )[0].innerHTML = `${currentlytemp}°`;

        if (localStorage.getItem('lang') === 'en') {
            document.getElementsByClassName(
                'li-item',
            )[1].innerHTML = `Feels like: ${apparentTemperature}°`;
        }

        if (localStorage.getItem('lang') === 'be') {
            document.getElementsByClassName(
                'li-item',
            )[1].innerHTML = `Адчуваецца як: ${apparentTemperature}°`;
        }

        if (localStorage.getItem('lang') === 'ru') {
            document.getElementsByClassName(
                'li-item',
            )[1].innerHTML = `Ощущается как: ${apparentTemperature}°`;
        }

        document.getElementsByClassName(
            'tommorowTemp',
        )[0].innerHTML = `${avgTemp1}°`;
        document.getElementsByClassName(
            'tommorow1Temp',
        )[0].innerHTML = `${avgTemp2}°`;
        document.getElementsByClassName(
            'tommorow2Temp',
        )[0].innerHTML = `${avgTemp3}°`;
    }
    function cels(
        currentlytemp,
        apparentTemperature,
        dayForecast1,
        dayForecast2,
        dayForecast3,
    ) {
        localStorage.setItem('celsium', true);
        far.classList.remove('active');
        cel.classList.add('active');
        apparentTemperature = Math.round(apparentTemperature);
        const avgTemp1 = Math.round(
            (dayForecast1.temperatureHigh + dayForecast1.temperatureLow) / 2,
        );
        const avgTemp2 = Math.round(
            (dayForecast2.temperatureHigh + dayForecast2.temperatureLow) / 2,
        );
        const avgTemp3 = Math.round(
            (dayForecast3.temperatureHigh + dayForecast3.temperatureLow) / 2,
        );

        if (localStorage.getItem('lang') === 'en') {
            document.getElementsByClassName(
                'li-item',
            )[1].innerHTML = `Feels like: ${apparentTemperature}°`;
        }

        if (localStorage.getItem('lang') === 'be') {
            document.getElementsByClassName(
                'li-item',
            )[1].innerHTML = `Адчуваецца як: ${apparentTemperature}°`;
        }

        if (localStorage.getItem('lang') === 'ru') {
            document.getElementsByClassName(
                'li-item',
            )[1].innerHTML = `Ощущается как: ${apparentTemperature}°`;
        }

        document.getElementsByClassName(
            'weatherPropTemp',
        )[0].innerHTML = `${Math.round(currentlytemp)}°`;
        document.getElementsByClassName(
            'tommorowTemp',
        )[0].innerHTML = `${avgTemp1}°`;
        document.getElementsByClassName(
            'tommorow1Temp',
        )[0].innerHTML = `${avgTemp2}°`;
        document.getElementsByClassName(
            'tommorow2Temp',
        )[0].innerHTML = `${avgTemp3}°`;
    }
}

export function changeLang() {
    const lang = document.getElementsByClassName('language')[0];
    lang.addEventListener('change', () => translate());
}

export async function translate() {
    localStorage.setItem(
        'lang',
        document.getElementsByClassName('language')[0].value,
    );

    if (localStorage.getItem('lang') === 'en') {
        document.getElementsByClassName('searchField')[0].placeholder = 'Search city or ZIP';
    }

    if (localStorage.getItem('lang') === 'be') {
        document.getElementsByClassName('searchField')[0].placeholder = 'Шукаць горад ці індэкс';
    }

    if (localStorage.getItem('lang') === 'ru') {
        document.getElementsByClassName('searchField')[0].placeholder = 'Искать город или индекс';
    }
    darksky();
    const location = await getCityData();
    updateCityData(location);
    displayLocation();
    dayMonth();
}
