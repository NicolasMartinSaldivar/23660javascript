// Desafio clase 3

var texto = prompt("Ingrese un texto");
var resultado = texto;

var textoConcatenar = "";

while(textoConcatenar != "ESC"){
    textoConcatenar = prompt("Ingrese otro texto");
    resultado = resultado + " " + textoConcatenar;
    alert(resultado);
}