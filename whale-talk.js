const input = 'turpentine and turtles'; //Frase que será traduzia para idoma de baleia.
const vowels = ['A', 'E', 'I', 'O', 'U']; //Array com todas as vogais.
const resultArray = []; //Guarda todas as vogais que existem na frase 'input'.

const capitalizedString = input.toUpperCase(); //Converte a frase toda para caixa alta.

//Loop verifica todas as vogais dentro da frase, duplicando os 'E' e 'U'.
for (i = 0; i < capitalizedString.length; i++) {
  if (capitalizedString[i] === 'E' || capitalizedString[i] === 'U') { //Verifica se na frase existe E ou U e salva na array 'resultArray'.
      resultArray.push(capitalizedString[i]);
     } 
  for (j = 0; j < vowels.length; j++) {
    if (capitalizedString[i] === vowels[j]) { //Compara toda as vogais da frase e salva na array 'resultArray'.
      resultArray.push(vowels[j]); 
    }
    }
}

const resultString = resultArray.join(''); //Junta todas as vogais em outra variavél, com a frase traduzida.

console.log(resultString);