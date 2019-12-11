initHeader = function () {
    let mainWrapper = document.createElement('div');
    mainWrapper.classList.add('wrapper');
    let copyright = document.createElement('div');
    copyright.classList.add('copyright');
    let developer = document.createElement('h1');
    developer.innerHTML = 'Fancy-Weather. Created by Aliaksandr Yanushkevich RS Schooll 2019Q3';
    let header = document.createElement('header');// create header
    let control = document.createElement('section');
    control.classList.add('control');

    let buttBlock = document.createElement('div');
    buttBlock.className = 'buttBlock';
    control.appendChild(buttBlock);

    const changeBackground = document.createElement('button'); // create button for random bg
    changeBackground.classList.add("button");
    changeBackground.classList.add("button-changeBackground");
    changeBackground.innerHTML = createIconHTML('autorenew');

    buttBlock.appendChild(changeBackground);

    const lang = document.createElement('select'); // create lang list
    const langArr = ['EN', 'BE', 'RU'];
    lang.classList.add("language");

    for (let i = 0; i < langArr.length; i++) {
        let option = document.createElement('option');
        option.value = langArr[i];
        option.text = langArr[i];
        lang.appendChild(option);
    }
    buttBlock.appendChild(lang);

    const tempCels = document.createElement('button'); // create temperature buttons
    tempCels.innerText = '℃';
    tempCels.classList.add('temp');
    buttBlock.appendChild(tempCels);

    const tempFar = document.createElement('button');
    tempFar.innerText = '℉';
    tempFar.classList.add('temp');
    buttBlock.appendChild(tempFar);

    const searchForm = document.createElement('form'); // create search form
    searchForm.classList.add('searchForm');
    const searchField = document.createElement('input');
    searchField.setAttribute('type', 'search');
    searchField.classList.add('searchField');
    searchField.placeholder = "Search city or ZIP";
    const searchSubmit = document.createElement('button');
    searchSubmit.setAttribute('type', 'submit');
    searchSubmit.classList.add('searchSubmit');
    searchSubmit.innerHTML = createIconHTML('search');
    searchForm.appendChild(searchField);
    searchForm.appendChild(searchSubmit);
    control.appendChild(searchForm);
    header.appendChild(control);
    copyright.appendChild(developer);
    mainWrapper.appendChild(copyright);
    mainWrapper.appendChild(header);
    document.body.appendChild(mainWrapper)
}