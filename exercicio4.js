// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
//

const faturamentoMensal = {
    SP: 67836.43, 
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const total = faturamentoMensal.SP + faturamentoMensal.RJ + faturamentoMensal.MG + faturamentoMensal.ES + faturamentoMensal.Outros;

console.log(`O percentual de representação do estado São Paulo foi de ${(faturamentoMensal.SP * 100 / total).toFixed(2)}%`);
console.log(`O percentual de representação do estado Rio de Janeiro foi de ${(faturamentoMensal.RJ * 100 / total).toFixed(2)}%`);
console.log(`O percentual de representação do estado Minas Gerais foi de ${(faturamentoMensal.MG * 100 / total).toFixed(2)}%`);
console.log(`O percentual de representação do estado Espírito Santo foi de ${(faturamentoMensal.ES * 100 / total).toFixed(2)}%`);
console.log(`O percentual de representação dos outros estados foi de ${(faturamentoMensal.Outros * 100 / total).toFixed(2)}%`);