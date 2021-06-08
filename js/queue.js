var code; //codigo inicial
//var canvas;
var context;
var windoWidth;
var windoHeight;
//coordenadas iniciales
var xposx = 0;
var yposy = 0;
// var radious = 30;
var attempt = 0;
// const yCoordinate = 3/2;

//Arreglo de Objeto circle
var circleArray = new Array();
var arrowArray = new Array();


class Circle{
    constructor(xpos,ypos,number){
        this.xpos=xpos;
        this.ypos=ypos;
        this.number=number;
        // this.dy=8-((attempt)*(yCoordinate));
        this.radious = 0;
        this.show = 0;
        // this.flecha = new Arrow(0,0,0,0);
        // this.xaux = 0;
    }
    draw(){
        context.beginPath();
        context.textAlign="center";
        context.textBaseline="middle";
        context.fillStyle="black";
        context.font="20px Arial";
        if(this.show == 1) context.fillText(this.number,this.xpos,this.ypos);
        context.lineWidth=1;
        context.arc(this.xpos,this.ypos,this.radious,0,Math.PI * 2,false);
        context.stroke();
    }
}

class Arrow{
    constructor(x1, y1, x2, y2){
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.ready = 1;
        this.xanim = 0;
        this.yanim = 0;
    }
    draw(){
        context.beginPath();
        context.lineWidth=2;

//Linea principal
        context.moveTo(this.x1, this.y1);
        context.lineTo(this.x2-30, this.y2);
        
//Linea superior de la flecha
        context.moveTo(this.x2-32, this.y2);
        context.lineTo(this.x2-37, this.y2-7);

//Linea inferior de la flecha
        context.moveTo(this.x2-32, this.y2);
        context.lineTo(this.x2-37, this.y2+7);

        context.stroke();
    }
}

function loadEvent(){
     code = document.getElementById("code").innerHTML;

     windoWidth = window.innerWidth;
     windoHeight = window.innerHeight;

     let canvas = document.getElementById("diagrama-cv");
     context = canvas.getContext("2d");
//Modificar tamaño del canvas
     let wd = windoWidth, wh = windoHeight*0.32;
     canvas.width = wd;
     canvas.height = wh;
     canvas.style.background="#ff8";

//Cordenadas iniciales
     xposx = wd/8;
     yposy = wh/2;

//Cargar los botones
    let option = document.getElementsByClassName('div-opt');
    option[0].addEventListener("click", enqueve, false);
    option[1].addEventListener("click", dequeve, false); 
    option[2].addEventListener("click", isEmpty, false);
    option[3].addEventListener("click", loadQueue, false);
}

function activeButton(available){
    let button=document.getElementsByClassName("div-opt");
    for(i=0;i<button.length;i++) button[i].disabled=available;
}
//Agregar nodo
function enqueve(){
    if(attempt!=7){
        activeButton(true); 
        attempt++;
        document.getElementById("code").innerHTML = code + code_enqueve;
        let number = parseInt(document.getElementById("valor").value);
        let xaux = xposx * attempt;

        let circle = new Circle(xaux, yposy, number);
        //Dibujar flecha
        if(attempt>1) arrows(circle);
        //Dibujar circulo
        circle.draw(context);
        circleArray.push(circle);

        let updateCircle = function(){
            if(circle.radious == 30){
                circle.show = 1; //una vez cargado el circulo muestra el numero
                cancelAnimationFrame(updateCircle);
                activeButton(false);
            }
            else requestAnimationFrame(updateCircle);

            update(circle);
        }
        // console.log(circle.ypos);
        updateCircle();
        localStorage.setItem("qcircle"+attempt,number);
    }
    else return alert("La cola esta llena. No es posible agregar más nodos.")
}

function update(circle){
        context.clearRect(circle.xpos-31,circle.ypos-39,63,72);
        circle.draw();
        circle.radious+=1;
}

function invers(circle){
    // if(attempt>1) xsiz = 80+circleArray[attempt]
    context.clearRect(circle.xpos-35, circle.ypos-35, 70, 70);
    circle.show = 0;
    circle.ypos -= 5;
    circle.draw(context);
    // console.log(circle.xpos)
}

function dequeve(){
    document.getElementById("code").innerHTML = code + code_dequeve;
    let sza = arrowArray.length;
    if(attempt!=0){
        activeButton(true);

        circle = circleArray[0];
        let discardCircle = function(){
            if(circle.ypos > -31){
                requestAnimationFrame(discardCircle);
            }
            else{

                let szc = circleArray.length;
                for(let x = 0; x<szc; x++){
                    if(x+1 != szc){
                        circleArray[x] = circleArray[x+1];
                    }
                    else circleArray.pop();
                }

                if(sza == 0)
                    activeButton(false);
                else 
                    arrowDelete();


                // reDraw();
                cancelAnimationFrame(discardCircle);
            }
            invers(circle);
        }
        discardCircle();
        localStorage.removeItem("qcircle1");
        for(let x = 1; x<attempt; x++){
            localStorage.setItem("qcircle"+x, localStorage.getItem("qcircle"+(x+1)));
        }
        localStorage.removeItem("qcircle"+attempt);
        attempt--;
    }
    else return alert("Error. No hay nodos existentes");
}

