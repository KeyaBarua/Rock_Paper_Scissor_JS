let rspArray = {'✊':'rock', '🤚':'paper', '✌️':'scissor'}
let buttons = document.querySelectorAll(".rspButtons")
let hands = document.getElementById("hands")
let human_score = 0
let computer_score = 0
let computerChoice = ""
let player_score = document.getElementById("player-score")
let results = document.getElementById("results")
let result = ""
let clearGame = document.getElementById("clearGame")
let resultContainer = document.querySelectorAll(".resultOut")

// ** Function to get the winner **
function onClickRPS(playerChoice, computerChoice) {
  // Draw Condition
  if (playerChoice == computerChoice) {
    result = "draw"
    human_score += 0
    computer_score += 0
  }

  // Win Condition
  else if ((playerChoice == 'rock' && computerChoice == 'scissor') || (playerChoice == 'paper' && computerChoice == 'rock') || (playerChoice == 'scissor' && computerChoice == 'paper')) {
    result = "win"
    human_score += 1
    computer_score -= 1
  }
    
  else {
    result = "lose"
    human_score -= 1
    computer_score += 1
  }
}

// ** Function to show the results on the DOM ** 
function showResults(human_score, computer_score, playerChoice, computerChoice){
  player_score.innerText = `👱: ${human_score} \t\t 🤖: ${computer_score}`
  hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
  if(result == "draw"){
    results.innerText = "It's a Draw!"
  }
  else if(result == "win"){
    results.innerText = "You Win!"
  }
  else{
    results.innerText = "You Lose!"
  }
}

// ** Function to clear the game **
function cancelGame(){
    resultContainer.forEach(result =>{
    result.innerText = ""
  })
  score = 0
}

// ** Function to call the userchoice, showResults function and also clear the game **
function playgame() {
  buttons.forEach(button => {
    button.onclick = () => {
      computerChoice = getComputerChoice()
      onClickRPS(button.value, computerChoice)
      showResults(human_score, computer_score, button.value, computerChoice)
    }
  })
  
  // Clear Game
  clearGame.onclick = () =>{
    cancelGame()
  }
}


// ** getComputerChoice returns the random choice from the computer **
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3)
  if(randomNumber == 0){
    return rspArray['✊']
  }
  else if(randomNumber == 1){
    return rspArray['🤚']
  }
  else{
    return rspArray['✌️']
  }
}

playgame()
