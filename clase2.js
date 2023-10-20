//En éste archivo se encuentran todas las practicas de condicionales//
//👽// 
//_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0//

let estaLloviendo = false
if (estaLloviendo == true)
{
    alert ('¡Llevá paraguas!')
}

let notaAlumno = Number(prompt('Ingresa tu calificacion: '))
if (notaAlumno >= 6)
{
    alert ('Estas aprobado.')
}
else 
{
    alert ('Estas desaprobado. ')
}

//Símbolos I: 
//== (comparador igual)
//>= (menor o igual)
//<= (mayor o igual)
//!= (distinto)
//> (menor)
//< (mayor)

let energia = Number(prompt('Ingresa la cantidad de voltios de energia electrica'))
if (energia >= 100)
{
    alert ('Podés prender la luz y otros dispositivos. ')
}
else
{
    alert ('Nesecitas un poco mas de energia')
}

let archivoHTML = false
if (archivoHTML = false) 
{
    console.log ('Para programar necesitas un archivo HTML!!!')
}
//Los condicionales que evalúan una sola condicion son llamadas "simples" y las que evalúan más de una condicion son llamadas "compuestas"//
//Si la condicion se cumple se ejecuta el "if". Si no se cumple, se ejecuta el "else".//

//Símbolos II: 
//&& = y/and
//|| = o/or 

//Condicional de IPAV(Instituto Provincial Autárquico de Vivienda).// 
let Edad = 2023 - 1990
let cantidadHijos = 0
let cantidadCasas = 0
let trabajoFormal = true

if ((trabajoFormal = true) && (cantidadCasas = 0) && (Edad >= 18) && (cantidadHijos > 0))
{
    alert ('Podés entrar al sorteo.')
}
else
{
    alert ('No podes entrar al sorteo.')
}

//Condicionales con funciones// 
function numMayor (num1, num2)
{
    if (num1 < num2)
    {
        alert('El numero mayor es '+ num2)
    }
    else 
    {
        alert('El numero mayor es '+ num1)
    }
}

function positivoNegativoCero (num)
let num = Number(prompt('Escribe un número al azar (puede ser positivo o negativo): '))
{
    if (num > 0 )
{
    alert('El número que elegiste es un número positivo. ')
}
else if (num < 0 )
{
    alert('El número que elegiste es un número negativo. ')
}
else if (num = 0)
{
    alert('El número que elegiste es 0(cero). Es decir que no es ni positivo ni negativo. ')
}
}

function entreRangoValores (num)
let num = Number(prompt('Escribe un número al azar')) 
{
    if (num <= 25 && num >= 255)
{
    alert('El número elegido se encuentra entre el 25 y el 255. ')
}

else
{
    alert('El numero elegido no se encuentra entre el 25 y el 255. ')
}
}
