import { translate } from "./buttonHandler";

const recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition ||
  window.mozSpeechRecognition ||
  window.msSpeechRecognition)();
recognition.interimResults = true;
recognition.addEventListener("result", e => {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join("");
  const changeBackground = document.getElementsByClassName(
    "button-changeBackground"
  )[0];
  const searchField = document.getElementsByClassName("searchField")[0];
  const celsius = document.getElementsByClassName("temp-celsium")[0];
  const fahrenheit = document.getElementsByClassName("temp-fahrenheit")[0];
  const lang = document.getElementsByClassName("language")[0];
  if (
    transcript.toLowerCase().includes("градусы цельсия") ||
    transcript.toLowerCase().includes("градусы Цэльсія") ||
    transcript.toLowerCase().includes("degrees celsius")
  ) {
    // changing of temperature units
    celsius.click();
    searchField.value = "";
  } else if (
    transcript.toLowerCase().includes("градусы фаренгейта") ||
    transcript.toLowerCase().includes("градусы фарэнгейта") ||
    transcript.toLowerCase().includes("degrees fahrenheit")
  ) {
    fahrenheit.click();
    searchField.value = "";
  } else if (
    transcript.toLowerCase().includes("английский язык") ||
    transcript.toLowerCase().includes("английская мова") ||
    transcript.toLowerCase().includes("english language")
  ) {
    // changing lang
    lang.selectedIndex = 0;
    translate();
    searchField.value = "";
  } else if (
    transcript.toLowerCase().includes("белорусский язык") ||
    transcript.toLowerCase().includes("беларуская мова") ||
    transcript.toLowerCase().includes("belarusian Language")
  ) {
    lang.selectedIndex = 1;
    translate();
    searchField.value = "";
  } else if (
    transcript.toLowerCase().includes("русский язык") ||
    transcript.toLowerCase().includes("русская мова") ||
    transcript.toLowerCase().includes("russian language")
  ) {
    lang.selectedIndex = 2;
    translate();
    searchField.value = "";
  } else if (
    transcript.toLowerCase().includes("смени фон") ||
    transcript.toLowerCase().includes("змяні фон") ||
    transcript.toLowerCase().includes("change background")
  ) {
    changeBackground.click();
    searchField.value = "";
  } else {
    document.getElementsByClassName("searchField")[0].value = transcript;
  }
});
recognition.addEventListener("end", () => {
  document.getElementsByClassName("searchSubmit")[0].click();
});
export function voiceRecognition() {
  const myVoice = document.getElementsByClassName("voice")[0];
  myVoice.addEventListener("click", () => {
    try {
      recognition.start();
    } catch (e) {
      switch (localStorage.lang) {
        case "en":
          alert(
            "Please do not start speech recognition again until the end of the recognition session. Press the button once and say :)"
          );
          break;
        case "be":
          alert(
            "Калі ласка, не запускайце распазнаванне гаворкі яшчэ раз да заканчэння сеансу распазнавання. Націсніце на кнопку адзін раз і гаварыце :)"
          );
          break;
        case "ru":
          alert(
            "Пожалуйста, не запускайте распознавание речи ещё раз до окончания сеанса распознавания. Нажмите на кнопку один раз и говорите :)"
          );
          break;
        default:
          alert(
            "Please do not start speech recognition again until the end of the recognition session. Press the button once and say :)"
          );
          break;
      }
    }
  });
}
