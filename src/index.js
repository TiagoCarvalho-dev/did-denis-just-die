import "./styles.css"
import classicImg from "./images/classic.jpg"
import ezImg from "./images/ez.png"
import restoreImg from "./images/restore.png"
import sendImg from "./images/send.png"

const mainContent = document.querySelector(".main-content");

const resetButton = document.createElement("button");
const restore = document.createElement("img");
restore.src = restoreImg;
restore.setAttribute("width", "40px");
restore.setAttribute("height", "auto");

const finalResetButton = resetButton.appendChild(restore);

const deathYesButton = document.createElement("button");
deathYesButton.textContent = "YES";

const deathNoButton = document.createElement("button");
deathNoButton.textContent = "NO";

function buildMainPage() {
  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("yes-no-buttons");

  buttonsDiv.appendChild(deathYesButton);
  buttonsDiv.appendChild(deathNoButton);

  mainContent.appendChild(buttonsDiv);
}

function clearMainContent() {
  while(mainContent.firstChild) {
    mainContent.removeChild(mainContent.lastChild);
  }
}

finalResetButton.addEventListener("click", () => {
  clearMainContent();
  buildMainPage();
});

deathYesButton.addEventListener("click", () => {
  clearMainContent();

  const howDidDenisDieTitle = document.createElement("h2");
  howDidDenisDieTitle.textContent = "HOW DID HE DIE?";

  mainContent.appendChild(howDidDenisDieTitle);

  const inputDiv = document.createElement("div");
  inputDiv.classList.add("inputs");

  const deathCauseInput = document.createElement("input");
  deathCauseInput.setAttribute("type", "text");
  deathCauseInput.setAttribute("placeholder", "FORGOT ABOUT STEEL AND GOT ONE HIT K.O");
  deathCauseInput.setAttribute("maxlength", "37");

  const submitButton = document.createElement("button");
  const send = document.createElement("img");
  send.src = sendImg;
  send.setAttribute("width", "26rem");
  send.setAttribute("height", "auto");
  submitButton.appendChild(send);

  inputDiv.appendChild(deathCauseInput);
  inputDiv.appendChild(submitButton);

  mainContent.appendChild(inputDiv);

  submitButton.addEventListener("click", () => {
    clearMainContent();

    const vpnSaveMessage = document.createElement("h2");
    vpnSaveMessage.textContent = "WOULDN'T HAVE DIED USING A VPN";

    const classic = document.createElement("img");
    classic.src = classicImg;
    classic.setAttribute("width", "80px");
    classic.setAttribute("height", "60px");

    const messageDiv = document.createElement("div");
    messageDiv.classList.add("messageDiv")

    messageDiv.appendChild(vpnSaveMessage);
    messageDiv.appendChild(classic);

    mainContent.appendChild(messageDiv);
    mainContent.appendChild(resetButton);
  });
});

deathNoButton.addEventListener("click", () => {
  clearMainContent();

  const denisGamingMessage = document.createElement("h2");
  denisGamingMessage.textContent = "HE IS GAMING";

  const ez = document.createElement("img");
  ez.src = ezImg;
  ez.setAttribute("width", "50px");
  ez.setAttribute("height", "auto");

  const messageDiv = document.createElement("div");

  messageDiv.appendChild(denisGamingMessage);
  messageDiv.appendChild(ez);

  mainContent.appendChild(messageDiv);
  mainContent.appendChild(resetButton);
});

buildMainPage();