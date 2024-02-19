let condition = "s"

do {
    let nome = prompt("Qual o seu nome")
    let idade = Number(prompt("Qual a sua idade"))
    let altura = Number(prompt("Qual a sua altura? (em cm)"))
    let peso = Number(prompt("Qual o seu peso (em kg)"))
    let job = prompt("Qual o seu trabalho?")
    altura = altura/100

    //dados gerais
    alert(`Usuario: ${nome},\n idade: ${idade},\n altura: ${altura},\n peso: ${peso},\n profissão: ${job}`)

    //Verificação da maioridade
    if(idade >= 18) alert("Esta liberado para tomar umas geladas")
    else("Sem gelada pra você")

    //Claculo das idades em: messes, semanas e dias
    alert(`sua idade em messes é: ${idade * 12},\n em semanas é: ${idade * 52},\n e em dias é: ${idade *365}`)

    //Calculo do IMC
    let imc = peso / (altura * altura)
    switch (imc) {
        case imc > 18,5:
            alert(`Você esta numa situação de magreza. Imc de ${imc}`)
            break;
        case 18,5 < imc < 24,9:
            alert(`Você esta numa situação de normalidade. Imc de ${imc}`)
            break
        case 24,9 < imc < 30:
            alert(`Você esta numa situação de sobrepeso. Imc de ${imc}`)
            break
        case 30 < imc:
            alert(`Você esta numa situação de obesidade. Imc de ${imc}`)
            break
        default:
            break;
    }

    //ano de nascimento
    let ano = 2024 - idade

    for( let i = 0; i <= idade; i++){
        console.log(`${ano + i} - ${i} anos de idade`)
    }

    //break for loop
    condition = prompt("Do you want to repeat or change any information?")

} while (condition == "s");