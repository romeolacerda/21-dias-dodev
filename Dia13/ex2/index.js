class Carro {
  nome;
  potencia;
  velocidadeMaxima;
  aceleracao;
  constructor(nome, potencia, velocidadeMaxima, aceleracao) {
    this.nome = nome;
    this.potencia = potencia;
    this.velocidadeMaxima = velocidadeMaxima;
    this.aceleracao = aceleracao;
  }

  tempoMedio(distancia) {
    let resultado = distancia / (this.velocidadeMaxima / this.aceleracao);
    return resultado;
  }
}

class Corrida {
  nome;
  tipo;
  distancia;
  participantes;
  vencedor;
  constructor(nome, tipo, distancia) {
    this.nome = nome;
    this.tipo = tipo;
    this.distancia = distancia;
    this.participantes = [];
    this.vencedor = "";
  }

  DefinirVencedor() {
    let menorTempo = this.participantes[0].tempoMedio(this.distancia);
    let vencedor = this.participantes[0];

    for (let i = 1; i < this.participantes.length; i++) {
      let tempo = this.participantes[i].tempoMedio(this.distancia);
      if (tempo > menorTempo) {
        menorTempo = tempo;
        vencedor = this.participantes[i];
      }
    }

    return (this.vencedor = vencedor);
  }

  ExibirVencedor() {
    console.log("O vencedor é : " + this.vencedor.nome);
  }
}

let corrida = new Corrida("Monza", "Formula 1", 60000);

corrida.participantes[0] = new Carro("Kicks", 120, 160, 5);
corrida.participantes[1] = new Carro("Marea", 210, 200, 9);
corrida.participantes[2] = new Carro("Peugeot 206", 300, 220, 10);

corrida.DefinirVencedor();
corrida.ExibirVencedor();
