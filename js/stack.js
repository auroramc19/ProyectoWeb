var code_push = 
   `<div>
        <p> void pushNodo(int numero){ </p> 
        <p> &nbsp;&nbsp;&nbsp;&nbsp;struct nodo *nuevoNodo=malloc(sizeof(struct nodo));</p> 
        <p> &nbsp;&nbsp;&nbsp;&nbsp;nuevoNodo->numero=numero;</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;nuevoNodo->siguiente=superior; </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;superior=nuevoNodo; </p> 
        <p> }</p> 
   </div>
   `;
var code_pop=
     `<div>
        <p> void popNodo(){ </p> 
        <p> &nbsp;&nbsp;&nbsp;&nbsp;if(superior!=NULL){</p> 
        <p> &nbsp;&nbsp;&nbsp;&nbsp;struct nodo *temporal=superior;</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;superior=superior->siguiente</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;free(temporal);</p> 
        <p> }</p> 
   </div>
   `;
var code_isEmpty=
    `<div>
        <p> bool isEmpty(){ </p> 
        <p> &nbsp;&nbsp;&nbsp;return superior==NULL;</p> 
        <p> &nbsp;&nbsp;&nbsp;}</p>
    </div>
    `;
let canvas=document.getElementById("diagrama-cv");
let context=canvas.getContext("2d");
var width=window.innerWidth*.4;
var height=window.innerHeight;
var xposx=200;
var radious=30;
var attempt=0;
const yCoordinate=3/2;
canvas.width=width;
canvas.height=height;
canvas.style.background="#ff8";
var circleArray=new Array();
let array=[12,56,35,86,35,86];
class Circle{
    constructor(xpos,ypos,number){
        this.xpos=xpos;
        this.ypos=ypos;
        this.number=number;
        this.dy=8-((attempt)*(yCoordinate));
    }
    draw(context){
        context.beginPath();
        context.textAlign="center";
        context.textBaseline="middle";
        context.fillStyle="black";
        context.font="20px Arial";
        context.fillText(this.number,this.xpos,this.ypos);
        context.lineWidth=1;
        context.arc(this.xpos,this.ypos,radious,0,Math.PI * 2,false);
        context.stroke();
    }
}
function update(circle){
        context.clearRect(circle.xpos-31,circle.ypos-39,70,72);
        circle.draw(context);
        circle.xpos-=5;
        circle.ypos+=circle.dy;
}
//Warning
function invers(circle){
        context.clearRect(circle.xpos-33,circle.ypos-39,70,86+(attempt*1.25));
        circle.draw(context);
        circle.xpos-=5;
        console.log(circle.xpos)
}

function arrows(position){
    context.beginPath();
    context.lineWidth=2;
    context.moveTo(199,position+30);
    context.lineTo(199,position+55);
    context.moveTo(190,position+40);
    context.lineTo(199,position+33);
    context.moveTo(208,position+40);
    context.lineTo(199,position+33);
    context.stroke();
}

function activeButton(available){
    let button=document.getElementsByClassName("div-opt");
    for(i=0;i<button.length;i++) button[i].disabled=available;
}
//Sobrecarga de metodos
function reInsert(code,number){
    let circle=new Circle(490,130,number);
    circleArray.push(circle);
    circle.draw(context);
    let updateCircle=function(){
        if(circle.xpos==200){
            activeButton(false);
            cancelAnimationFrame(updateCircle);
            arrows(circle.ypos);
            context.clearRect(180,625,50,50)
        }
        else{
            activeButton(true);
            requestAnimationFrame(updateCircle);
        }
        update(circle);
    }
    console.log(circle.ypos);
    updateCircle();
    localStorage.setItem("circle"+attempt,number);
    document.getElementById("auxcode").innerHTML = code + code_push;
    attempt++;
}

//Sobrecarga de metodos
function insert(code){
    if(attempt!=7){
    let number=parseInt(document.getElementById("number").value);
    let circle=new Circle(490,130,number);
    circleArray.push(circle);
    circle.draw(context);
    let updateCircle=function(){
        if(circle.xpos==200){
            activeButton(false);
            cancelAnimationFrame(updateCircle);
            if(attempt>1) arrows(circle.ypos);
        }
        else{
            activeButton(true);
            requestAnimationFrame(updateCircle);
        }
        update(circle);
    }
    console.log(circle.ypos);
    updateCircle();
    localStorage.setItem("circle"+attempt,number);
    document.getElementById("auxcode").innerHTML = code + code_push;
    attempt++;
    }
    else return alert("La pila esta llena. No es posible agregar más nodos.")
}

function discard(code){
    if(attempt!=0){
    circle=circleArray[attempt-1];
    let discardCircle=function(){
        if(circle.xpos!=-30){
            activeButton(true);
            requestAnimationFrame(discardCircle);
        }
        else{
            activeButton(false);
            cancelAnimationFrame(discardCircle);
        }
        invers(circle);
    }
    discardCircle();
    localStorage.removeItem("circle"+(attempt-1));
    circleArray.pop();
    document.getElementById("auxcode").innerHTML = code + code_pop;
    attempt--;
    }
    else return alert("Error. No hay nodos existentes");
}
function isEmpty(code){
    document.getElementById("auxcode").innerHTML = code + code_isEmpty;
    if(attempt==0) alert("La pila esta vacia.");
    else alert("La pila no esta vacia.");  
}

function loadStack(code){
    context.clearRect(0,0,width,height);
    attempt=0;
    //nueva instancia
    circleArray=[];
    for(var j=0;j<7;j++){
        if(localStorage.getItem("circle"+j)){
            reInsert(code,parseInt(localStorage.getItem("circle"+j)));
        }
    }
    

}

function loadEvent(){
    var code= document.getElementById("auxcode").innerHTML;
    let push=document.getElementById("push");
    push.addEventListener("click",function(){insert(code);},false);
    let pop=document.getElementById("pop");
    pop.addEventListener("click",function(){discard(code);},false);
    let empty=document.getElementById("empty");
    empty.addEventListener("click",function(){isEmpty(code);},false);
    let load=document.getElementById("loadStack");
    load.addEventListener("click",function(){loadStack(code);},false);
}
window.addEventListener("load",loadEvent,false);