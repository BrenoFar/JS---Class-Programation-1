class FuncVenda{
    descobreValorProd(codProd,produtosCodigo,produtosPreco) {
        var prodExiste=produtosCodigo.indexOf(codProd)
        var valor = 0
        if (prodExiste==-1) {
            valor=0
        } else {
            valor=produtosPreco[prodExiste]
        }
        return valor
        //FUNÇÃO QUE VAI PEGAR O CODIGO DO PRODUTO 
        //E DESCOBRIR O VALOR DELE 
    }
    descobreVendasVendedor(codVendedor,vendasVendedor) {
        var indices = []
        var idx = vendasVendedor.indexOf(codVendedor)
        while (idx != -1) {
            indices.push(idx)
            idx = vendasVendedor.indexOf(codVendedor, idx+1)
        }
        return indices
        //FUNÇÃO QUE VAI DESCOBRIR AS OCORRENCIAS DE VENDAS DE UM VENDEDOR ESPECIFICO
    }
    descobreTamanhoVendasVendedor(codVendedor, vendasVendedor) {
        var indices = []
        var idx = vendasVendedor.indexOf(codVendedor)
        while (idx != -1) {
            indices.push(idx)
            idx = vendasVendedor.indexOf(codVendedor, idx+1)
        }
        var tamanho=indices.length
        return tamanho
        //FUNÇÃO QUE VAI DESCOBRIR AS OCORRENCIAS DE VENDAS DE UM VENDEDOR ESPECIFICO
    }

}
module.exports=FuncVenda