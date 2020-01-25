export async function getIpinfo() {
    const ipInfoToken = '5a82c3c01a87ab';
    const url = `https://ipinfo.io/json?token=${ipInfoToken}`;
    const response = await fetch(url);
    const data = await response.json();
    const latitude = data.loc.split(',')[0];
    const longitude = data.loc.split(',')[1];
    sessionStorage.setItem('latitude', latitude);
    sessionStorage.setItem('longitude', longitude);
}
