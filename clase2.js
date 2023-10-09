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

//Símbolos: 
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
