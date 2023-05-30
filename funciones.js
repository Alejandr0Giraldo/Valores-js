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

