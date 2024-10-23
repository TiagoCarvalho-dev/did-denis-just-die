import "./styles.css"
import classicImg from "./images/classic.jpg"
import ezImg from "./images/ez.png"

const mainContent = document.querySelector(".main-content");

const resetButton = document.createElement("button");
resetButton.textContent = "RESET";

const deathYesButton = document.createElement("button");
deathYesButton.textContent = "YES";

const deathNoButton = document.createElement("button");
deathNoButton.textContent = "NO";

function buildMainPage() {
  mainContent.appendChild(deathYesButton);
  mainContent.appendChild(deathNoButton);
}

function clearMainContent() {
  while(mainContent.firstChild) {
    mainContent.removeChild(mainContent.lastChild);
  }
}

resetButton.addEventListener("click", () => {
  clearMainContent();
  buildMainPage();
});

deathYesButton.addEventListener("click", () => {
  clearMainContent();

  const howDidDenisDieTitle = document.createElement("h2");
  howDidDenisDieTitle.textContent = "HOW DID HE DIE?";

  mainContent.appendChild(howDidDenisDieTitle);

  const deathCauseInput = document.createElement("input");
  deathCauseInput.setAttribute("type", "text");

  mainContent.append(deathCauseInput);

  const submitButton = document.createElement("button");
  mainContent.appendChild(submitButton);

  submitButton.addEventListener("click", () => {
    clearMainContent();

    const vpnSaveMessage = document.createElement("h2");
    vpnSaveMessage.textContent = "WOULDN'T HAVE DIED USING A VPN";

    const classic = document.createElement("img");
    classic.src = classicImg;
    classic.setAttribute("width", "90px");
    classic.setAttribute("height", "auto");

    const messageDiv = document.createElement("div");

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