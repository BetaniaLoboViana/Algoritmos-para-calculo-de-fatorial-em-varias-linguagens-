const readline = require('readline');

// interface de entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para calcular o fatorial
function calcularFatorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * calcularFatorial(n - 1);
    }
}

// Pergunta ao usuário
rl.question('Digite um número para calcular o fatorial: ', (numero) => {
    const n = parseInt(numero);
    if (isNaN(n)) {
        console.log('Por favor, insira um número válido.');
    } else {
        const resultado = calcularFatorial(n);
        console.log(`O fatorial de ${n} é: ${resultado}`);
    }
    rl.close(); // Fecha a interface de leitura
});