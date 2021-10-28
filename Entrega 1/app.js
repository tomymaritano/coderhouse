//Ingresar el nombre
//Solicitar la fecha de nacimiento

alert('Te voy a pedir unos datos');

//Aprobacion
let datos = prompt('Estas de acuerdo si/no');

if  ( datos == 'si' ) {
	let firstName = prompt('¿Como te llamas?');
	let surName = prompt('¿Como es tu apellido?');
	let fullName = (firstName + ' ' + surName);
	alert('Bienvenido' + ' ' + fullName);

	//Fecha de nacimiento

	alert('Nos gustaria saber tu fecha de nacimiento');

	let aceptaCumple = prompt('¿Estas de acuerdo?')

	if (aceptaCumple == 'si') {
		let day = parseInt(prompt('¿Que dia naciste?'));
		let month = prompt('¿En que mes naciste?');
		let year = parseInt(prompt('¿En que año naciste?'));
		let birthday = (day + ' ' + month + ' ' + year);

		alert(fullName + ' ' + 'tu fecha de cumpleaños es' + ' ' + birthday);

		let corroborar = prompt('Es correcta la fecha?')
		if (corroborar == 'no') {
			let day = parseInt(prompt('¿Que dia naciste?'));
			let month = prompt('¿En que mes naciste?');
			let year = parseInt(prompt('¿En que año naciste?'));
			let birthday = (day + ' ' + month + ' ' + year);

			alert('Tu fecha de cumpleaños es' + ' ' + birthday);
		}
		} else {
			alert('No hay problema, que tengas buen dia!')
		};

	} else {
		alert('Que tengas lindo dia');
	}

alert('Muchas gracias!')




