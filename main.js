//Simulador interactivo

// let total = 0;
// function agregarAlCarrito(){
//    do{
//       let producto = prompt("¿Queres comprar cadenita, anillo o ambos?", "Ej: ambos")
//       let cantidad = parseInt(prompt("Cuanto queres comprar?",0));

//       let precio = 0;
//       switch(producto){
//          case "cadenita":
//             precio = 1000;
//             break;
//          case "anillo":
//             precio = 600;
//             break; 
//          case "ambos":
//             precio=1500;
//             break;
//          default:
//             alert("Alguno de los datos ingresados es incorrecto");
//             precio=0;
//             cantidad=0;     
//       }
//       total = total + precio*cantidad;
//       otroProducto = confirm("¿Quieres agregar otro producto?")

//    }while(otroProducto)
// }

// function aplicarDescuento(total){
//    if(total >= 5000){
//       total = total *0.80;
//    }
//    return total;
// }

// function calcularEnvio(total){
//    let confirmacion = confirm("¿Quieres envio a domicilio")
//       if( confirmacion && total >= 2000){
//          alert("Tienes envio gratis. El total de tu compra es " + total);
//       }else if(confirmacion && total < 2000 && total != 0) {
//          alert("El envio cuesta $200. El total de tu compra es  $"+ total)
//       } else{
//          alert("El total de tu compra es $"+total)
      
//    }
//    return total;
// }
// agregarAlCarrito();
// calcularEnvio(aplicarDescuento(total));

//funciones relacionadas Desafio complementario


// const suma = (a,b) => a+b;
// const resta = (a,b)=>a-b;
// const iva = x=>x*0.21;

// let precioProducto = parseInt(prompt("Ingrese el precio del producto"));
// let precioDescuento= 50;

// let nuevoPrecio = resta(suma(precioProducto,iva(precioProducto)),precioDescuento);
// console.log(nuevoPrecio)
