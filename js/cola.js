var code_enqueve = 
   `<div>
        <p> Struct queue{ </p> 
        <p> &nbsp;&nbsp;&nbsp;&nbsp;int val; </p> 
        <p> &nbsp;&nbsp;&nbsp;&nbsp;queue next; </p> 
        <p> }1</p> 
   </div>
   `; 
var code_dequeve =
   `<div>
        <p> Struct queue{ </p> 
        <p> &nbsp;&nbsp;&nbsp;&nbsp;int val; </p> 
        <p> &nbsp;&nbsp;&nbsp;&nbsp;queue next; </p> 
        <p> }2</p> 
   </div>
   `; 
var code_isEmpty =
   `<div>
        <p> Struct queue{ </p> 
        <p> &nbsp;&nbsp;&nbsp;&nbsp;int val; </p> 
        <p> &nbsp;&nbsp;&nbsp;&nbsp;queue next; </p> 
        <p> }3</p> 
   </div>
   `; 
//funcion que mustra el codigo que se ejecuta segun la opcion seleccionada
function addCode(x, cod){
    if(x == 0)
        document.getElementById("code").innerHTML = cod + code_enqueve;
    if(x==1)
        document.getElementById("code").innerHTML = cod + code_dequeve;
    if(x==2)
        document.getElementById("code").innerHTML = cod + code_isEmpty;
}
//funcion que carga los elementos y les agreega eventos
function carga(){
    var opt = document.getElementsByClassName('div-opt');
    var cod = document.getElementById("code").innerHTML;
    //agregando evento a cada uno de los botones
    opt[0].addEventListener("click", function(){addCode(0, cod);}, false);
    opt[1].addEventListener("click", function(){addCode(1, cod);}, false);
    opt[2].addEventListener("click", function(){addCode(2, cod);}, false);
}

window.addEventListener("load", carga, false);