$(document).ready(function(event){
 
    $("#navContent").load("nav.html"); 
    console.log("I am here in the JS FILE");
 
 

let player = {
    choice: null
  };
  
  let computer = {
    choice: null
  };
  let msg = "";
  
  const options = ["rock", "paper", "scissors"];
  
  const computerChooses = () => {
    let randomChoiceNum = getRandomNumber();
    computer.choice = options[randomChoiceNum];
    console.log("Computer random choice is " + computer.choice);
  };
  const playerChooses = (number) => {
    player.choice = options[number];
    console.log("Player choice is " + player.choice);
  };
  
  const getRandomNumber = () => {
    return Math.floor(Math.random() * options.length);
  };
  //Add code here to determine the winner
  const compareChoices = (playerChoice, computerChoice) => {
    msg = "";
    if (playerChoice !== null) {
      if (computerChoice === playerChoice) {
        msg =
          "There is a tie, computer selected " +
          computerChoice +
          " and player selected " +
          playerChoice;
      } else if (computerChoice === options[0]) {
        //Test for Rock - paper is only winner
        if (playerChoice === options[1]) {
          msg = "Player wins; " + playerChoice + " beats " + computerChoice;
        } else {
          msg = "Computer wins; " + computerChoice + " beats " + playerChoice;
        }
      } else if (computerChoice === options[1]) {
        //Test for paper - scissors is only winner
        if (playerChoice === options[2]) {
          msg = "Player wins; " + playerChoice + " beats " + computerChoice;
        } else {
          msg = "Computer wins;" + computerChoice + " beats " + playerChoice;
        }
      } else if (computerChoice === options[2]) {
        //Test for scissors - rock is only winner
        if (playerChoice === options[0]) {
          msg = "Player wins; " + playerChoice + " beats " + computerChoice;
        } else {
          msg = "Computer wins; " + computerChoice + " beats " + playerChoice;
        }
      }
    } else if (playerChoice === null) {
      msg = "Player choice is null";
    }
    playerChoice = null;
    computerChoice = null;
    return msg;
  };
  const displayResults = (results) => {
    clearResults();
    const newh1 = document.createElement("h1");
    newh1.textContent = results;
    newh1.setAttribute("id", "output");
    const divGame = document.querySelector('#gameArea');
    divGame.appendChild(newh1);
  };
  const clearResults = () => {
    const h1 = document.querySelector('h1');
    if(h1 !== null){
     document.getElementById("output").remove();
      console.log("h1 is "+h1);  
    }
    
  };
  
  //getbutton click
  document.getElementById('0').onclick = function(e) {
    playGame(e.target.id);
   console.log("the id is "+e.target.id);
  }
  document.getElementById('1').onclick = function(e) {
    playGame(e.target.id);
   console.log("the id is "+e.target.id);
  }
  document.getElementById('2').onclick = function(e) {
    playGame(e.target.id);
   console.log("the id is "+e.target.id);
  }
  
  const playGame = (playerChoice) => {
    playerChooses(playerChoice);
    console.log("the player button choice is "+playerChoice);
    computerChooses();
    const results = compareChoices(player.choice, computer.choice);
    displayResults(results);
    console.log(results);
    
  }
});