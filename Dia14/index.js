reajuste = function () {
  let nome = prompt("Qual o seu nome");
  let salario = parseInt(prompt("Qual o seu salario"));
  aumento(nome, salario);
};

aumento = function (nome, salario) {
  let aumentar = 0;

  if (salario <= 1500) aumentar = 0.2;
  else if (salario <= 2000) aumentar = 0.15;
  else if (salario <= 3000) aumentar = 0.1;
  else aumentar = 0.05;

  let novoSalario = salario + salario * aumentar;
  console.log("Nome do colaborador: " + nome);
  console.log("Salario: " + salario);
  console.log("Aumento: " + aumentar * 100 + "%");
  console.log("Salario Reajustado: " + novoSalario);

  perguntarNovamente();
};

function perguntarNovamente() {
  let resposta = prompt("Você quer calcular o rajuste ?(s/n)");
  if (resposta === "s") {
    reajuste();
  } else {
    console.log("programa encerrado");
  }
}

perguntarNovamente();
