import promptSync from 'prompt-sync'
import Tela from './classeTelas.js'
import FuncVenda from './classeFuncoes.js'

const prompt = promptSync();
const tela = new Tela()
const funcVenda = new FuncVenda()

var vendedoresCodigo = []
var vendedoresNome = []
var produtosCodigo = []
var produtosDescricao = []
var produtosPreco = []
var vendasCodigo = []
var vendasValor = []
var vendasDesc = []
var vendasVendedor = []

var aux=1
    while (aux!=0){
        aux=Number(tela.menuPrincipal())
        if (aux==0) {
            console.clear()
            console.log("\nENCERRANDO O PROGRAMA!")
        } else if (aux==1) {
            var aux2=1
            while (aux2!=0){
                aux2=Number(tela.menuGestor())
                if (aux2==0) {
                    console.clear()
                    console.log("\nRetornando!")
                } else if (aux2==1) {
                    var apoio=1
                    bloco_cadVendedor:{
                        while (apoio!=0) {
                            console.clear()
                            console.log("=============================GESTOR=============================")
                            console.log("CADASTRO DE VENDEDOR - FLAG = 0 no código do vendedor")
                            console.log("================================================================")
                            var codVendedor = Number(prompt("Código do vendedor: "))
                            apoio=codVendedor
                            if (apoio==0) {
                                break bloco_cadVendedor
                            }
                            if (!vendedoresCodigo.includes(codVendedor)){ // FAZ A VALIDAÇÃO SE JÁ O TEM CODIGO
                                var nomeVendedor = (prompt("Nome do vendedor..: "))
                                vendedoresCodigo.push(codVendedor)
                                vendedoresNome.push(nomeVendedor)
                            }
                                console.log("================================================================")
                        }
                    }
                } else if (aux2==2) {
                    console.clear()
                    console.log("=============================GESTOR=============================")
                    for (var i=0;i<vendedoresCodigo.length;i++)
                    {
                        console.log("Vendedor "+(i+1)+": ")
                        console.log("\nCódigo do vendedor: "+vendedoresCodigo[i]+"\nNome do vendedor..: "+vendedoresNome[i],"\n\n")
                    }
                    console.log("\nExibindo vendedores, para remover um, basta colocar seu código")
                    //LISTA DOS VENDEDORES SENDO EXIBIDA//
                    console.log("================================================================")
                    var eExibirVendedores = Number(prompt("Código do vendedor para ser apagado (0 para voltar): "))
                    if (eExibirVendedores == 0) {
                        console.clear()
                        console.log("=============================GESTOR=============================")
                        prompt("Retornando!")
                    } else {
                        var indiceVendedor = vendedoresCodigo.indexOf(eExibirVendedores)
                        vendedoresCodigo.splice(indiceVendedor,1)
                        vendedoresNome.splice(indiceVendedor,1)
                        console.clear()
                        console.log("=============================GESTOR=============================")
                        prompt("Vendedor removido com sucesso!")

                        ///REMOVENDO VENDEDOR COM O CÓDIGO INFORMADO
                    }
                    console.log("================================================================")
                } else if (aux2==3) {
                    apoio=1
                    bloco_cadProduto:{
                        while (apoio!=0) {
                            console.clear()
                            console.log("=============================GESTOR=============================")
                            console.log("CADASTRO DE PRODUTOS - FLAG = 0 no código do produto")
                            console.log("================================================================")
                            var codProduto = Number(prompt("Código do produto: "))
                            apoio=codProduto
                            if (apoio==0) {
                                break bloco_cadProduto
                            }
                            if (!produtosCodigo.includes(codProduto))
                            { // FAZ A VALIDAÇÃO SE JÁ O TEM CODIGO
                                var nomeProduto = (prompt("Nome do produto..: "))
                                var precoProduto = Number(prompt("Preço do produto.: "))
                                produtosCodigo.push(codProduto)
                                produtosDescricao.push(nomeProduto)
                                produtosPreco.push(precoProduto)
                            }

                            console.log("================================================================")

                        }
                    }
                } else if (aux2==4) {
                    console.clear()
                    console.log("=============================GESTOR=============================")
                    for (i=0;i<produtosCodigo.length;i++)
                    {
                        console.log("Produto "+(i+1)+": ")
                        console.log("\nCódigo do produto...: "+produtosCodigo[i]+"\nDescrição do produto: "+produtosDescricao[i]+"\nValor do produto....: "+produtosPreco[i],"\n")
                    }
                    console.log("Exibindo produtos, para remover um, basta colocar seu código")
                    //LISTA DOS PRODUTOS SENDO EXIBIDA//
                    console.log("================================================================")
                    var eExibirProdutos = Number(prompt("Código do produto para ser apagado (0 para voltar): "))
                    if (eExibirProdutos==0) {
                        console.clear()
                        console.log("=============================GESTOR=============================")
                        prompt("Retornando!")
                    } else {
                        var indiceProduto = produtosCodigo.indexOf(eExibirProdutos)
                        produtosCodigo.splice(indiceProduto,1)
                        produtosDescricao.splice(indiceProduto,1)
                        produtosPreco.splice(indiceProduto,1)
                        
                        console.clear()
                        console.log("=============================GESTOR=============================")
                        prompt("Produto removido com sucesso!")

                        ///REMOVENDO PRODUTO COM O CÓDIGO INFORMADO
                    }
                    console.log("================================================================")
                } else if (aux2==5) {
                    console.clear()
                    console.log("=============================GESTOR=============================")
                    console.log("1. Relatório por vendedor")
                    console.log("2. Relatório geral")
                    console.log("0. Voltar")
                    console.log("================================================================")
                    aux3 = Number(prompt("Digite uma das opções acima: "))
                    console.log("================================================================")
                    if (aux3==1) {
                        console.clear()
                        console.log("=============================GESTOR=============================")
                        console.log("Informe o código do vendedor (0 para voltar): ")
                        console.log("================================================================")     
                        var codVendedorExibirVenda = Number(prompt())
                        if (codVendedorExibirVenda==0) {
                            prompt("Retornando!")
                        } else {
                            var indicesVendedorVendas=[]
                            var indiceVendedor=0
                            var tamanhoIndicesVendedorVendas=0
                            console.clear()
                            indicesVendedorVendas = funcVenda.descobreVendasVendedor(codVendedorExibirVenda, vendasVendedor)
                            tamanhoIndicesVendedorVendas = funcVenda.descobreTamanhoVendasVendedor(codVendedorExibirVenda, vendasVendedor)
                            if (tamanhoIndicesVendedorVendas==0){
                                console.log("O vendedor não tem vendas!")
                            } else {
                                console.clear()
                                console.log("=============================GESTOR=============================")
                                console.log("================================================================")
                                for (var cont=0; cont<tamanhoIndicesVendedorVendas; cont++) {
                                    indiceVendedor=indicesVendedorVendas[cont]
                                    console.log("Venda "+(cont+1)+": ")
                                    console.log("================================================================")
                                    console.log("\nCódigo da venda.....: "+vendasCodigo[indiceVendedor]+"\nCódigo do vendedor..: "+vendasVendedor[indiceVendedor]+"\nValor total da venda: R$ "+vendasValor[indiceVendedor].toFixed(2))
                                    console.log("\nDescrição da venda..: "+vendasDesc[indiceVendedor])
                                    console.log("\n\n\n\n================================================================")
                                }
                                prompt()
                                console.clear()
                            }
                        }
                    } else if (aux3==2) {
                        console.clear()
                        var valoresReal = vendasValor.map(funcaoReal)
                        console.log("=============================GESTOR=============================")
                            for (i=0;i<vendasCodigo.length;i++)
                        {
                            console.log("================================================================")
                            console.log("Venda "+(i+1)+": ")
                            console.log("================================================================")
                            console.log("\nCódigo da venda...: "+vendasCodigo[i]+"\nValor da venda....: "+valoresReal[i],"\n"+"\nCódigo do vendedor: "+vendasVendedor[i],"\n")
                            console.log("================================================================")
                        }
                            //CÓDIGO DO RELATÓRIO GERAL
                        console.log("================================================================")
                        prompt()
                        console.clear()
                    }
                }
            }
        } else if (aux==2) {
            var aux3=1
            while (aux3!=0){
                aux3=Number(tela.menuVendedor())
                if (aux3==0) {
                    console.clear()
                    console.log("\nRetornando!")
                } else if (aux3==1) {
                    bloco_cadVenda:{
                        var codProdVenda=1
                        var qtdProdVenda=1
                        var valorTotalVenda=0
                        var descProdVenda=""
                        while (codProdVenda!=0 && qtdProdVenda!=0) {
                            var valorProdVenda=0
                            console.clear()
                            console.log("============================VENDEDOR============================")
                            console.log("Informe o código dos produtos vendidos e a quantidade (flag = 0)")
                            console.log("================================================================")
                            codProdVenda = Number(prompt("Código do produto: "))
                            qtdProdVenda = Number(prompt("Quantidade: "))
                            if (codProdVenda==0 || qtdProdVenda==0) {
                                break bloco_cadVenda
                            }
                            valorProdVenda = funcVenda.descobreValorProd(codProdVenda, produtosCodigo, produtosPreco)
                        // E MULTIPLICAR PELA QUANTIDADE
                            //E DEPOIS VAI JOGAR AS TRÊS INFOS NUMA LINHA 
                            //DE UMA STRING QUE VAI SER UMA POSIÇÃO NUM ARRAY (DescVenda)
                            //SE FOR POSSÍVEL (COD, QTD E VALOR)
                            if (valorProdVenda==0) {
                                prompt("Código de produto inválido!")
                            } else{
                                var indiceNome = produtosCodigo.indexOf(codProdVenda)
                                descProdVenda = descProdVenda+"\n\n   Código....:"+codProdVenda+"\n   Nome......: "+produtosDescricao[indiceNome]+"\n   Quantidade:"+qtdProdVenda+"\n   Valor.....: R$ "+valorProdVenda.toFixed(2)+"\n\n"
                                valorTotalVenda = valorTotalVenda+(valorProdVenda*qtdProdVenda)
                            }
                        }
                    }
                    console.log("================================================================")
                    var codVenda=Number(prompt("Informe o código dessa venda............: "))
                    var codVendedorVenda=Number(prompt("Informe o código do vendedor dessa venda: "))
                    console.log("================================================================")
                    vendasCodigo.push(codVenda)
                    vendasValor.push(valorTotalVenda)
                    vendasDesc.push(descProdVenda)
                    vendasVendedor.push(codVendedorVenda)
                    prompt("VENDA CADASTRADA!")
                }
            }
        }
    }
function funcaoReal(num){
    return "R$ " + num.toFixed(2)
}