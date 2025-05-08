//Array com a frase secreta.
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//Remove a ultima string da array.
const remove = secretMessage.pop();

//Substitui as últimas strings para 'to' e 'Program'.
const add = secretMessage.push('to', 'Program');

//Mostra em qual index 'easily' se encontra.
const where = secretMessage.indexOf('easily');

//Substitui a string index[7] por 'right'. 
secretMessage[7] = 'right';

//Remove a primeira string da array.
const removeF = secretMessage.shift();

//Substitui a primeira string da array por 'Programming'.
secretMessage.unshift('Programming');

//Começa pela index[5] até as 4 index seguinte, e subtitui tudo por 'know'.
const change = secretMessage.splice(5, 5, 'know');

//Junta toda as string e imprime na tela.
console.log(secretMessage.join(' '));