/*Como temos que retribuir o valor de 
"Kelvin", utilizamos uma variável "let".*/
let kelvin = 293;
/*Para converter kelvin para celsius, criamos outra variável 
"let" e atribuímos o valor dela para -273 o valor de "Kelvin".*/
let celsius = kelvin - 273;
/*Para calcular o valor de Fahrenheit usamos uma equação, 
como abaixo, usando o valor da variável "celsius".*/
let fahrenheit = celsius * (9 / 5) + 32;

/*Método para arredondar o valor de Celsius.*/
Math.floor(celsius);
/*Método para arredondar o valor de Fahrenheit.*/
Math.floor(fahrenheit);

console.log(`Kelvin's temperature is: ${kelvin}`);
console.log(`The temperature in Celsius is ${celsius}.`);
console.log(`The temperature in Fahrenheit is ${fahrenheit}.`);