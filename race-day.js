let raceNumber = Math.floor(Math.random() * 1000); // Inicialização do número aleatório
let runnerRegistered = true; // Se o corredor foi registrado
let runnersAge = 18; // Idade do corredor

// Verifica se o corredor é adulto e foi registrado cedo
if (runnerRegistered === true && runnersAge >= 18) {
  raceNumber += 1000; // Adultos registrados cedo ganham número >= 1000
}

// Define os horários de corrida com base nas condições
if (runnerRegistered === true && runnersAge > 18) {
  console.log(`${raceNumber}: Early adults run at 9:30 am.`);
} else if (runnerRegistered === false && runnersAge > 18) {
  console.log(`${raceNumber}: Late adults run at 11:00 am.`);
} else if (runnersAge < 18) {
  console.log(`${raceNumber}: Youth registrants run at 12:30 pm.`);
} else if (runnersAge = 18) {
    console.log('See the registration desk:\nEarly adults run at 9:30 am.\nLate adults run at 11:00 am.\nYouth registrants run at 12:30 pm (regardless of registration).');
}