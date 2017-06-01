var n1 = 123
var n2 = n1

n2 = 456

console.log(n1)
console.log(n2)

var o1 = {
    id: 1,
    nombre: "Rodrigo",
    apellido: "Castillo"
}

var o2 = o1

o2.nombre = "Leonardo"
o2.segundoNombre

console.log({o1, o2})

if(o1.nombre.length > 8) {
    alert('nombre largo')
}
else 
alert("asdasd")

var console = {
    log: function (p){
        alert(p)
    }
}

function alertarSamy() {
    alert("samy")
}


var alertarSamy = function () {
    alert("samy")
}

function calcular(a, b, calc) {
    calc(a, b)
}

calcular(1, 2, alertarSamy);
