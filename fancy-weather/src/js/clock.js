export function clock() {
  const timeZone = sessionStorage.getItem("timeZone");
  const time = new Date();
  const localeStandart = localStorage.getItem("lang");
  const APIDay = time.toLocaleString(localeStandart, {
    timeZone,
    day: "numeric"
  });
  const APIHour = time.toLocaleString(localeStandart, {
    timeZone,
    hour: "numeric",
    hour12: false
  });
  let APIMinute = time.toLocaleString(localeStandart, {
    timeZone,
    minute: "numeric"
  });
  if (APIMinute < 10) {
    APIMinute = `0${APIMinute}`;
  }
  document.getElementsByClassName(
    "clock"
  )[0].innerHTML = `${APIDay}, ${APIHour}:${APIMinute}`;
  startClock();
}

export function startClock() {
  // recursive function start https://www.youtube.com/watch?v=puxkpNbCh0w;
  setTimeout(clock, 1000);
}
