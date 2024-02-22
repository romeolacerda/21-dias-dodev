class Computer {
  tipo;
  processador;
  video;
  armazenamento;
  memoriaRam;
  SSD;
  constructor(tipo, processador, video, armazenamento, memoriaRam, SSD) {
    this.tipo = tipo;
    this.processador = processador;
    this.video = video;
    this.armazenamento = armazenamento;
    this.memoriaRam = memoriaRam;
    this.SSD = SSD;
  }

  exibir() {
    console.log(
      `tipo: ${this.tipo}, processador: ${this.processador}, video: ${this.video}, armazenamento: ${this.armazenamento}gb, memoria: ${this.memoriaRam}gb e ssd : ${this.SSD}`
    );
  }
}

let pc = new Computer("notebook", "i5-13450HX", "RTX3050", 500, 16, true);

pc.exibir();
