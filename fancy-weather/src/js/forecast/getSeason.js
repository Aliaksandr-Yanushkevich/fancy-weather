export function getSeason() {
    const timeZone = sessionStorage.getItem('timeZone');
    let season;
    const time = new Date();
    const APISeason = Number(time.toLocaleString('en', { timeZone, month: 'numeric' }));
    if (APISeason === 12 || APISeason <= 2) {
        season = 'winter';
    }
    if (APISeason >= 3 && APISeason <= 5) {
        season = 'spring';
    }
    if (APISeason >= 6 && APISeason <= 8) {
        season = 'summer';
    }
    if (APISeason >= 9 && APISeason <= 11) {
        season = 'autumn';
    }
    return season;
}
