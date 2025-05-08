// Define um objeto chamado 'menu' que representa um cardápio de restaurante
const menu = { 
    // Propriedade privada para armazenar o nome da refeição (inicialmente vazia)
    _meal: '', 
    
    // Propriedade privada para armazenar o preço (inicialmente 0)
    _price: 0,
    
    // Setter para a propriedade meal (permite definir o valor de _meal com validação)
    set meal(mealToCheck) {
      // Verifica se o valor passado é uma string
      if (typeof mealToCheck == 'string') {
        // Se for string, atribui ao _meal
        return this._meal = mealToCheck;
      } else {
        // Se não for string, mostra mensagem de erro
        console.log('Meal must to be a food name!');
      }
    },
    
    // Setter para a propriedade price (permite definir o valor de _price com validação)
    set price(priceToCheck) {
      // Verifica se o valor passado é um número
      if (typeof priceToCheck == 'number') {
        // Se for número, atribui ao _price
        return this._price = priceToCheck;
      } else {
        // Se não for número, mostra mensagem de erro
        console.log('Price must to be a number!');
      }
    },
    
    // Getter para obter o prato especial do dia
    get todaysSpecial() {
      // Verifica se ambos _meal e _price foram definidos corretamente
      if (this._meal && this._price) {
        // Retorna a mensagem formatada com o prato e preço
        return `Today's Special is ${this._meal} for $${this._price}!`;
      } else {
        // Se algum não foi definido corretamente, retorna mensagem de erro
        return 'Meal or price was not set correctly!';
      }
    }
  };
  
  // Define o nome da refeição usando o setter meal
  menu.meal = 'Chicken';
  // Define o preço usando o setter price
  menu.price = 9.99;
  // Obtém e exibe o prato especial do dia usando o getter todaysSpecial
  console.log(menu.todaysSpecial);