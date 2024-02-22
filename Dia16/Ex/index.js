let NomesUsuarios = [];
let SenhasUsuarios = [];
let option = "";

function menu() {
  while (option !== "4") {
    option = prompt(
      "O que você deseja fazer?\n1. Cadastrar?\n2. Fazer login?\n3.Excluir cadastro\n4. encerrar o programa"
    );
    switch (option) {
      case "1":
        cadastro();
        break;
      case "2":
        login();
        break;
      case "3":
        excluir();
        break;
      case "4":
        alert("Encerrando o programa");
        break;
      default:
        break;
    }
  }
}

//2
function cadastro() {
  let nome = prompt("Qual sera o seu nome?");
  let senha = prompt("Qual a sua senha?");
  NomesUsuarios.push(nome);
  SenhasUsuarios.push(senha);

  console.log("Usuario cadastrado com sucesso");
}

//3
function login() {
  let nome = prompt("Qual o seu nome?");
  let senha = prompt("Qual a sua senha");

  for (let i = 0; i < NomesUsuarios.length; i++) {
    if (NomesUsuarios[i] === nome) {
      for (let j = 0; j < SenhasUsuarios; j++) {
        if (SenhasUsuarios[i] === senha) {
          alert("login efetuado com sucesso");
          return console.log(true);
        }
      }
    }
  }
  alert("Nome ou senha incorretos");
  return console.log(false);
}

//4
function excluir() {
  let nome = prompt("Qual o nome do usuario a ser excluido?");

  for (let i = 0; i < NomesUsuarios.length; i++) {
    if (NomesUsuarios[i] === nome) {
      NomesUsuarios.splice(i, 1);
      SenhasUsuarios.splice(i, 1);
      console.log("Usuario excluido");
    }
  }
}

menu();
