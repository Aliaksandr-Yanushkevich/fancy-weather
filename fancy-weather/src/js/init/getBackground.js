import { getSeason } from '../forecast/getSeason';

export async function getBackground(season, dayTime, currentlyIcon) {
    try {
        const city = sessionStorage.getItem('city');
        const country = sessionStorage.getItem('country');
        const myAccessKey = 'afffcf1ba9d09bbf9c8e8cd906017aa648eebfb7c897450305d5060f57c89497'; // developer api key
        const url = `https://api.unsplash.com/photos/random?query=${season}&${dayTime}&${currentlyIcon}&${city}&${country}&client_id=${myAccessKey}`;
        const response = await fetch(url);
        const data = await response.json();
        const backgroundImage = new Image();
        backgroundImage.crossOrigin = 'Anonymous';
        backgroundImage.src = data.urls.regular;
        backgroundImage.onload = function () {
            document.body.style.background = `url(${backgroundImage.src}) no-repeat`;
            document.body.style.backgroundSize = 'cover';
        };
    } catch (e) {
        const season = getSeason();
        const lang = localStorage.getItem('lang');
        switch (lang) {
            case 'en':
                alert('Your background picture was lost along the way :( Wait a bit and try changing it later. In the meantime, we will lend you our :)');
                break;
            case 'be':
                alert('Ваша фанавая карцінка згубілася па дарозе :( Крыху пачакайце  і паспрабуйце змяніць яе пазней. Ну а пакуль мы пазычым вам сваю :)');
                break;
            case 'ru':
                alert('Ваша фоновая картинка потерялась в пути :( Подождите немного и попробуйте сменить её позже. Ну а пока мы одолжим вам свою :)');
                break;
            default:
                break;
        }
        switch (season) {
            case 'winter':
                document.body.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2016/02/19/11/49/snow-1209991_960_720.jpg)';
                break;
            case 'spring':
                document.body.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2018/01/06/01/01/oak-3064187_960_720.jpg)';
                break;
            case 'summer':
                document.body.style.backgroundImage = 'https://cdn.pixabay.com/photo/2016/09/04/20/09/mountains-1645078_960_720.jpg)';
                break;
            case 'autumn':
                document.body.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2013/04/03/12/05/tree-99852_960_720.jpg)';
                break;
            default:
                break;
        }
        document.body.style.backgroundSize = 'cover';
    }
}
