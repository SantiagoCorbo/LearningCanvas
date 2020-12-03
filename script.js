//Obtengo el canvas desde html
var d = document.getElementById("cvsDibujo");
//Guardo el contexto 2d en la variable lienzo
var lienzo = d.getContext("2d");
//Creo las variables que guardan la posición inicial y final
var xComienzo;
var yComienzo;
var xFinal;
var yFinal;
//Creo las variables que guardan el moivimiento que tendra la posición inicial y final
var movXCom;
var movYCom;
var movXFin;
var movYFin;

//Pido através de prompt las posiciones iniciales y finales
function PedirPosiciónInicial(){
     xComienzo = parseInt(prompt("Ingresa X inicial"));
     yComienzo = parseInt(prompt("Ingresa Y inicial"));
     xFinal = parseInt(prompt("Ingresa X Final"));
     yFinal = parseInt(prompt("Ingresa Y Final"));    
}

//Pido através de prompt el movimiento de las posiciones iniciales y finales
function PedirMovimiento(){
 movXCom = parseInt(prompt("Ingresa el movimiento de X inicial"));
 movYCom = parseInt(prompt("Ingresa el movimiento de Y inicial"));
 movXFin = parseInt(prompt("Ingresa el movimiento de X Final"));
 movYFin = parseInt(prompt("Ingresa el movimiento de Y Final"));
}


//Aquí se dibuja una linea
//Parametros: xComienzo, yComienzo, xFinal, yFinal
function Dibujar(xCom, yCom, xFin, yFin){
    lienzo.beginPath();
    lienzo.strokeStyle = "red";
    lienzo.moveTo(xCom, yCom);
    lienzo.lineTo(xFin, yFin);
    lienzo.stroke();
    lienzo.closePath(); 
}

//En este bucle llamo a la funcion dibujar
// a la vez que actualizo las posiciónes en cada iteración
function Bucle(){
    for(i = 0; i < 60; i++)
    {     
        Dibujar(xComienzo,yComienzo,xFinal,yFinal);
        xComienzo += movXCom;
        yComienzo += movYCom;
        xFinal += movXFin;
        yFinal += movYFin;
    }
}
PedirPosiciónInicial();
PedirMovimiento();
Bucle();

var btn = document.getElementById("btnDibujar");
if(btn != undefined){
    btn.addEventListener("click", function(){
        PedirPosiciónInicial();
        PedirMovimiento();
        Bucle();
    });
}
