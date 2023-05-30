// tipos de funciones
//declarativas, la cual no puede ser anonima porque la funcion debe tener nombre
function miFunction(){
    return 3;
}

// expresion, la cual puede ser anonima ya que esta declarando una funcion dentro de una variable
var miFunction = function (a,b) {
    return a + b;
}

//variables dentro de la funcion

function saludarEstudiantes (estudiante) {
    console.log(`hola ${estudiante}`)
}
saludarEstudiantes("diego")

function sumar (a,b) {
    var resultado = a + b;
    return resultado
}
sumar(1,2) // llamando la funcion modificando los valores podemos recibir un resultado diferente

