//TRABAJO PRACTICO//

function saludar (nombre)
let nombre = prompt('Escribe tu nombre normal') 
{
    if (nombre == Nahuel || nombre == Santino)
    {
        alert('Hola. ')
    }
    else
    {
        alert('Bienvenido amigo/a 👋')
    }
}

function mayorMenorEdad (edadUsuario)
let edadUsuario = Number(prompt('Ingrese su edad '))
{
    if (edadUsuario <= 18)
    {
        alert('Sos mayor de edad. ')
    }
    else
    {
        alert('Sos menor de edad. ')
    }
}

function etapaEdad (etapaUsuario)
let etapaUsuario = Number(prompt('Ingrese su edad para saber en qué etapa de su vida se encuentra... '))
{
    if (etapaUsuario <= 1 && etapaUsuario >= 6)
    {
        alert('Sos menor a un niño. ')
    }
    else if (etapaUsuario <=6 && etapaUsuario > 12)
    {
        alert('Sos un/a niño/a común y corriente. ')
    }
    else if (etapaUsuario <=13 && etapaUsuario > 18)
    {
        alert('Sos un/a adolescente. ')
    }
    else if (etapaUsuario <= 19 && etapaUsuario > 26)
    {
        alert('Sos un/a joven. ')
    }
    else if (etapaUsuario <= 27 && etapaUsuario > 59)
    {
        alert('Sos un adulto. 👍')
    }
    else if (etapaUsuario <= 60)
    {
        alert('Sos una persona adulta mayor. ')
    }
}

function laborableFinde (díaActual)
let diaActual = prompt('¿Qué día es hoy?')
{
    if (díaActual == sábado || díaActual == domingo)
    {
        alert('Hoy es finde. Que lindo!!! ')
    }
    else
    {
        alert('Hoy hay que laburar :( ')
    }
}

function seguridad (contraseña)
let contraseña = prompt('Para continua, ingrese la contraseña ')
{
    if (contraseña == secreto)
    {
        alert('Acceso concedido')
    }
    else
    {
        alert('Acceso denegado')
    }
}

function multiplo(numero)
let numero = Number(prompt('Ingrese un número al azar. No importa que tan grande sea. '))
{
    if (numero / 5 == 0)
    {
        return alert('El numero es multiplo de 5. ')
    }
    else
    {
        return alert('El numero no es un multiplo de 5. ')
    }
}

function descuento (edadUsuario, precioProducto)
let edadUsuario = prompt('Ingrese su edad por favor')
let precioProducto = Number(prompt('Ingrese el precio del producto'))
{
    if (edadUsuario <= 65)
    {
        return alert('El precio del producto con un 10% de descuento es: '+ ((precioProducto * 10)/100) - precioProducto + '$')
    }
    else
    {
        return alert('el precio del producto sin el descuento es de: '+ precioProducto + '$')
    }
}

function categotíaNotas (calificaion)
let calificacion = Number(prompt('Escriba la calificacion de un examen (del 0 al 100)'))
{
    if(calificacion <= 80 && calificacion > 100)
    {
        return alert('Tu categoría es un MS')
    }
    else if(calificacion <= 60 && calificacion > 79)
    {
        return alert('Tu categoría es un S')
    }
    else if(calificacion <= 0 && calificacion > 59)
    {
        return alert('Tu categoría es un EP')
    }
}

function díaSemanal(numDía)
let numDía = Number(prompt('Escriba un número del 1 al 7 y le diré de qué día de la semana estamos hablando. '))
{
    if (numDía == 1)
    {
        return alert('Estamos hablando de Lunes. Es un día laborable. ')
    }
    else if (numDía == 2)
    {
        return alert('Estamos hablando de Martes. Es un día laborable. ')
    }
    else if (numDía == 3)
    {
        return alert('Estamos hablando de Miercoles. Es un día laborable. ')
    }
    else if (numDía == 4)
    {
        return alert('Estamos hablando de Jueves. Es un día laborable. ')
    }
    else if (numDía == 5)
    {
        return alert('Estamos hablando de Viernes. Es un día laborable. ')
    }
    else if (numDía == 6)
    {
        return alert('Estamos hablando de Sabado. Es un día laborable. ')
    }
    else if (numDía == 7)
    {
        return alert('Estamos hablando de Domingo. Es un día no laborable. ')
    }
}

function igualdadCadenas (texto1, texto2)
let texto1 = prompt('Escriba una palabra cualquiera. ')
let texto2 = prompt('Escriba otra palabra cualquiera (puede ser la misma palabra anterior). ')
{
    if (texto1 == texto2)
    {
        return alert('Las cadenas de texto son iguales entre si. ')
    }
    else 
    {
        return alert('Las cadenas de texto no son iguales entre si. ')
    }
}

function añoBisiesto (año)
let año = Number(prompt('¿En qué año estamos?'))
{
    if(año / 400 == 0 || año / 4 == 0 && año / 100 != 0)
    {
        return alert('Es un año bisiesto. ')
    }
    else
    {
        return alert('No es un año bisiesto. ')
    }
}

function calculadoraEdad (edadUsuario, añoActual)
let añoActual = Number(prompt('Ingrese el año actual. '))
let edadUsuario = Number(prompt('Ingrese su año de nacimiento. Voy a averiguar cuántos años tiene usted. '))
{
    if (añoActual == 2023)
    {
        return alert('Su edad es '+ 2023 - edadUsuario + 'años. ')
    }
    else if (añoActual == 2024)
    {
        return alert('Su edad actual es '+ 2024 - edadUsuario + 'años. ')
    }
}
