let nomes = []
let continuar = true
let arrayposition = 0
while(continuar == true){
    let nomeInserido = prompt('insira o nome')
    nomes[arrayposition] = nomeInserido

    let desejaContinuar = prompt('Insira 1 caso deseje adicionar um novo nome')
    if(desejaContinuar != '1'){
        continuar = false
        continue;
    }
    arrayposition++
}