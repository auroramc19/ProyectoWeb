//Cola en javascript
class Queue{
    constructor(){
        this.queue = []; 
    }
    enque(element){
        this.queue.push(element);
    }
    dequeue(){
        this.queue.pop();
    }
    isEmpty(){
        return this.queue.length == 0;
    }
    size(){
        return this.queue.length;
    }
    getElemnt(pos){
        let sz = this.queue.length;
        if(pos > 0 && pos < sz)
            return this.queue[pos];
    }
}

var queue = new Queue();

//funcion de acciones de cada boton
function addCode(x, cod){
    if(x == 0){
        document.getElementById("code").innerHTML = cod + code_enqueve;

        var valor = document.getElementById("valor").value;
        queue.push(valor);
        cargarCanvas(valor);
    }
    if(x==1)
        document.getElementById("code").innerHTML = cod + code_dequeve;
    if(x==2)
        document.getElementById("code").innerHTML = cod + code_isEmpty;
}

function cargarCanvas(nodeval){
        document.getElementById('diagrama').innerHTML += '<canvas id="cv-diagrama" class="nodo"></canvas>';
    // var canvas = document.getElementById("cv-diagrama");
    var canvas = document.getElementsByClassName("nodo");
    for(let xaux =0; xaux < canvas.length; xaux++){
            canvas[xaux].setAttribute("width",300);
            canvas[xaux].setAttribute("height",300);
        var ctx = canvas[xaux].getContext("2d");
        var ctx_val = canvas[xaux].getContext("2d");
        if(!(xaux & 1)){//si es par
            ctx.beginPath();
            ctx.strokeStyle = "rgb(0, 0, 0)";
            ctx.arc(150, 150, 140, 0, 2 * Math.PI, true);
            ctx.lineWidth = 17;
            ctx.stroke();

            var texto = nodeval;
            let aux = parseInt(texto);
            var rest = acomodar(aux);

            ctx_val.font = "bold 92px sans-serif";
            ctx_val.fillText(texto, 150-rest, 175);

        }else{
            ctx.beginPath();
            ctx.strokeStyle = "rgb(0, 0, 0)";
            ctx.moveTo(0, 150);
            ctx.lineTo(300, 150);
            ctx.lineTo(260, 125);
            ctx.lineTo(260, 175);
            ctx.lineTo(300, 150);
            ctx.lineWidth = 17;
            ctx.stroke();
        }
    }
}

//posiblemente no necesario
function acomodar(aux){
    if(aux < 0 || aux > 99999)
        return -1;
    if(aux >= 0 && aux < 10) return 25;
    if(aux > 9 && aux <100) return 45; 
    if(aux > 99 && aux <1000) return 75;
    if(aux > 999 && aux <10000) return 100;
    if(aux > 9999 && aux <100000) return 125;
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

//Espera a que cargue la pagina
window.addEventListener("load", carga, false);

//codigo que se se ejecuta al seleccionar una opcion
let tab = "&nbsp;&nbsp;&nbsp;&nbsp;";
let tab2 = tab + tab;
let tab3 = tab2 + tab;
var code_enqueve = 
   `
   <div>
        <p>//Codigo que se ejecuta</p>
        <p> void insertar(int x){</p>
        <p> ${tab}struct nodo *nuevo;</p>
        <p> ${tab}nuevo=malloc(sizeof(struct nodo));</p>
        <p> ${tab}nuevo->val=x;</p>
        <p> ${tab}nuevo->next=NULL;</p>
        <p> ${tab}if (vacia()){</p>
        <p> ${tab2}raiz = nuevo;</p>
        <p> ${tab2}fondo = nuevo;</p>
        <p> ${tab}}</p>
        <p> ${tab}else{</p>
        <p> ${tab2}fondo->next = nuevo;</p>
        <p> ${tab2}fondo = nuevo;</p>
        <p> ${tab}}</p>
        <p>}</p>
   </div>
   `; 
var code_dequeve =
   `
   <div>
        <p> int extraer(){ </p>
        <p>  ${tab}if (!isEmpty()){ </p>
        <p>  ${tab2}int informacion = raiz->val; </p>
        <p>  ${tab2}struct nodo *bor = raiz; </p>
        <p>  ${tab2}if (raiz == fondo){ </p>
        <p>  ${tab3}raiz = NULL; </p>
        <p>  ${tab3}fondo = NULL; </p>
        <p>  ${tab2}} </p>
        <p>  ${tab2}else raiz = raiz->next; </p>
        <p>  ${tab2}free(bor); </p>
        <p>  ${tab2}return informacion; </p>
        <p>  ${tab}} </p>
        <p>  ${tab}else </p>
        <p>  ${tab2}return -1; </p>
        <p>  } </p>
   </div>
   `; 
var code_isEmpty =
   `
   <div> 
        <p> bool isEmpty(){ </p>
        <p> ${tab}if(raiz == null)</p>
        <p> ${tab2}return true; </p>
        <p> ${tab}else </p>
        <p> ${tab2}return false; </p>
        <p> } </p>
   </div> 
   `; 