var a = 20
var b = a + ""
console.log(b) // 20 siendo un string impicito
var c = toString(a)
console.log(a) // 20 siendo un string explicito u obligando a la variable a cambiar el tipo de dato
var d = Number(c) // cambia el string a numero