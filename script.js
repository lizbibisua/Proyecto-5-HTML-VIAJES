import {
    barcelona,
    roma,
    paris,
    londres
} from './ciudades.js'


//Elementos del DOM
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')

//Evento Clic a los Enlaces
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        //remover clase "active" de todos los enlaces
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });

        //Agregar Clase "active"
        this.classList.add('active')

        //Obtener el contenido 
        let contenido = obtenerContenido(this.textContent)

        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
    });
});

//Función Traer Información desde ciudades.js
function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}


