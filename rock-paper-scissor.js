const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') { //Verifica se a opção existe
      return userInput; //Retorna com a opção do usuário, se existir.
    } else {
      console.log("Invalid Choice");
      return null; //Se não existir, exibe a mensagem de "Invalid Choice" ou "Opção Inválida"
    }
  };
  
  function getComputerChoice() {
    const cpuChoice = ["rock", "paper", "scissors"]; //Array que salva as opções do Computador.
    const random = Math.floor(Math.random() * 3); //Gera um numero aleátorio.
    return cpuChoice[random]; //Retorna com a opção do usuário.
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) { //Compara a opção de cada um e retorna o resultado.
      return "Tied";
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
      return "Winner";
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
      return "Winner";
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
      return "Winner";
    } else if (userChoice === 'rock' && computerChoice === 'paper') {
      return "Loser";
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
      return "Loser";
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
      return "Loser";
    } else if (userChoice === 'bomb' && computerChoice === 'rock' || computerChoice === 'paper' || computerChoice === 'scissors') {
      return "Winner";
    }
  }
  
  const userChoice = getUserChoice('bomb'); //Escolhe uma opção dentro dos '' e salva a escolha na variável.
  const computerChoice = getComputerChoice(); //Chama a função que gera a escolha do Computador.
  
  console.log("User choice:", userChoice);
  console.log("Computer choice:", computerChoice);
  console.log("Result:", determineWinner(userChoice, computerChoice));