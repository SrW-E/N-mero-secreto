let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTexto(tag,texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto ;
  responsiveVoice.speak(texto,"Brazilian Portuguese Female",{rate:1.2})
}
function textoInicial(){
exibirTexto("h1","Jogo do número secreto");
exibirTexto("p","Escolha um número entre 1 e 10:");
}
textoInicial();

function verificarChute(){
  let chute = document.querySelector("input").value;
  if(chute == numeroSecreto){
    exibirTexto("h1","Você acertou!");
    let palavraTentativa = tentativas > 1 ? "tentativas":"tentativa";
    let mensagemTentativa = `Isso aí, você acertou com ${tentativas} ${palavraTentativa}`
    exibirTexto("p",mensagemTentativa);
    document.getElementById("reiniciar").removeAttribute("disabled");
  }else{
    if(chute > numeroSecreto){
      exibirTexto("h1","Você errou!");
      exibirTexto("p",`O número secreto é menor que ${chute}`);
    }else{
      exibirTexto("h1","Você errou!");
      exibirTexto("p",`O número secreto é maior que ${chute}`);
    }tentativas++;
    cleanSpace();
  }
}

function gerarNumeroAleatorio(){
  let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
  if(quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
  }if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  }else{ listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function cleanSpace(){0
  chute = document.querySelector("input");
  chute.value = "";
}

function jogoN(){
  textoInicial();
  numeroSecreto = gerarNumeroAleatorio();
  tentativas = 1;
  cleanSpace();
  document.getElementById("reiniciar").setAttribute("disabled",true);
}