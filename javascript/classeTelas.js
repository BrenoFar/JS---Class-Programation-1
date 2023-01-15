prompt=require('prompt-sync')()
class Tela{
    menuPrincipal(){
            console.clear()
            console.log("===========================MENU PRINCIPAL===========================")
            console.log("1. Gestor")
            console.log("2. Vendedor")
            console.log("0. Encerrar programa")
            console.log("====================================================================")
            var aux = Number(prompt("Digite uma das opções acima: "))
            console.log("====================================================================")
            return aux
        }

        menuGestor(){
            console.clear()
            console.log("=============================GESTOR=============================")
            console.log("1. Cadastrar vendedor")
            console.log("2. Exibir vendedores")
            console.log("3. Cadastrar produto")
            console.log("4. Exibir produtos")
            console.log("5. Relatórios de vendas")
            console.log("0. Voltar")
            console.log("================================================================")
            var aux2 = Number(prompt("Digite uma das opções acima: "))
            console.log("================================================================")
            return aux2
        }

        menuVendedor(){
            console.clear()
            console.log("============================VENDEDOR============================")
            console.log("1. Cadastrar venda")
            console.log("0. Voltar")
            console.log("================================================================")
            var aux3 = Number(prompt("Digite uma das opções acima: "))
            console.log("================================================================")
            return aux3
        }
}

module.exports=Tela