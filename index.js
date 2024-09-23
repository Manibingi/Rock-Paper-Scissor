const rulebtn = document.querySelector(".rulebtn");
const nextbtn = document.querySelector(".nextbtn");
const rulebox = document.querySelector(".rulebox");

const buttons = document.querySelectorAll(".button");
const cir1 = document.querySelector(".cir1");
const cir2 = document.querySelector(".cir2");

const main = document.querySelector(".main");
const triangle = document.querySelector(".triparent");
const hurrayPage = document.querySelector(".hurraypage");
const hurrayAgain = document.querySelector(".again2");

const resText = document.querySelector(".winLose");
const result = document.querySelector(".section2");
const playAgain = document.querySelector(".playbtn");
const against = document.querySelector(".against");

//animation
const anime1 = document.querySelector(".anime1");
const anime2 = document.querySelector(".anime2");

//local Storage
const compScore = document.querySelector(".pcScore");
const yourScore = document.querySelector(".userScore");

let getUserScore = localStorage.getItem("ScoreUser");
let getPcScore = localStorage.getItem("ScorePc");

compScore.textContent = getUserScore !== null ? getUserScore : 0;
yourScore.textContent = getPcScore !== null ? getPcScore : 0;

rulebox.style.display = "none";
result.style.display = "none";
nextbtn.style.display = "none";
hurrayPage.style.display = "none";

// Result
let userChoice;
buttons.forEach((x) => {
  x.addEventListener("click", () => {
    userChoice = x.id;
    const img = getComputedStyle(x).getPropertyValue("background-image");
    const border = getComputedStyle(x).getPropertyValue("border-color");

    triangle.style.display = "none";
    result.style.display = "";
    cir1.style.backgroundImage = img;
    cir1.style.borderColor = border;

    const options = ["rock", "paper", "scissor"];
    const pcSelect = options[Math.floor(Math.random() * 3)];
    const res = document.getElementById(`${pcSelect}`);
    let pcChoice = res.id;

    if (pcChoice === "rock") {
      cir2.style.backgroundImage = `url("rock.png")`;
      cir2.style.borderColor = "#0074b6";
    } else if (pcChoice === "paper") {
      cir2.style.backgroundImage = `url("paper.png")`;
      cir2.style.borderColor = "#ffa943";
    } else if (pcChoice === "scissor") {
      cir2.style.backgroundImage = `url("scissor.png")`;
      cir2.style.borderColor = "#bd00ff";
    }

    const status = playGame(userChoice, pcChoice);
    resText.innerHTML = status;

    if (status === "TIE UP") {
      playAgain.textContent = "REPLAY";
      against.innerHTML = "";
      nextbtn.style.display = "none";
      anime1.style.display = "";
      anime2.style.display = "";
    }

    //local STorage
    if (status === "YOU WIN") {
      yourScore.textContent = parseInt(yourScore.textContent) + 1;
      localStorage.setItem("ScoreUser", yourScore.textContent);
      playAgain.textContent = "PLAY AGAIN";
      against.innerHTML = "AGAINST PC";
      nextbtn.style.display = "";
      anime1.style.display = "";
      anime2.style.display = "none";
    } else if (status === "YOU LOST") {
      compScore.textContent = parseInt(compScore.textContent) + 1;
      localStorage.setItem("ScorePc", compScore.textContent);
      playAgain.textContent = "PLAY AGAIN";
      against.innerHTML = "AGAINST PC";
      nextbtn.style.display = "none";
      anime1.style.display = "none";
      anime2.style.display = "";
    }
  });
});

// Win or Lose
function playGame(userChoice, pcChoice) {
  if (
    (userChoice === "rock" && pcChoice === "scissor") ||
    (userChoice === "paper" && pcChoice === "rock") ||
    (userChoice === "scissor" && pcChoice === "paper")
  ) {
    return "YOU WIN";
  } else if (userChoice === pcChoice) {
    return "TIE UP";
    against.style.display = "none";
    playAgain.textContent = "REPLAY";
  } else {
    return "YOU LOST";
  }
}

//Next button
function next() {
  main.style.display = "none";
  //   triangle.style.display = "none";
  result.style.display = "none";
  nextbtn.style.display = "none";
  hurrayPage.style.display = "";
}

// Play Again button functionality
function againPlay() {
  result.style.display = "none";
  nextbtn.style.display = "none";
  hurrayPage.style.display = "none";
  triangle.style.display = "";
  main.style.display = "";
}

// playAgain.addEventListener("click", () => {
//   result.style.display = "none";
//   triangle.style.display = "";
//   nextbtn.style.display = "none";
//   hurrayPage.style.display = "none";
// });

// Rules button functionality
function openClose() {
  if (rulebox.style.display == "none") {
    rulebox.style.display = "";
  } else {
    rulebox.style.display = "none";
  }
}
