//Codigo para agregar mostrar codigo en el div id="code"
var poner = 
           `
           <p> Struct queue{ </p>
           <p> &nbsp;&nbsp;&nbsp;&nbsp;int val; </p>
           <p> &nbsp;&nbsp;&nbsp;&nbsp;queue next; </p>
           <p> } </p>
           `

function prueva(){
    let cod = document.getElementById("code").innerHTML = poner;
}

window.addEventListener("load", prueva, false);

//Solo dibuja un circulo
function cvs(){
    var canvas = document.getElementById("cv-diagrama");
    var ctx = canvas.getContext("2d");
    
    ctx.beginPath();
    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.arc(250, 50, 20, 0, 2 * Math.PI, false);
    ctx.stroke();

}

window.addEventListener("load", cvs, false);