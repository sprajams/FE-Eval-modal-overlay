let showButton = document.querySelector(".showButton");
showButton.addEventListener("click", showOffer);

let offerContainer = document.querySelector(".offerContainer");

let offerAccepted = document.querySelector(".offerAccepted");

let exitButton = document.querySelector(".exitButton");
exitButton.addEventListener("click", exitOffer);

let acceptButton = document.querySelector(".acceptButton");
acceptButton.addEventListener("click", acceptOffer);

function showOffer() {
  console.log("show me the offer");
  document.body.style.background = "rgba(128, 128, 128, 0.5)";
  offerContainer.style.display = "block";
}

function exitOffer() {
  console.log("exit the offer now");
  offerContainer.style.display = "none";
  backgroundReset();
}

function acceptOffer() {
  console.log("accept the offerr pls");
  accepted();
  backgroundReset();
}

function accepted() {
  offerContainer.style.display = "none";
  offerAccepted.style.display = "block";
  showButton.style.display = "none";
}
function backgroundReset() {
  document.body.style.background = "white";
}
