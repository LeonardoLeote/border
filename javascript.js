var quadrado = document.getElementById("quadrado");

var botaoCimaEsquerda = document.getElementById("cimaEsquerda");
var botaoCimaDireita = document.getElementById("cimaDireita");
var botaoBaixoDireita = document.getElementById("baixoDireita");
var botaoBaixoEsquerda = document.getElementById("baixoEsquerda");


botaoCimaEsquerda.onchange = atualizarQuadrado;
botaoCimaDireita.onchange = atualizarQuadrado;
botaoBaixoDireita.onchange = atualizarQuadrado;
botaoBaixoEsquerda.onchange = atualizarQuadrado;

function atualizarQuadrado(){
    var valores = "border-radius: " + botaoCimaEsquerda.value + "px " + botaoCimaDireita.value + "px " + 
     botaoBaixoDireita.value + "px " + botaoBaixoEsquerda.value + "px; ";
    

     document.getElementById("resultado").value = valores;
    quadrado.style = valores;
}