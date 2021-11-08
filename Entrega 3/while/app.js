//JUEGO DE AZAR

let numero = parseInt(prompt('Ingresar un numero y sera incrementado en uno'));
console.log ('El numero es ' + numero);

while (numero != false) {
  console.log('Pero si sumamos uno quedaria ' + (numero + 1));
  numero = parseInt(prompt('Ingresar un nuevo numero'))
}
