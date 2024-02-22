class Hotel {
  id;
  nome;
  categoria;
  endereço;
  telefone;
  constructor(id, nome, categoria, endereço, telefone) {
    this.id = id;
    this.nome = nome;
    this.categoria = categoria;
    this.endereço = endereço;
    this.telefone = telefone;
  }
}

class Reserva {
  id;
  hotelId;
  reservaPor;
  entrada;
  saida;
  constructor(id, hotelId, reservaPor, entrada, saida) {
    this.id = id;
    this.hotelId = hotelId;
    this.reservaPor = reservaPor;
    this.entrada = entrada;
    this.saida = saida;
  }
}
//1 - Crie 2 arrays, um para guardar hotéis e um para reservas

let hoteis = [];
let reservas = [];

//2 - Crie funções para cadastrar um hotel e uma reserva;
let hotelCounter = 0;

function cadastrarHotel() {
  let nome = prompt("Qual o nome do hotel");
  let categoria = prompt("Qual a categoria do hotel");
  let endereço = prompt("Qual o endereço do hotel");
  let telefone = prompt("Qual o telefone do hotel");

  let hotel = new Hotel(hotelCounter, nome, categoria, endereço, telefone);

  alert("cadastrado com sucesso!\n" + hotel);
  hoteis.push(hotel);
  hotelCounter++;
}

let reserveCounter = 0;

function cadastrarReserva() {
  let hotelId = Number(prompt("Qual o id do hotel?"));
  //verificação se o hotel existe
  for (let i = 0; i < hoteis.length; i++) {
    if (hotelId !== hoteis[i].id) {
      return alert("Esse id de hotel não existe!");
    }
  }
  let reservaPor = prompt("Quem esta fazendo essa reserva?");
  let entrada = Number(prompt("Qual o ia de entrada?"));
  let saida = Number(prompt("Qual o dia de saida?"));

  let reserva = new Reserva(
    reserveCounter,
    hotelId,
    reservaPor,
    entrada,
    saida
  );

  reservas.push(reserva);
  reserveCounter++;
}

//3 - Crie uma função que recebe como parâmetro o id do hotel e exibe na tela todas as reservas neste hotel com as seguintes informações: nome do hotel - nome do responsável da reserva - dia de entrada - dia de saída
function exibirReservas() {
  let id = prompt("Qual o id do hotel que você gostaria de ver as reservas?");
  for (let i = 0; i < hoteis.length; i++) {
    if (id == hoteis[i].id) {
      alert(`O hotel ${hoteis[i].nome} tem as seguintes reservas: `);
      for (let j = 0; j < reservas.length; j++) {
        if (reservas[j].hotelId == hoteis[i].id) {
          alert(
            `Reserva no nome de :${reservas[j].reservaPor}\n entrada dia: ${reservas[j].entrada}\nsaida dia: ${reservas[j].saida}`
          );
        }
      }
    }
  }
}

//4 - Crie uma função que recebe como parâmetro o id de uma reserva e exibe no console: nome do hotel - endereço - dia de entrada - dia de saída
function exibirReserva() {
  let id = Number(prompt("Qual o id das reservas?"));
  for (let i = 0; i < reservas.length; i++) {
    if (id == reservas[i].id) {
      for (let j = 0; j < hoteis.length; i++) {
        if (reservas[i].hotelId == hoteis[j].id) {
          alert(
            `Hotel: ${hoteis[j].nome}, endereço: ${hoteis[j].endereço}\nentrada : ${reservas[i].entrada} \saida : ${reservas[i].saida}`
          );
        }
      }
    }
  }
}

// 5- Crie uma função que recebe como parâmetro o nome de uma pessoa e exibe na tela todas as suas reservas

function reservasPessoais() {
  let nome = prompt("Qual seu nome?");
  for (let i = 0; i < reservas.length; i++) {
    if (nome == reservas[i].reservaPor) {
      alert(
        `${nome} tem reserva: ${reservas[i].id}\n no hotel de id: ${reservas[i].hotelId}`
      );
    }
  }
}

//6 - Crie uma função que recebe como parâmetro uma categoria e retorna um array com todos os hotéis nessa categoria
function categorias() {
  let categoria = prompt("Qual a categoria que você procuara?");
  let hoteisDaCategoria = [];
  for (let i = 0; i < hoteis.length; i++) {
    if (categoria == hoteis[i].categoria) {
      hoteisDaCategoria.push(hoteis[i]);
    }
  }

  alert(hoteisDaCategoria);
}

// 7 - Crie uma função que recebe o id de um hotel e um telefone como parâmetro, a função deve atualizar o telefone de cadastro com o número recebido
function mudarTelefone() {
  let id = Number(prompt("Qual a id do hotel?"));
  let telefone = Number(prompt("Qual o telefone do hotel?"));
  for (let i = 0; i < hoteis.length; i++) {
    if (id == hoteis[i].id) {
      hoteis[i].telefone = telefone;
      return alert("telefone re-cadastrado");
    }
  }
}

// 8 - Crie um fluxo de funcionamento para o algoritmo, o usuário deve poder escolher quando encerrar o programa.
let option = "";
function menu() {
  while (option !== "0") {
    option = prompt(
      "Ola como voce deseja proseguir no hotel DoDev?\n1.Cadastrar hotel\n2.Fazer Reserva\n3.Ver reservas em hotel\n4.Ver reserva\n5.Reservas pessoais\n6.Hoteis da categoria\n7.Mudar Telefone de cadastro de um hotel\n0.Encerrar prgrama"
    );
    switch (option) {
      case "1":
        cadastrarHotel();
        break;
      case "2":
        cadastrarReserva();
        break;
      case "3":
        exibirReservas();
        break;
      case "4":
        exibirReserva();
        break;
      case "5":
        reservasPessoais();
        break;
      case "6":
        categorias();
        break;
      case "7":
        mudarTelefone();
        break;
      case "0":
        alert("Encerrando o programa");
        break;

      default:
        alert("Coloque uma opção valida");
        break;
    }
  }
}

menu();
