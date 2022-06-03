
var a = 5;
var b = 3;

if (5<3){
    alert("A es mayor que B");
} else {
    alert("B es menor que A");
}

//if 
if (a == 5 && b == 3){
    alert("Las dos son verdaderas");
}else{
    alert("Una da las dos es falsa, o las dos")
}

//while 
while(a < 10){
    document.write("Variable a igual: "+a +"<br />");
    a++
}

//do while
var a =0;
do {
    document.write("Variable a igual a: "+a);
    a++;
}while (a<10);

//for loop
for(contador=0; contador<5; contador++){
    if(contador==3){
        break;
    }
    document.write("El numero es: "+contador);
}

//Funciones 
function miFunction(){
    if(edad ==40){
        document.write("Ya tiene 40 años");
    }
}
