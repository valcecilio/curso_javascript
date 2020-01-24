console.log("EXERCÍCIO 1 - Trocando os números das variáveis")
let A = 999;
let B = 555;
let C = 0;
console.log("Conteúdo inicial " + A);
console.log("A = " + A);
console.log("B = " + B);
console.log("Conteúdo secundário" + B);

console.log("trocando...");
C = A;
A = B;
B = C;

console.log("trocado");
console.log("A = " + A);
console.log("B = " + B);

console.log("---------------------");

console.log("EXERCÍCIO 2 - soma dos quadrados dos números")

let numero1 = prompt("Informe um número");
let numero2 = prompt("Informe outro número");
let numero3 = prompt("Informe mais outro número");
let numero4 = prompt("Informe mais um número para finalizar");

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);
numero3 = parseFloat(numero3);
numero4 = parseFloat(numero4);

let total = (numero1*numero1)+(numero2*numero2)+(numero1*numero1)+(numero2*numero2);

console.log(total);
console.log(typeof(numero1));
console.log(typeof(numero2));
console.log(typeof(numero3));
console.log(typeof(numero4));

console.log("---------------------");

console.log("EXERCÍCIO 3 - comissão do vendedor")

let nome_vendedor = prompt("Informe o nome do vendedor");
let cod_peca = prompt("Informe o código da peça");
let preco_unit_peca= prompt("Informe o preço da peça vendida");
let quantidade = prompt("Informe a quantidade vendida");

preco_total = preco_unit_peca*quantidade;
comissao = preco_total*0.15;


console.log("Vendedor: " + nome_vendedor);
console.log("Código da peça: " + cod_peca);
console.log("Preço unitário da peça R$" + preco_unit_peca);
console.log("Peças vendidas " + quantidade);
console.log("Valor total da venda R$" + preco_total);
console.log("Comissão: R$" + comissao);

