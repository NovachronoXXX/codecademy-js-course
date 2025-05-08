//Variável contendo o meu nome.
const myName = 'ALEXANDRE'
//Variável contendo a minha idade.
let myAge = 19;
//Variável criada para calculo da minha idade em anos de Cachorro.
let earlyYears = 2;
//Variável criada para calculo da minha idade em anos de Cachorro.
let laterYears = myAge - 2;

//Calculos pra converter a minha idade em anos de Cachorro.
earlyYears *= 10.5;
laterYears *= 4;

/*Variável contendo a minha idade em anos de Cachorro.*/
let myAgeInDogYears = earlyYears + laterYears;

console.log(`My name is ${myName.toLowerCase()}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);