var nombre = "Jonathan"
function mostrarValores(){
	let edad = 20
	let esEstudiante = true
	document.write("Nombre: ", nombre, "<br>")
	document.write("Edad: ", edad, "<br>")
	document.write("¿Es estudiante?: ", esEstudiante, "<br><br><hr>")

	/*Valores cambiados*/
	nombre = "Juan"
	edad = 25
	esEstudiante = false
	document.write("<h3>Valores cambiados</h3>")
	document.write("Nombre: ", nombre, "<br>")
	document.write("Edad: ", edad, "<br>")
	document.write("¿Es estudiante?: ", esEstudiante, "<br><br>")
}
function matematicas(){
	let a = 10;
	let b = 6;
	let suma = a + b;
	let resta = a - b;
	let multiplicacion = a * b;
	let division = a / b;
	let igual = a == b;
	let diferente = a != b;
	let mayor = a > b;
	let menor = a < b;
	let mayorOigual = a >= b;
	let menorOigual = a <= b;
	document.write("<b>El valor de a: </b>",a ,"<br>", "<b>El valor de b: </b>", b, "<br><br><hr>")
	document.write("<b>La suma es igual: </b>", suma, "<br>")
	document.write("<b>La resta es igual: </b>", resta, "<br>")
	document.write("<b>La multiplicación es igual a: </b>", multiplicacion, "<br>")
	document.write("<b>La division es igual a: </b>", division, "<br>")
	document.write("<b>¿A es igual a B?: </b>", igual, "<br>")
	document.write("<b>¿A es diferente de B?: </b>", diferente, "<br>")
	document.write("<b>¿A es mayor que B?: </b>", mayor, "<br>")
	document.write("<b>¿A es menor que B?: </b>", menor, "<br>")
	document.write("<b>¿A es mayor o igual a B?: </b>", mayorOigual, "<br>")
	document.write("<b>¿A es menor o igual a B?: </b>", menorOigual, "<br><br><hr>")
}
function logicos(){
	let esMayorDeEdad = true;
	let tieneLicencia = false;
	let puedeConducir = (esMayorDeEdad && tieneLicencia);

	document.write(`<h1>Bienvenido al sistema de verificación para conducir ${nombre}</h1>`)
	document.write(`¿Puedes conducir?: ${puedeConducir}`);
}