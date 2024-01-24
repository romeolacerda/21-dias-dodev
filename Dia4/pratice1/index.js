let fome = prompt("Você esta com fome? S/N")
let dinheiro = prompt("Você tem dinheiro? S/N")
let restaurante = prompt("O restaurante está abertp? S/N")

if(fome == "N" || dinheiro == "N"){
    console.log("hoje a janta sera em casa")
} else if(fome == "S" && dinheiro == "S" && restaurante == "N"){
    console.log("Peça um delivery!")
}else if(fome == "S" && dinheiro == "S" && restaurante == "S"){
    console.log("Hoje o jantar sera no restaurant preferido!")
}