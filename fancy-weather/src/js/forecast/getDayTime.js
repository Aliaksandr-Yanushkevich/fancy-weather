export function getDayTime() {
    const timeZone = sessionStorage.getItem('timeZone');
    let timesOfDay;
    const time = new Date();
    const APIHours = Number(time.toLocaleString('en', { timeZone, hour: 'numeric', hour12: false }));
    if (APIHours === 0 || APIHours <= 6) {
        timesOfDay = 'night';
    } else if (APIHours >= 7 && APIHours <= 11) {
        timesOfDay = 'morning';
    } else if (APIHours >= 12 && APIHours <= 17) {
        timesOfDay = 'day';
    } else if (APIHours >= 18 && APIHours <= 23) {
        timesOfDay = 'evening';
    }
    return timesOfDay;
}
