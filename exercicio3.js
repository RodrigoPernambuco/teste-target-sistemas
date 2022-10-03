import fs from "fs"


// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const dados = JSON.parse(fs.readFileSync("./dados.json"))

let min = Infinity;
let max = 0;
let valorTotal = 0;
let totalDeDias = 0;

dados.forEach((faturamento) => {
    if(faturamento.valor > max){
        max = faturamento.valor;
    }
    if(faturamento.valor > 0 && faturamento.valor < min){
        min = faturamento.valor;
    }
    if(faturamento.valor > 0){
        valorTotal += faturamento.valor;
        totalDeDias += 1;
    }
})

const media = valorTotal / totalDeDias;
let diasAcimaDaMedia = 0;

dados.forEach((faturamento) => {
    if(faturamento.valor > media){
        diasAcimaDaMedia += 1;
    }
})



console.log("O menor valor de faturamento é: ", min);
console.log("O maior valor de faturamento é: ", max);
console.log("O número de dias onde o faturamento foi acima da média é: ", diasAcimaDaMedia);