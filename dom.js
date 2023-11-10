//👽El DOM permite al usuario manipular la interfaz de la página. Para eso, debemos colocar por variable un elemento. Por ejemplo: "titulo" = h1. //
let titulo = document.querySelector(h1)
titulo.innerText = 'Hola :D 👋👽' 
//👆Aquí se va a modificar el elemento de la forma deseada del usuario// 
let imagen = document.querySelector('.imagen')
imagen.src = 'https://i.ytimg.com/vi/MvhWXSP58xE/sddefault.jpg' 

//Practica con un boton 👇// 
let button = document.querySelector('#CambiarImagen')
button.onclick = function()
{
    titulo.innerText = 'Hola :D 👋👽'
    imagen.src = 'https://i.ytimg.com/vi/MvhWXSP58xE/sddefault.jpg'  
}
let buttonRojo = document.querySelector('#Rojo')
let buttonVerde = document.querySelector('#Verde')
let buttonNormal = document.querySelector('#Normal')

buttonRojo.onclick = function(){
    h1.style.color = 'red'
}