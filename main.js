let texto = prompt("Ingresa un texto");

var resultado = texto;

var textoConcatenar = "";

while(textoConcatenar != 3){
   textoConcatenar = prompt("Ingresa otro texto");
   resultado = resultado + " " + textoConcatenar;
   console.log(resultado);
}