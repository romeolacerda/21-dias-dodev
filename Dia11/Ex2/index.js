let modelos = []
let anos = []
let valores = []
let parar = true
let index = 0

while(parar){
    let modelo = prompt("Digite o modelo do carro")
    modelos[index] = modelo
    let ano = prompt("Digite o ano do carro")
    anos[contador] = ano
    let valor = parseFloat(prompt("Digite o valor do carro"))
    valores[contador] = valor
    contador ++

    let resposta = prompt("Deseja inserir outro carro?(s/n)")
    if(resposta == "n") continuar = false
}

console.log("Carros cadastrados:")
for(let i = 0; i < modelos.length; i++){
    console.log(modelos[i] + ' - ' + anos[i] + ' - ' + valores[i])
}

//Algoritimo Para ordenar preço
for( let i = 0; i< valores.length - 1; i++){
    for (let j = 0; j < valores.length - i; j++){
        //comparação entre o index[0] e o index[1] e assim por diante
        if(valores[j] > valores[j + 1]){
        //trocas de posições
        let modeloMaiorValor = modelos[j]
        modelos[j] = modelos[j + 1]
        modelos[j + 1] = modeloMaiorValor

        let anoMaiorValor = anos[j]
        anos[j] = anos[j + 1] 
        anos[j + 1] = anoMaiorValor

        let maiorValor = valores[j]
        valores[j] = valores[j + 1]
        valores[j + 1] = maiorValor
        }
    }
}

console.log("Carros ordenados pelo preço: ")
for(let i = 0; i < modelos.length; i++){
    console.log(modelos[i] + ' - ' + anos[i] + ' - ' + valores[i])
}