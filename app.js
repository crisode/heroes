// Require de Express
const express = require("express");

// Require de FS
const fs = require("fs")

// Ejecución de Express
const app = express()

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));

// Ruta Raíz / ➝ Home
app.get('/', function (req, res) {
	res.send('​Ni Superman, IronMan o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.'
	)
});

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.get('/heroes', (req, res) => {
	res.send(heroes);
});

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
app.get('/heroes/detalle/:id', (req, res) => {
	// Acá lo primero será encontrar al héroe que corresponda
	let heroe; // creo una variable vacia donde se almacenara el resultado el for
	let id = req.params.id;// declaro la variable heroe y le asigno el valor del req que entra por el navegador

	for (let i = 0; i < heroes.length; i++) { 
		if (id == heroes[i].id){ // si el numero de id es igual a la propiedad id de algn elemento en el array ,me lo coloca en la variable heroe 
			heroe= heroes[i]
		}
		
	}
	res.send(`Hola mi nombre es: ${heroe.nombre} y soy   ${heroe.profesion}`)



	/* heroes.forEach(info => {// hago un foreach
		if (info.id == heroe) {// si el id de "info" es igual al de heroe me retorna lo siguiente 
		return elegido++
			res.send(`Hola mi nombre es: ${info.nombre} y soy   ${info.profesion}`)
		} else { // si no es igual retorna esto
			res.send("Heroe descanzando.. intenete mas tarde")
		}
	}); */






	// Si se encuentra al héroe se envía el nombre y su profesión
	// Si NO se encuentra se envía el mensaje de no encontrado
});

/* // Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
app.get('¿?', (¿?) => {
	// Acá lo primero será encontrar al héroe que corresponda
	let heroe = __¿?__;

	// Si NO se encuentra al héroe se envía un mensaje
	// Si se encuentra al héroe:
		// Se pregunta si vino el parámetro Y el valor esperado y se envía la información
		// Si nó vino el parámetro se envía el mensaje de error
	}
});

// Ruta Créditos
// ¿?

// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
}); */