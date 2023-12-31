//👽El DOM permite al usuario manipular la interfaz de la página. Para eso, debemos colocar por variable un elemento. Por ejemplo: "titulo" = h1. //

let titulo = document.querySelector('h1')
let imagen = document.querySelector('.imagen')
titulo.innerText = 'Hola :D 👋👽 (texto de prueba)' 
imagen.src = 'https://i.ytimg.com/vi/MvhWXSP58xE/sddefault.jpg' 

//Programacion de un boton 👇// 
let button = document.querySelector('#CambiarImagen')
button.onclick = function()
{
    titulo.innerText = 'Hola :D 👋👽'
    imagen.src = 'https://i.ytimg.com/vi/MvhWXSP58xE/sddefault.jpg'  
}
//_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0//
//Practica en clase// 

let buttonRojo = document.querySelector('#Rojo')
let buttonVerde = document.querySelector('#Verde')
let buttonAzul = document.querySelector('#Azul')
let buttonNormal = document.querySelector('#Normal')

buttonRojo.onclick = function(){
    titulo.style.color = 'red'
}

buttonVerde.onclick = function(){
    titulo.style.color = 'green'
}

buttonAzul.onclick = function(){
    titulo.style.color = 'blue'
}

buttonNormal.onclick = function(){
    titulo.style.color = 'black'
}

buttonAzul.dblclick = function(){
    alert('Acabas de hacer doble click en un boton. ')
}
