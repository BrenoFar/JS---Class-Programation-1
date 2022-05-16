prompt = require("prompt-sync")();

function quest1()
{
    prompt = require("prompt-sync")();
    console.log("===== QUESTÃO 1 =====")
    var comprimento = prompt("Insira o comprimento da sala: ");
    var altura = prompt("Insira a altura da Sala: ");
    var largura = prompt("Insira a largura da Sala: ");
    var areaParede = 2 *(comprimento * altura) + 2 * (largura * altura)
    var areaPiso = comprimento * largura
    var lataTinta = 300 // em M
    var lataNecessarias = areaParede * 2 / 300
    var porcelanato = areaPiso / 0.6 * 0.6 // Porcelanato necessários
    
    console.log(`Área da parede é igual --> ${areaParede}`) // Área da parede
    console.log(`Área do piso é igual a --> ${areaPiso}`) // Área do piso
    console.log(`Quantidade de tintas para pintar a sala: ${lataNecessarias.toFixed(2)}`)
    console.log(`As pedras necessárias para o piso em porcelanato serão \n ${porcelanato}`)
};
function quest2(){
    prompt = require("prompt-sync")();
    var precoLitro = 7.33;
    var econoCar = 20;
    var contaUser = Number(prompt("Insira a quantidade de dinheiro disponivel: "));
    var litroAdquirivel = (contaUser / precoLitro);
    var prevKm = litroAdquirivel * econoCar;
    console.log(`A litragem possível para compra será de: ${litroAdquirivel.toFixed(2)} \n Sua Previsão de Km será de: ${prevKm.toFixed(0)} KM's`);
};
function atquest1(){
    prompt = require("prompt-sync")();
    var n1 = prompt("Insira o número de 3 digitos: ")
    function reverterNum(num) {
        return (
          num
            .split('')
            .reverse()
            .join('')
            
        )
    }
    console.log(`O número de 3 digitos agora está como: ${reverterNum(n1)}`)
};
function atquest2(){
    var prompt = require("prompt-sync")();
    console.clear()
    largura = prompt("Insira a largura do cômodo da casa(centimetros): ") //inserção das medidas em cm
    comprimento = prompt("Insira a comprimento do cômodo da casa(centimetros): ")//inserção das medidas em cm
    areaComodo = (2 * (largura * comprimento)) / 100 // JÁ EM METROS QUADRADOS
    luzWatts = areaComodo * 18 // 18 W POR M²

    console.log(`\nA area do cômodo equivale a: ${areaComodo}\nA quantidade de energia necessária para iluminar será: ${luzWatts} W`)

};
function atquest3(){
    var prompt = require("prompt-sync")();
    console.clear()
    gasto = Number(prompt("Digite o valor total gasto para as despesas: "))
    comissao = gasto * 0.10
    valorGasto = gasto+comissao
    console.log(`VALOR FINAL DA CONTA: R$${gasto}\nVALOR FINAL COM DESPESA: R$${valorGasto.toFixed(2)} `)

};
function atquest4(){
    var prompt = require("prompt-sync")();
    console.clear()
    console.log("=====QUESTÃO 4=====")
    diasCarro = Number(prompt("Digite a quantidade de dias que você ficou com o carro: "))
    kmUsuario = Number(prompt("Digite a quantidade de KM's rodados por você nesses dias: "))
    var diariaNatal = 30;
    var kmRodado = 0.10;
    var valorSemDesconto = (diasCarro * diariaNatal) + (kmUsuario * kmRodado);
    var desconto = (diasCarro * diariaNatal) * 0.10;
    var valorTotal = valorSemDesconto - desconto;
    console.log (`O valor total é de:R$${valorSemDesconto.toFixed(2)}`);
    console.log (`O valor total com desconto é de:R$${valorTotal.toFixed(2)}`);

    
};

function atquest5(){
    
    var prompt = require("prompt-sync")();
    console.clear()
    console.log("=====QUESTÃO 5=====")
    dinheiroBolso=Number(prompt("Insira o valor ¥ do celular: "))
    moeda500 = 500;
    var n = Math.floor((dinheiroBolso / moeda500))
    console.log(`É necessário ${n} moedas de 500¥ `)
    aux = Math.floor((dinheiroBolso % moeda500))

    moeda100 = 100;           // ok
    n = Math.floor((aux / moeda100 ))
    console.log(`É necessário ${n} moedas de 100¥ `)
    aux = Math.floor((aux % moeda100))

    moeda50 = 50;
    n = Math.floor((aux / moeda50))
    console.log(`É necessário ${n} moedas de 50¥ `)
    aux = Math.floor((aux % moeda50))
  
    moeda10 = 10;
    n = Math.floor((aux / moeda10))
    console.log(`É necessário ${n} moedas de 10¥ `)
    aux = Math.floor((aux % moeda10))

    moeda5 = 5;
    n = Math.floor((aux / moeda5))
    console.log(`É necessário ${n} moedas de 5¥ `)
    aux = Math.floor((aux % moeda5))

    moeda1 = 1;
    n = Math.floor((aux / moeda1))
    console.log(`É necessário ${n} moedas de 1¥ `)
    aux = Math.floor((aux % moeda1))

};

