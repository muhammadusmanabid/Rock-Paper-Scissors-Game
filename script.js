let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const getCompChoice = () => { //computers choice
    const options = ["Rock", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = (userChoice) => {
    console.log(`user choice = ${userChoice}`);
    const compChoice = getCompChoice();
    console.log(`comp choice = ${compChoice}`) 

    if(userChoice === compChoice){
       drawGame();
    }
    else{
        let userWin = true; // comparres the turns
        if(userChoice === "Rock"){
            userWin = compChoice === "Paper" ? false : true;
        }
        else if(userChoice === "Paper"){
            userWin = compChoice === "Scissors" ? false : true;
        }
        else{
            userWin = compChoice === "Rock" ? false : true;
        }
        checkWinner(userWin, userChoice, compChoice);
    }
}

const drawGame = () => {  // if games draw
    console.log(`Game was draw!`);
    message.innerText = "Game was Draw! Play again";
    message.style.backgroundColor = "#081b31";
}

const checkWinner = (userWin, userChoice, compChoice) => { //checks the winner
    if(userWin === true){
        userScore++; // userScores calculations
        userScorePara.innerText = userScore;
        message.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor = "green";
    }
    else{
        compScore++; // compScores calculations
        compScorePara.innerText = compScore;
        message.innerText = `You lose! ${compChoice} beats yours ${userChoice}`;
        message.style.backgroundColor = "red";
    }
}