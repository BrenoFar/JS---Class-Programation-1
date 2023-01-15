prompt=require("prompt-sync")()
var vendedoresCodigo = []
var vendedoresNome = []
var produtosCodigo = []
var produtosDescricao = []
var produtosPreco = []
var vendasCodigo = []
var vendasValor = []
var vendasDesc = []
var vendasVendedor = []

aux=1
    while (aux!=0){
        console.clear()
        console.log("===========================MENU PRINCIPAL===========================")
        console.log("1. Gestor")
        console.log("2. Vendedor")
        console.log("0. Encerrar programa")
        console.log("====================================================================")
        aux = Number(prompt("Digite uma das opções acima: "))
        console.log("====================================================================")
        if (aux==0) {
            console.clear()
            console.log("\nENCERRANDO O PROGRAMA!")
        } else if (aux==1) {
            aux2=1
            while (aux2!=0){
                console.clear()
                console.log("=============================GESTOR=============================")
                console.log("1. Cadastrar vendedor")
                console.log("2. Exibir vendedores")
                console.log("3. Cadastrar produto")
                console.log("4. Exibir produtos")
                console.log("5. Relatórios de vendas")
                console.log("0. Voltar")
                console.log("================================================================")
                aux2 = Number(prompt("Digite uma das opções acima: "))
                console.log("================================================================")
                if (aux2==0) {
                    console.clear()
                    console.log("\nRetornando!")
                } else if (aux2==1) {
                    apoio=1
                    bloco_cadVendedor:{
                        while (apoio!=0) {
                            console.clear()
                            console.log("=============================GESTOR=============================")
                            console.log("CADASTRO DE VENDEDOR - FLAG = 0 no código do vendedor")
                            console.log("================================================================")
                            codVendedor = Number(prompt("Código do vendedor: "))
                            apoio=codVendedor
                            if (apoio==0) {
                                break bloco_cadVendedor
                            }
                            if (!vendedoresCodigo.includes(codVendedor)){ // FAZ A VALIDAÇÃO SE JÁ O TEM CODIGO
                                nomeVendedor = (prompt("Nome do vendedor..:"))
                                vendedoresCodigo.push(codVendedor)
                                vendedoresNome.push(nomeVendedor)
                            }
                                console.log("================================================================")
                        }
                    }
                } else if (aux2==2) {
                    console.clear()
                    console.log("=============================GESTOR=============================")
                    for (i=0;i<vendedoresCodigo.length;i++)
                    {
                        console.log("Vendedor "+(i+1)+": ")
                        console.log("\nCódigo do vendedor...:"+vendedoresCodigo[i]+"\nNome do vendedor..:"+vendedoresNome[i],"\n")
                    }
                    /*
                    for (cont=0; cont<vendedoresCodigo.lenght; cont++) {
                        console.log("\n\nVendedor "+(cont+1)+": ")
                        console.log("\nCódigo do vendedor: "+vendedoresCodigo[cont]+"\nNome do vendedor..: "+vendedoresNome[cont])
                    }
                    */

                    //console.log(`Código - ${vendedoresCodigo}\nVendedor - ${vendedoresNome}`)
                    console.log("\nExibindo vendedores, para remover um, basta colocar seu código")
                    //LISTA DOS VENDEDORES SENDO EXIBIDA//
                    console.log("================================================================")
                    eExibirVendedores = Number(prompt("Código do vendedor para ser apagado (0 para voltar): "))
                    if (eExibirVendedores == 0) {
                        console.clear()
                        console.log("=============================GESTOR=============================")
                        prompt("Retornando!")
                    } else {
                        indiceVendedor = vendedoresCodigo.indexOf(eExibirVendedores)
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
                            codProduto = Number(prompt("Código do produto: "))
                            apoio=codProduto
                            if (apoio==0) {
                                break bloco_cadProduto
                            }
                            if (!produtosCodigo.includes(codProduto))
                            { // FAZ A VALIDAÇÃO SE JÁ O TEM CODIGO
                                nomeProduto = (prompt("Nome do produto..:"))
                                precoProduto = Number(prompt("Preço do produto.:"))
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
                        console.log("\nCódigo do produto...:"+produtosCodigo[i]+"\nDescrição do produto..:"+produtosDescricao[i]+"\nValor do produto..: "+produtosPreco[i],"\n")
                    }
                    /*for (cont=0; cont<produtosCodigo.lenght; cont++) {
                        console.log("\n\n\nProduto "+(cont+1)+": ")
                        console.log("\nCódigo do produto...: "+produtosCodigo[cont]+"\nDescrição do produto..: "+produtosDescricao[cont]+"\nValor do produto..: "+produtosPreco[cont])
                    }*/
                    //console.log(`Código - ${produtosCodigo}\nProduto - ${produtosDescricao}\nValor - R$ ${produtosPreco}`)
                    console.log("Exibindo produtos, para remover um, basta colocar seu código")
                    //LISTA DOS PRODUTOS SENDO EXIBIDA//
                    console.log("================================================================")
                    eExibirProdutos = Number(prompt("Código do produto para ser apagado (0 para voltar): "))
                    if (eExibirProdutos==0) {
                        console.clear()
                        console.log("=============================GESTOR=============================")
                        prompt("Retornando!")
                    } else {
                        indiceProduto = produtosCodigo.indexOf(eExibirProdutos)
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
                        codVendedorExibirVenda = Number(prompt())
                        if (codVendedorExibirVenda==0) {
                            prompt("Retornando!")
                        } else {
                            indicesVendedorVendas=[]
                            indiceVendedor=0
                            tamanhoIndicesVendedorVendas=0
                            console.clear()
                            indicesVendedorVendas = descobreVendasVendedor(codVendedorExibirVenda)
                            tamanhoIndicesVendedorVendas = descobreTamanhoVendasVendedor(codVendedorExibirVenda)
                            if (tamanhoIndicesVendedorVendas==0){
                                console.log("O vendedor não tem vendas!")
                            } else {
                                for (cont=0; cont<tamanhoIndicesVendedorVendas; cont++) {
                                    indiceVendedor=indicesVendedorVendas[cont]
                                    console.log("\n\n\nVenda "+(cont+1)+": ")
                                    console.log("\nCódigo da venda...: "+vendasCodigo[indiceVendedor]+"\nCódigo do vendedor: "+vendasVendedor[indiceVendedor]+"\nValor da venda...: "+vendasValor[indiceVendedor])
                                }
                                prompt()
                            }
                        }
                    } else if (aux3==2) {
                        console.clear()
                        valoresReal = vendasValor.map(funcaoReal)
                        console.log("=============================GESTOR=============================")
                            for (i=0;i<vendasCodigo.length;i++)
                        {
                            console.log("================================================================")
                            console.log("Venda 1"+(i+1)+": ")
                            console.log("================================================================")
                            console.log("\nCódigo da venda...:"+vendasCodigo[i]+"\nValor da venda....:"+valoresReal[i],"\n"+"\nCódigo do vendedor:"+vendasVendedor[i],"\n")
                            console.log("================================================================")
                        }
                            //CÓDIGO DO RELATÓRIO GERAL
                        console.log("================================================================")
                        prompt()
                    }
                }
            }
        } else if (aux==2) {
            aux3=1
            while (aux3!=0){
                console.clear()
                console.log("============================VENDEDOR============================")
                console.log("1. Cadastrar venda")
                console.log("0. Voltar")
                console.log("================================================================")
                aux3 = Number(prompt("Digite uma das opções acima: "))
                console.log("================================================================")
                if (aux3==0) {
                    console.clear()
                    console.log("\nRetornando!")
                } else if (aux3==1) {
                    bloco_cadVenda:{
                        codProdVenda=1
                        qtdProdVenda=1
                        valorTotalVenda=0
                        descProdVenda=""
                        while (codProdVenda!=0 && qtdProdVenda!=0) {
                            valorProdVenda=0
                            console.clear()
                            console.log("============================VENDEDOR============================")
                            console.log("Informe o código dos produtos vendidos e a quantidade (flag = 0)")
                            console.log("================================================================")
                            codProdVenda = Number(prompt("Código do produto: "))
                            qtdProdVenda = Number(prompt("Quantidade: "))
                            if (codProdVenda==0 || qtdProdVenda==0) {
                                break bloco_cadVenda
                            }
                            valorProdVenda = descobreValorProd(codProdVenda)
                        // E MULTIPLICAR PELA QUANTIDADE
                            //E DEPOIS VAI JOGAR AS TRÊS INFOS NUMA LINHA 
                            //DE UMA STRING QUE VAI SER UMA POSIÇÃO NUM ARRAY (DescVenda)
                            //SE FOR POSSÍVEL (COD, QTD E VALOR)
                            if (valorProdVenda==0) {
                                prompt("Código de produto inválido!")
                            } else{
                                descProdVenda = descProdVenda+"\n\nCódigo...:"+codProdVenda+"\nQuantidade:"+qtdProdVenda+"\nValor.....:"+valorProdVenda+"\n\n"
                                valorTotalVenda = valorTotalVenda+(valorProdVenda*qtdProdVenda)
                            }
                        }
                    }
                    console.log("================================================================")
                    codVenda=Number(prompt("Informe o código dessa venda......: "))
                    codVendedorVenda=Number(prompt("Informe o código do vendedor dessa venda: "))
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
    function descobreValorProd(codProd) {
        prodExiste=produtosCodigo.indexOf(codProd)
        if (prodExiste==-1) {
            valor=0
        } else {
            valor=produtosPreco[prodExiste]
        }
        return valor
        //FUNÇÃO QUE VAI PEGAR O CODIGO DO PRODUTO 
        //E DESCOBRIR O VALOR DELE 
    }
    function descobreVendasVendedor(codVendedor) {
        var indices = []
        var idx = vendasVendedor.indexOf(codVendedor)
        while (idx != -1) {
            indices.push(idx)
            idx = vendasVendedor.indexOf(codVendedor, idx+1)
        }
        return indices
        //FUNÇÃO QUE VAI DESCOBRIR AS OCORRENCIAS DE VENDAS DE UM VENDEDOR ESPECIFICO
    }
    function descobreTamanhoVendasVendedor(codVendedor) {
        var indices = []
        var idx = vendasVendedor.indexOf(codVendedor)
        while (idx != -1) {
            indices.push(idx)
            idx = vendasVendedor.indexOf(codVendedor, idx+1)
        }
        tamanho=indices.length
        return tamanho
        //FUNÇÃO QUE VAI DESCOBRIR AS OCORRENCIAS DE VENDAS DE UM VENDEDOR ESPECIFICO
    }
    function funcaoReal(num){
        return "R$" + num
    }