alert('Esto es una alerta de practica')
alert('Aqui se muestra una notificacion con un texto')
//comentario de practica// 
console.log(50+51)
//para entrar a la consola: entrar al "index", luego seleccionar "inspeccionar" y luego "console".// 
//"console.log" es una funcion.// 

alert('Mi edad es: ' + (2023 - 2009))

let nombreAlumno = 'Matias' 
nombreAlumno = nombreAlumno + ' Rosello'

//Let: nombre de variable// 
//asignar valor a variable: _nombre variable = ´valor a asignar´_ //
//Tambien se puede asignar variable a la vez.// 
//operaciones matematicas: suma = num + 30 (ejemplo)//

//¿Que es la funcion prompt? Es una funcion que muestra un diálogo con mensaje opcional, que solicita al usuario que introduzca un texto.//

let nombreAlumno 
nombreAlumno = prompt ('ingresa tu nombre') 
alert('Bienvenido '+ nombreAlumno)

//trabajo practico 1 con javascrip//
num = 4 

console.log('la suma es', suma = num +6)
console.log('La resta es', resta = num -6) 
console.log('La multiplicacion es', multiplicacion = num *6)
console.log('La division es', division = num /6) 

num = 2

console.log('la suma es', suma = num +5)
console.log('La resta es', resta = num -5) 
console.log('La multiplicacion es', multiplicacion = num *5)
console.log('La division es', division = num /5) 

alert (4+6)
alert(4-6) 
alert(4*6)
alert(4/6) 

alert (2+5)
alert(2-5) 
alert(2*5)
alert(2/5) 

alert ('Mi edad es '+(2023 - 2009))

let = nombreAlumno
let = apellidoAlumno

nombreAlumno = prompt('ingresa tu nombre')
apellidoAlumno = prompt('Ingresa tu apellido')
alert('Bienvenido '+ nombreAlumno + apellidoAlumno)

let = edadAlumno

edadAlumno = prompt ('Ingresa el año en que naciste')

let diez = 10
let tres = 3
let resultadoMultiplicacion = diez * tres 
alert ('El resultado de la multiplicacion de 10x3 es: '+ resultadoMultiplicacion) 

//Funciones: ejemplo "promedio"//
let a =9
let b =9 
let c =10

function calcularPromedio(a,b,c)
{
let promedio = (a + b + c)/3
return promedio
}

alert (calcularPromedio (10,10,9))
//Para ejecutar la funcion en la consola, se debe escribir "Function promedio (a, b, c)". Una vez escrito, se deben abrir llaves ({}) y colocar allí la funcion que queramos que se ejecute. Si el codigo se escribe fuera de las llaves, ya no pertenece a la funcion. ¡Tener en cuenta las variables! Antes de ejecutar la funcion, definir las variables o, de lo contrario, no se ejecutará el codigo." 
//Tambien se puede usar "console.log" para ejecutar la funcion en la consola.// 

console.log (calcularPromedio(9,8,7))

//Funciones: ejemplo "sacar X numero al cubo"//
function cubo(a)
{
    let resultadoCubo = a * a * a
    alert (resultadoCubo)
    return resultadoCubo
}
cubo (a)

////Funciones: ejemplo "saludo al usuario"//
function saludo (nombre)
{
    let nombre = prompt('Ingresa tu nombre')
    return 'Bienvenido/a ' + nombre 
}
 alert(saludo('Mati')) 