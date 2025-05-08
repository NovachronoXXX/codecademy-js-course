// Função que retorna um evento esportivo aleatório
const getRandEvent = () => {
    // Gera um número aleatório entre 0 e 2
    const random = Math.floor(Math.random() * 3);
  
    // Retorna o evento correspondente ao número gerado
    if (random === 0) {
      return 'Marathon';      // Maratona
    } else if (random === 1) {
      return 'Triathlon';     // Triatlo
    } else if (random === 2) {
      return 'Pentathlon';    // Pentatlo
    }
  };
  
  // Função que determina quantos dias de treino são necessários para cada evento
  const getTrainingDays = event => {
    let days = 0;  // Inicializa o contador de dias
  
    // Atribui o número de dias com base no tipo de evento
    if (event === 'Marathon') {
      days = 50;    // Maratona requer 50 dias
    } else if (event === 'Triathlon') {
      days = 100;   // Triatlo requer 100 dias
    } else if (event === 'Pentathlon') {
      days = 200;   // Pentatlo requer 200 dias
    }
  
    return days;  // Retorna o total de dias necessários
  };
  
  // Função para exibir o evento do atleta (ESTÁ COM ERRO - não recebe 'event' como parâmetro)
  const logEvent = (name, event) => {  // Corrigido: adicionado parâmetro 'event'
    console.log(`${name}'s event is: ${event}`);
  };
  
  // Função para exibir o tempo de treino do atleta (ESTÁ COM ERRO - não recebe 'days' como parâmetro)
  const logTime = (name, days) => {    // Corrigido: adicionado parâmetro 'days'
    console.log(`${name}'s time to train is: ${days} days`);
  };
  
  // Primeiro atleta
  const event = getRandEvent();      // Sorteia um evento aleatório
  const days = getTrainingDays(event); // Calcula dias de treino
  const name = 'Nala';               // Nome do primeiro atleta
  
  // Segundo atleta
  const event2 = getRandEvent();     // Sorteia outro evento aleatório
  const days2 = getTrainingDays(event2); // Calcula dias de treino
  const name2 = 'Warren';            // Nome do segundo atleta
  
  // Exibe informações do SEGUNDO atleta (Warren)
  logEvent(name2, event2);  // Mostra o evento de Warren
  logTime(name2, days2);    // Mostra o tempo de treino de Warren
  
  // Observação: As informações do primeiro atleta (Nala) são geradas, mas não são exibidas