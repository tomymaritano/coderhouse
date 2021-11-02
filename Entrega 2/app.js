let ingreso = parseInt(prompt('Ingresar tu edad'));

if ((ingreso > 0) && (ingreso <= 99)) {
	console.log('Ingreso correcto')
}else {
	console.log('Ingresa el numero dentro del rango pedido')
}

console.log('Vamos a jugar con JavaScript, para eso vamos a la consola!');

console.log('Tu edad es' + ' ' + ingreso);
console.log('Sabiendo que tu numero es' + ' ' + ingreso + ' ' + 'vamos a categorizarlo dentro de los rangos etarios');

//Checkeo de edad

let ingresoCorrecto = prompt('¿Es tu edad correcta? - Coloca si o no');


//Checkeo y solicitud en caso de ser incorrecto

if(ingresoCorrecto == 'si') {
	console.log(ingreso);
} else {
	let ingreso = prompt('Ingresalo nuevamente');
}

// Condicional

if (ingreso < 4) {
	console.log('Eres un bebé')
}else if((ingreso >= 4) && (ingreso <= 9)) {
	console.log ('Eres un niño');
}else if((ingreso >= 10) && (ingreso <= 14)) {
	console.log ('Eres adolescente');
}else if((ingreso >= 15) && (ingreso <= 29)) {
	console.log('Eres adulto');
}else if((ingreso >= 30) && (ingreso <= 64)) {
	console.log('Eres tercera edad XD')
} else {
	console.log('Eres viejito XD')
}





