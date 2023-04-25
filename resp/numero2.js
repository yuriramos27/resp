// Define a função para calcular a sequência de Fibonacci
function fibonacci(num) {
    let a = 0;
    let b = 1;
    let fib = [];
  
    // Verifica se o número é igual a 0 ou 1, que já estão na sequência
    if (num === 0) {
      return "O número 0 pertence à sequência de Fibonacci";
    } else if (num === 1) {
      return "O número 1 pertence à sequência de Fibonacci";
    }
  
    // Adiciona os dois primeiros números da sequência ao array
    fib.push(a);
    fib.push(b);
  
    // Calcula os próximos números da sequência e os adiciona ao array até chegar ao número informado ou ultrapassá-lo
    while (b < num) {
      let temp = b;
      b = a + b;
      a = temp;
      fib.push(b);
    }
  
    // Verifica se o número informado está na sequência ou não
    if (b === num) {
      return `O número ${num} pertence à sequência de Fibonacci: ${fib.join(", ")}`;
    } else {
      return `O número ${num} não pertence à sequência de Fibonacci: ${fib.join(", ")}`;
    }
  }
  
  // Teste da função com o número 21
  console.log(fibonacci(21)); // Resultado: "O número 21 pertence à sequência de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21"
  
  // Teste da função com o número 25
  console.log(fibonacci(25)); // Resultado: "O número 25 não pertence à sequência de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34" 
  