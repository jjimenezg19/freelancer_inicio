
var nombre = prompt("Por favor ingrese el nombre: ","Aquí tu nombre");
var edad = prompt("Por favor ingrese la edad: ","Aquí tu edad");
var direccion = prompt("Por favor ingrese el domicilio: ","Aquí tu dirección");
var telefono = prompt("Por favor ingrese el telefono: ","Ahi tu numero");

var salto = "<br />";

document.write("Nombre del usuario: "+nombre + salto);
document.write("Edad del usuario: "+edad + salto);
document.write("Lugar de residencia: "+direccion + salto);
document.write("Telefono del usuario: "+telefono + salto);


if (edad >= 30){
    document.write("Este mae ya esta muy viejo "+salto);
} else {
    document.write("No esta tan viejo "+salto);
}

/*
if (direccion == "San Jose"){
    document.write("Es de Costa Rica "+salto);
}else if (direccion == "Buenos Aires"){
    document.write("Es de Argentina "+salto);
} else if (direccion == "Medellin") {
    document.write("Es de Colombia "+salto);
} else if (direccion == "Madrird") {
    document.write("Es de España "+salto);
}*/

switch (direccion){
    case "Mexico":document.write("Es Mexicano");
        break;
    case "Argentina":document.write("Es Argentino");
        break;
    case "España":document.write("Es Español");
        break;
    default: document.write("No se encontro la nacionalidad");
}