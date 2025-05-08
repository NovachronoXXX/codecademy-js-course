let userName = 'Alex' //Nome do usuário
let userQuestion = 'Is JS a good programming language?' //Pergunta do usuário
let randomNumber = Math.floor(Math.random() * 8); //Váriavel que gera um número aleátorio
let eightBall = '' //Várivael criada para armazenar a pergunta escolhida.

userName ? console.log(`Hello, ${userName}`) //Verifica se o nome existe dentro da variável
: console.log('Hello!');

console.log(`${userName} has asked: ${userQuestion}`)

switch (randomNumber){ //Escolhe o case de acordo com o numero gerado entre 0-7
  case 0 :
  eightBall = 'It is certain';
  break;
  case 1 :
  eightBall = 'It is decidedly so';
  break;
  case 2 :
  eightBall = 'Reply hazy try again';
  break;
  case 3 :
  eightBall = 'Cannot predict now';
  break;
  case 4 :
  eightBall = 'Do not count on it';
  break;
  case 5 :
  eightBall = 'My sources say no';
  break;
  case 6 :
  eightBall = 'Outlook not so good';
  break;
  case 7 :
  eightBall = 'Signs point to yes';
  break;
}

console.log(eightBall)