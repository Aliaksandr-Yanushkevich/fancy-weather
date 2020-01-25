export function initLocation() { // create location block
    const locationWrapper = document.createElement('section');
    locationWrapper.classList.add('locationWrapper');

    const map = document.createElement('div');
    map.classList.add('map');
    map.id = 'map';

    const gps = document.createElement('div');
    gps.classList.add('gps');
    const latitude = document.createElement('p');
    latitude.classList.add('latitude');
    const latitudeVal = document.createElement('span');
    latitudeVal.classList.add('latitudeVal');
    latitude.appendChild(latitudeVal);
    const longitude = document.createElement('p');
    longitude.classList.add('longitude');
    gps.appendChild(latitude);
    gps.appendChild(longitude);

    locationWrapper.appendChild(map);
    locationWrapper.appendChild(gps);
    document.getElementsByTagName('main')[0].appendChild(locationWrapper);
}
