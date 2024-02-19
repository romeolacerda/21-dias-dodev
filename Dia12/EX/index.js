// 1 - Crie 2 arrays: um para nomes e um para senhas
let nomes = [];
let senhas = [];
let nome = "";
let senha = "";
let option = "";
//2- Solicite ao seu usuário o que ele deseja fazer: cadastrar, fazer login, excluir um cadastro ou encerrar o programa.
do {
  option = prompt(
    "Qual A opção que você deseja escolher? \n1.Cadastrar. \n2.Fazer Login. \n3.Excluir um cadasdtro. \n4.Encerrar o programa."
  );
  //3 - Faça o fluxo de funcionamento do código, considere que o usuário pode escolher quando encerrar o programa conforme as opções
  switch (option) {
    //Cadastrar 4 - Se a opção escolhida for cadastro, solicite dois valores ao usuário, um nome e uma senha e guarde cada um no seu respectivo array.
    case "1":
      nome = prompt("Qual o seu nome de usuario?");
      senha = prompt("Qual sera a senhado seu usuario");
      nomes.push(nome);
      senhas.push(senha);
      alert("Você foi cadastrado com sucesso!");
      nome = "";
      break;
    //Fazer Login 5 - Se a opção escolhida for login solicite ao usuário um nome e uma senha, depois procure o nome recebido no array de nomes e em caso positivo compare a senha no array de senhas. Se as duas comparações forem válidas exiba uma mensagem de sucesso
    case "2":
      nome = prompt("Qual o seu nome de usuario?");
      for (let i = 0; i < nomes.length; i++) {
        if (nomes[i] === nome) {
          senha = prompt("Qual a senha desse usuario?");
          for (let i = 0; i < senhas.length; i++) {
            if (senhas[i] === senha) {
              alert("Login efetuado com Sucesso!");
              break;
            }
          }
        }
      }
      break;
    //6 - Se a opção escolhida for excluir um cadastro solicite um nome ao usuário, então procure pelo nome no array de nomes e exclua ele e a senha correspondente do outro array, por fim organize o array para eliminar os espaços vazios.
    case "3":
      nome = prompt("Qual o seu nome de usuario?");
      for (let i = 0; i < nomes.length; i++) {
        if (nomes[i] === nome) {
          senha = prompt("Qual a senha desse usuario?");
          for (let i = 0; i < senhas.length; i++) {
            if (senhas[i] === senha) {
              nomes.splice(nomes[i]);
              senhas.splice(senhas[i]);
              alert("O cadastro foi excluido com sucesso!");
              break;
            }
          }
        }
      }
      break;
    case "4":
      alert("Encerrando . . .");
      break;
    default:
      alert("Insira uma opção valida!");
      break;
  }
} while (option !== "4");
