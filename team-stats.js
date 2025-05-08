//Define um objeto chamado 'team' que representa um time com jogadores e histórico de jogos.
const team = {
    teamName: "", //String de objeto vazia para armazena o nome do time.
    _players: [
      //Array de objetos contendo os jogadores do time (privado, convenção com _).
      {
        firstName: "John", //Nome.
        lastName: "Doe", // Sobrenome.
        age: 25, //Idade.
      },
      {
        firstName: "Jane", //Nome.
        lastName: "Smith", // Sobrenome.
        age: 28, //Idade
      },
      {
        firstName: "Mike", //Nome.
        lastName: "Johnson", // Sobrenome.
        age: 30, //Idade.
      },
    ],
    _games: [], //Array vazio para armazenar os jogos do time (privado, convenção com _).
    get players() {
      // Getter para acessar a lista de jogadores (somente leitura)
      return this._players;
    },
    get games() {
      //Getter para acessar a lista de jogos (somente leitura).
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      //Método para adicionar um novo jogador ao time.
      const newPlayer = {
        //Cria um objeto representando o novo jogador.
        firstName: newFirstName, //Define o nome.
        lastName: newLastName, //Define o sobrenome.
        age: newAge, //Define a idade.
      };
      this.players.push(newPlayer); //Adiciona o novo jogador ao array _players.
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      //Método para adicionar um novo jogo ao histórico.
      const newGame = {
        //Cria um objeto representando o novo jogo.
        opponent: newOpponent, //Nome do time adversário.
        teamPoints: newTeamPoints, //Pontos do time (nosso time).
        opponentPoints: newOpponentPoints, //Pontos do adversário.
      };
      this.games.push(newGame); //Adiciona o novo jogo ao array _games.
    },
  };
  
  team.addPlayer("Bugs", "Bunny", 76); //Adiciona um novo jogador ao time (Bugs Bunny, 76 anos).
  team.addGame("Titans", 100, 98); //Adiciona um novo jogo contra os Titans com placar 100x98.
  team.teamName = "Demons";
  
  console.log("=== JOGADORES ==="); //Exibe a lista de jogadores.
  team.players.forEach((player, index) => {
    console.log(
      `${index + 1}. ${player.firstName} ${player.lastName}, ${player.age} anos`
    );
  });
  
  console.log("\n=== JOGOS ==="); //Exibe a lista de jogos.
  team.games.forEach((game, index) => {
    console.log(
      `${team.teamName} vs ${game.opponent}\nPontos do Time: ${game.teamPoints}\nPontos do Oponente: ${game.opponentPoints}\n`
    );
  });  