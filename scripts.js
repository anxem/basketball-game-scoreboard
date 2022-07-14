let homeScore = 0;
let guestScore = 0;

let homeScoreText = document.getElementById("homeScore");
let guestScoreText = document.getElementById("guestScore");

function addHomeOne() {
  homeScore += 1;
  homeScoreText.textContent = homeScore;
}

function addHomeTwo() {
  homeScore += 2;
  homeScoreText.textContent = homeScore;
}

function addHomeThree() {
  homeScore += 3;
  homeScoreText.textContent = homeScore;
}

function addGuestOne() {
  guestScore += 1;
  guestScoreText.textContent = guestScore;
}

function addGuestTwo() {
  guestScore += 2;
  guestScoreText.textContent = guestScore;
}

function addGuestThree() {
  guestScore += 3;
  guestScoreText.textContent = guestScore;
}

function restGame() {
  homeScore = 0;
  guestScore = 0;
  homeScoreText.textContent = homeScore;
  guestScoreText.textContent = guestScore;
}
