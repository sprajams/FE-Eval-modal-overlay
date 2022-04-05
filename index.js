let showButton = document.querySelectorAll(".showButton");
showButton.forEach((x) => x.addEventListener("click", showOffer));

let modal = document.querySelector(".modal");
modal.addEventListener("keyup", keyup);

let exitButton = document.querySelector(".exitButton");
exitButton.addEventListener("click", exitOffer);

let acceptButton = document.querySelector(".acceptButton");
acceptButton.addEventListener("click", acceptOffer);

let acceptContainer = document.querySelector(".acceptContainer");

let offerContainer = document.querySelector(".offerContainer");

let retryButton = document.querySelector(".retryButton");
retryButton.addEventListener("click", retryOffer);

function showOffer() {
  document.body.style.background = "rgba(128, 128, 128, 0.5)";
  console.log("modal clicked");
  modal.style.display = "block";
}

function exitOffer() {
  modal.style.display = "none";
  backgroundReset();
}

function acceptOffer() {
  accepted();
  backgroundReset();
}

function accepted() {
  modal.style.display = "none";
  acceptContainer.style.display = "block";
  offerContainer.style.display = "none";
}

function backgroundReset() {
  document.body.style.background = "white";
}
// accessibility, using esc key to exit out of offer pop up
function keyup(e) {
  if (e.key === "Escape") {
    console.log("escaaaaape");
    exitOffer();
  }
}

function retryOffer() {
  acceptContainer.style.display = "none";
  offerContainer.style.display = "block";
}