function arrowDelete(){
    let arr = arrowArray[0];
    arr.xanim = 1;
    arr.yanim = 30;

    let arrowDel = function(){
        if(arr.ready == 1){
            // activeButton(false);
            let szc = arrowArray.length;

            for(x = 0; x<szc; x++){
                if(x+1 != szc){
                    arrowArray[x] = arrowArray[x+1];
                }
                else arrowArray.pop();
            }

            updateAll();
            cancelAnimationFrame(arrowDel);
        }
        else{
            // activeButton(true);
            requestAnimationFrame(arrowDel);
        }
        arrowDeleteAnimation(arr);
    }
    arrowDel();

}

function arrowDeleteAnimation(arr){
    context.clearRect(arr.x1, arr.y1-10, arr.xanim, arr.yanim);
    arr.xanim+=5;
    let distancia = arr.x2 - arr.x1 - 31;
    if(arr.xanim >= distancia)
        arr.ready = 1;
}

function updateAll(){
    // if(arrowArray.length == 0)
    let cir = circleArray[0];
    let xaux = cir.xpos - xposx;
    let arrsz = arrowArray.length;
    let crsz = circleArray.length;

    let mover = function(){
        if(cir.xpos <= xaux){
            activeButton(false);
            cancelAnimationFrame(mover);
        }else{
            requestAnimationFrame(mover);
        }

        context.clearRect(0,0, windoWidth, windoHeight);

        for(let x = 0; x<crsz; x++){
            circleArray[x].xpos -= 5;
            circleArray[x].draw();
        }
        if(arrsz != 0){
           for(let x = 0; x<arrsz; x++){
               arrowArray[x].x1-=5;
               arrowArray[x].x2-=5;
               arrowArray[x].draw();
           } 
        }
    }
    mover();
}

function isEmpty(){
    document.getElementById("code").innerHTML = code + code_isEmpty;
    if(attempt == 0)
        alert("La cola esta vacia.");
    else
        alert("La cola tiene: "+attempt+" nodos.");
}

function loadQueue(){
    context.clearRect(0,0, windoWidth, windoHeight);
    attempt=0;
    //nueva instancia
    circleArray=[];
    arrowArray=[];
    for(var j=1;j<8;j++){
        if(localStorage.getItem("qcircle"+j)){
            document.getElementById("valor").value = parseInt(localStorage.getItem("qcircle"+j));
            enqueve();
        }
        else break;
    }
}

function arrows(circle){
    let xaux = circle.xpos, yaux = circle.ypos, saux = ((attempt-1)*xposx)+30;
    // circle.xaux = xaux;
    let ar = new Arrow(saux, yaux, xaux, yaux);
    ar.draw();
    ar.ready = 0;
    arrowArray.push(ar);
}

window.addEventListener("load",loadEvent,false);

//codigo que se se ejecuta al seleccionar una opcion
let tab = "&nbsp;&nbsp;&nbsp;&nbsp;";
let tab2 = tab + tab;
let tab3 = tab2 + tab;
var code_enqueve = 
   `
   <div>
        <p> void insertar(int x){</p>
        <p> ${tab}struct nodo *nuevo = newNode();</p>
        <p> ${tab}if(vacia()){</p>
        <p> ${tab2}raiz = nuevo;</p>
        <p> ${tab}}else{</p>
        <p> ${tab2}fondo->next = nuevo;</p>
        <p> ${tab}}</p>
        <p> ${tab}fondo = nuevo;</p>
        <p>}</p>
   </div>
   <div>
        <p> NODO* newNode(){</p>
        <p> ${tab}NODO *nuevo;</p>
        <p> ${tab}nuevo=(NODO*)malloc(sizeof(struct nodo));</p>
        <p> ${tab}nuevo->val=x;</p>
        <p> ${tab}nuevo->next=NULL;</p>
        <p> ${tab}return nuevo;</p>
        <p> }</p>
   </div>
   `; 
var code_dequeve =
   `
   <div>
        <p> int extraer(){ </p>
        <p> ${tab}if (!isEmpty()){ </p>
        <p> ${tab2}int informacion = raiz->val; </p>
        <p> ${tab2}delNode() </p>
        <p> ${tab2}return informacion; </p>
        <p> ${tab}} </p>
        <p> ${tab}else </p>
        <p> ${tab2}return -1; </p>
        <p> } </p>
   </div>
   <div>
        <p> void delNode(){</p>
        <p>  ${tab2}struct nodo *bor = raiz; </p>
        <p>  ${tab2}if (raiz == fondo){ </p>
        <p>  ${tab3}raiz = NULL; </p>
        <p>  ${tab3}fondo = NULL; </p>
        <p>  ${tab2}} </p>
        <p>  ${tab2}else raiz = raiz->next; </p>
        <p>  ${tab2}free(bor); </p>
        <p> ${tab}}</p>
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
