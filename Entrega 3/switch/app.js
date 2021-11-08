//JUEGO DE AZAR

let numero = parseInt(prompt('Ingresar un numero del 1 al 5'));
console.log ('El numero es ' + numero);

  switch (numero) {
    case 1:
      console.log('Afortunado en el amor');
      break;
    case 2:
      console.log('Afortunado en el trabajo');
      break;
    case 3:
      console.log('Afortunado en la familia');
      break;
    case 4:
      console.log('Afortunado en general');
      break;
    case 5:
      console.log('VAS A SER MILLONARIO!!');
      break;
    default:
      console.log('No elegiste un numero del 1 al 5');

  }
