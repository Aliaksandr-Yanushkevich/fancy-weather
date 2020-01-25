import { createIconHTML } from './createIconHTML';

export function initHeader() {
    const mainWrapper = document.createElement('div');
    mainWrapper.classList.add('wrapper');
    const copyright = document.createElement('div');
    copyright.classList.add('copyright');
    const developer = document.createElement('h1');
    developer.innerHTML = 'Fancy-Weather. Created by Aliaksandr Yanushkevich RS Schooll 2019Q3';
    const header = document.createElement('header');// create header
    const control = document.createElement('section');
    control.classList.add('control');

    const buttBlock = document.createElement('div');
    buttBlock.className = 'buttBlock';
    control.appendChild(buttBlock);

    const changeBackground = document.createElement('button'); // create button for random bg
    changeBackground.classList.add('button');
    changeBackground.classList.add('button-changeBackground');
    changeBackground.innerHTML = createIconHTML('autorenew');

    buttBlock.appendChild(changeBackground);

    const lang = document.createElement('select'); // create lang list
    const langArr = ['en', 'be', 'ru'];
    lang.classList.add('language');

    if (localStorage.getItem('lang') === null) {
        localStorage.setItem('lang', 'en');
    }


    for (let i = 0; i < langArr.length; i++) {
        const option = document.createElement('option');
        option.value = langArr[i];
        option.text = langArr[i];
        lang.appendChild(option);
    }
    if (localStorage.getItem('lang') === 'en') {
        lang.selectedIndex = 0;
    }
    if (localStorage.getItem('lang') === 'be') {
        lang.selectedIndex = 1;
    }
    if (localStorage.getItem('lang') === 'ru') {
        lang.selectedIndex = 2;
    }
    buttBlock.appendChild(lang);


    if (localStorage.getItem('celsium') === null) { // property existence check
        localStorage.setItem('celsium', true);
    }

    const tempCels = document.createElement('button'); // create temperature buttons
    tempCels.innerText = '°C';
    tempCels.classList.add('temp');
    tempCels.classList.add('temp-celsium');
    if (localStorage.getItem('celsium') === 'true') {
        tempCels.classList.add('active');
    }
    buttBlock.appendChild(tempCels);

    const tempFar = document.createElement('button');
    tempFar.innerText = '°F';
    tempFar.classList.add('temp');
    tempFar.classList.add('temp-fahrenheit');
    if (localStorage.getItem('celsium') === 'false') {
        tempFar.classList.add('active');
    }
    buttBlock.appendChild(tempFar);
    const searchBlock = document.createElement('div');
    searchBlock.classList.add('searchBlock');

    const searchForm = document.createElement('form'); // create search form
    searchForm.classList.add('searchForm');
    const searchField = document.createElement('input');
    searchField.setAttribute('type', 'search');
    searchField.classList.add('searchField');

    if (localStorage.getItem('lang') === 'en') {
        searchField.placeholder = 'Search city or ZIP';
    }

    if (localStorage.getItem('lang') === 'be') {
        searchField.placeholder = 'Шукаць горад ці індэкс';
    }

    if (localStorage.getItem('lang') === 'ru') {
        searchField.placeholder = 'Искать город или индекс';
    }

    const searchSubmit = document.createElement('button');
    searchSubmit.setAttribute('type', 'submit');
    searchSubmit.classList.add('searchSubmit');
    searchSubmit.innerHTML = createIconHTML('search');

    const voice = document.createElement('button');
    voice.classList.add('voice');
    voice.innerHTML = createIconHTML('keyboard_voice');
    searchBlock.appendChild(searchForm);
    searchForm.appendChild(searchField);
    searchForm.appendChild(searchSubmit);
    searchBlock.appendChild(voice);
    control.appendChild(searchBlock);
    header.appendChild(control);
    copyright.appendChild(developer);
    mainWrapper.appendChild(copyright);
    mainWrapper.appendChild(header);
    document.body.appendChild(mainWrapper);
}