function condquest1(){

    console.clear()
    console.log("============-->QUESTÃO 1<--============")
    diariaHotel = 60;
    diaria = Number(prompt(("Informe a quantidade de dias no hotel: ")))
    if (diaria > 15) {
        diariaTaxa = 5.50;
        totalConta = ((diariaTaxa + 60) * diaria)
        console.log(`O valor total do cliente é de: R$${totalConta.toFixed(2)}`)
    }
    else if (diaria == 15) {
        diariaTaxa = 6;
        totalConta = ((diariaTaxa + 60) * diaria)
        console.log(`O valor total do cliente é de: R$${totalConta.toFixed(2)}`)
    }
    else {
        diariaTaxa = 8;
        totalConta = ((diariaTaxa + 60) * diaria)
        console.log(`O valor total do cliente é de: R$${totalConta.toFixed(2)}`)
    }

};
function condquest2(){

console.log("Insira o tipo de investimento\n1- Poupança\n2- Fundo renda fixa")
tipoInvest = Number.parseInt(prompt("Opção: "))


switch (tipoInvest){
    case 1:
        console.clear();
        console.log("==========Tipo poupança==========");
        valorInvest = parseFloat(prompt(`Insira o valor do investimento: `));
        rendMensal = valorInvest * 0.03;
        valorTotalMes = rendMensal + valorInvest;
        console.log(`O valor no final do mês será de R$${valorTotalMes}`);
        break;
    case 2:
        console.clear();
        console.log("==========Tipo Fundo de renda Fixa==========");
        valorInvest = parseFloat(prompt(`Insira o valor do investimento: `));
        rendMensal = valorInvest * 0.04;
        valorTotalMes = rendMensal + valorInvest;
        console.log(`O valor no final do mês será de R$${valorTotalMes}`);
        break;

    default:
        console.log("Tipo de Investimento inválido!");
        break;

    }
};
function condquest3(){
d1 = parseInt(prompt(console.log("Insira quantos dedos Alice colocou: ")))
d2 = parseInt(prompt(console.log("Insira quantos dedos Bob colocou: ")))
p = prompt(console.log("Quem gritou par?\nAlice = 0\nBob = 1"))

if (p == 0){
    aux = (d2 + d1) % 2
    if (aux == 0) {
        console.log(`Alice ganhou, o resultado é par.`)
    }
    else{
        console.log(`Bob ganhou, o resultado é impar.`)
    };
}
else if(p == 1){
    aux = (d2 + d1) % 2
    if (aux == 0) {
        console.log(`Bob ganhou, o resultado é par.`)
    }
    else{
        console.log(`Alice ganhou, o resultado é impar.`)
    };

}
};
function condquest4(){
    a = parseInt(prompt("Digite o valor de A: "))
    b = parseInt(prompt("Digite o valor de B: "))
    c = parseInt(prompt("Digite o valor de C: "))
    console.log("Insira uma das opções a seguir\nn = 1 - escrever os três valores em ordem crescente\nn = 2 - apresentar o somatório dos três valores\nn = 3 - escrever o maior entre os três valores")
    n = parseInt(prompt("Opção: "))
    switch(n){
        case 1:
            if (a > b && a > c){
                if (b > c){
                    console.log(`A ordem é`,a,b,c)
                }
                else {
                    console.log(`A ordem é`,a,c,b)
                }
            }
            else if (b > a && b > c){
                if (a > c){
                    console.log(`A ordem é`,b,a,c)
                }
                else {
                    console.log(`A ordem é`,b,c,a)
                }
            }
            else if (c > a && c > b){
                if (c > a){
                    console.log(`A ordem é`,c,a,b)
                }
                else {
                    console.log(`A ordem é`,c,b,a)
                }
            }
            break
        case 2:
            soma = a + b + c
            console.log(`A somatória dos valores\nA=${a}\nB=${b}\nC=${c}\nA soma dos valores é: ${soma}`)
            break
        case 3:
            if (a > b && a > c){
                console.log(`O maior valor é: ${a}`)
            }
            if (b > a && b > c){
                console.log(`O maior valor é: ${b}`)
            }
            if (c > a && c > b){
                console.log(`O maior valor é: ${c}`)
            }
            break
        default:
            console.log(`Não é um dos valores informados, finalizando a programação!`)
            prompt(console.log(`Digite para finalizar a programação.`))
            break
    }

};
function repetquest1(){

}
function repetquest2(){
valorTotal = 0
valor = 0
while (valor >=0){
    if (valor < 0){
        break
    }
    else{
    valor=parseInt(prompt(console.log("Digite o valor a ser somado: ")))
    valorTotal = valorTotal + valor}

};
console.log(`O valor total é ${valorTotal}`)
}
repetquest2()