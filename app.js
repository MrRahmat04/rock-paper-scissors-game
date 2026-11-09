let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};



const drawGame = () => {
  msg.innerText = "Game Draw. Play Again!";
  msg.style.background = "#081b31";
  msg.style.color = "#fff";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice} `;
    msg.style.background = "green";
    msg.style.color = "#fff";
    console.log(msg.style.background);
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lose! ${compChoice} beats Your ${userChoice} `;
    msg.style.background = "red";
    msg.style.color = "#fff";
    console.log(msg.style.background);
  }
};

const playGame = (userChoice) => {
//   console.log("user choice = ", userChoice);
  const compChoice = genCompChoice();
//   console.log("comp choice = ", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});
