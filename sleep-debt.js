//Função que salva a quantidade de horas que você dormiu cada dia da semana.
function getSleepHours(day) {
  switch (day) {
    case "Monday":
      return 8;
      break;

    case "Tuesday":
      return 8;
      break;

    case "Wednesday":
      return 8;
      break;

    case "Thursday":
      return 8;
      break;

    case "Friday":
      return 8;
      break;

    case "Saturday":
      return 8;
      break;

    case "Sunday":
      return 8;
      break;

    default:
      console.log("Invalid Data");
      break;
  }
}

//Função que soma quantidade de horas dormida na semana.
const getActualSleepHours = () =>
  getSleepHours("Monday") +
  getSleepHours("Tuesday") +
  getSleepHours("Wednesday") +
  getSleepHours("Thursday") +
  getSleepHours("Friday") +
  getSleepHours("Saturday") +
  getSleepHours("Sunday");

//Função que calcula a quatidade ideal de horas que você quer dormir na semana.
function getIdealSleepHours() {
  const idealHours = 4;
  return idealHours * 7;
}

//Função que calcula a quantidade de horas que você precisa ou dormiu a dourmiu mais.
function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  //Calcula e arredonda as horas que você precisa dormir ou que dormiu a mais
  const SleepDebt = Math.abs(idealSleepHours - actualSleepHours);

  //Declaração que verifica se você dormiu muito, pouco ou o ideal.
  if (actualSleepHours === idealSleepHours) {
    return "You have a perfect amount of night sleep";
  } else if (actualSleepHours > idealSleepHours) {
    return `You sleep ${SleepDebt} hours more on week than needed`;
  } else if (actualSleepHours < idealSleepHours) {
    return `You need to sleep ${SleepDebt} more hours a week.`;
  }
}

const day = "Sunday";
const hoursSlept = getSleepHours(day);

console.log(`The hours you slept on ${day}: ${hoursSlept} hours`);
console.log(`The hours you slept this week: ${getActualSleepHours()} hours`);
console.log(`Your ideal sleep hours: ${getIdealSleepHours()} hours`);
console.log(calculateSleepDebt());
