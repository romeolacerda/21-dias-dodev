const array = []
const indices = []
let contadorIndice = 0

const numeroProcurado = parseInt(prompt("QUal o numero a ser procurado"))

for(let i = 0; i < 10; i++){
    const elemento = parseInt(prompt(`Digite o elemento ${i + 1}`))
    array[i] = elemento
}

for(let i = 0; i < 10; i++){
    if(array[i] === numeroProcurado){
        indices[numeroProcurado] = i
        contadorIndice++
    }
}

console.log(`O numero ${numeroProcurado} foi encontrado nos indices: ${indices}`)

