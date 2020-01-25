export function dayMonth() {
    const timeZone = sessionStorage.getItem('timeZone');
    const time = new Date();
    const localeStandart = localStorage.getItem('lang');

    if (localeStandart === 'be') {
        const APIMonth = time.toLocaleString('en', { timeZone, month: 'long' });
        const APIWeekDay = time.toLocaleString('en', { timeZone, weekday: 'short' });
        const byWeekDay = {
            Sun: 'Няд',
            Mon: 'Пнд',
            Tue: 'Аўт',
            Wed: 'Сер',
            Thu: 'Чцв',
            Fri: 'Пят',
            Sat: 'Суб',
        };

        const byMonth = {
            January: 'Студзень',
            February: 'Люты',
            March: 'Сакавік',
            April: 'Красавік',
            May: 'Травень',
            June: 'Чэрвень',
            July: 'Ліпень',
            August: 'Жнівень',
            September: 'Верасень',
            October: 'Кастрычнік',
            November: 'Лістапад',
            December: 'Снежань',
        };
        document.getElementsByClassName('dayMonth')[0].innerHTML = `${byWeekDay[APIWeekDay]}, ${byMonth[APIMonth]}`;
    } else {
        const APIMonth = time.toLocaleString(localeStandart, { timeZone, month: 'long' });
        const APIWeekDay = time.toLocaleString(localeStandart, { timeZone, weekday: 'short' });
        document.getElementsByClassName('dayMonth')[0].innerHTML = `${APIWeekDay}, ${APIMonth}`;
    }
}
