import 'babel-polyfill';
import _ from 'lodash';
import './scss/style.scss';
import './scss/reset.scss';
import { initHeader } from './js/init/initHeader';
import { initWeather } from './js/init/initWeather';
import { initForecast } from './js/init/initForecast';
import { initLocation } from './js/init/initLocation';
import { getIpinfo } from './js/location/getIpinfo';
import { getCityData } from './js/location/getCityData';
import { clock } from './js/location/clock';
import { dayMonth } from './js/forecast/dayMonth';
import { darksky } from './js/forecast/darksky';
import { displayLocation } from './js/location/displayLocation';
import { initMap } from './js/init/initMap';
import { getDayTime } from './js/forecast/getDayTime';
import { getSeason } from './js/forecast/getSeason';
import { getBackground } from './js/init/getBackground';
import { backgroundRefresh, tempUnit, changeLang } from './js/buttonHandler';
import { search } from './js/search/search';
import { voiceRecognition } from './js/search/speechrecognition';
import { updateCityData } from './js/location/updateCityData';

async function renderPage() {
    initHeader();
    initWeather();
    initForecast();
    initLocation();
    await getIpinfo(); // send request and recieve gps from IP
    const location = await getCityData(); // send gps coordinates and recieve city, country, date and time
    updateCityData(location);
    clock(); // display date, month, weekday and time
    dayMonth();
    const darkskyData = await darksky(); //  send request and recieve currently weather from gps
    const currentlytemp = darkskyData.currently.temperature;
    const apparentTemperature = darkskyData.currently.apparentTemperature;
    const currentlyIcon = darkskyData.currently.icon;
    const dayForecast1 = darkskyData.daily.data[1];
    const dayForecast2 = darkskyData.daily.data[2];
    const dayForecast3 = darkskyData.daily.data[3];
    displayLocation(); // display target gps coordinate
    initMap(); // init map
    const dayTime = getDayTime();
    const season = getSeason();
    getBackground(season, dayTime, currentlyIcon); // display bg
    backgroundRefresh(season, dayTime, currentlyIcon);
    tempUnit(
        currentlytemp,
        apparentTemperature,
        dayForecast1,
        dayForecast2,
        dayForecast3,
    );
    search();
    changeLang();
    voiceRecognition();
}
renderPage();
