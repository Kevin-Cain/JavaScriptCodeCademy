
// Game of Rock, Paper, Scissors



  const getUserChoice = userInput => {
    userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' ||      userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Not valid choice');
    }
  }
  
  
  function getComputerChoice()  {
    randomNumber = Math.floor(Math.random() * 3)
    switch(randomNumber) {
      case 0:
        return 'rock'
      case 1:
        return 'paper'
      case 2:
        return 'scissors'
    }
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'bomb'){
      return 'COMPUTER GOT BOMBBBED'
    }
    if (userChoice === computerChoice) {
      return 'tie';
    } 
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'you loose';
      } else {
          return 'you win';
      }
    } if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
        return 'you loose';
      } else {
          return 'you win';
      }
    } if (userChoice === 'rock') {
        if (computerChoice === 'scissors') {
        return 'you win';
      } else {
          return 'you loose';
    }
  }
  }
  
  function playGame() {
    var userChoice = getUserChoice('rock');
    var computerChoice = getComputerChoice();
    console.log('user: ' + userChoice);
    console.log('computer: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();