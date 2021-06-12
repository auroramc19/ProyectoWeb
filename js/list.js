var insertar_lvacia =
    `<div>
        <p> int ins_en_lista_vacia (Lista *lista, char *dato){ </p> 
        <p> &nbsp;&nbsp;&nbsp;&nbsp;Element *nuevo_elemento;</p> 
        <p> &nbsp;&nbsp;&nbsp;&nbsp;if ((nuevo_elemento = (Element *) malloc (sizeof (Element))) == NULL)</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return -1; </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;if ((nuevo _elemento->dato = (char *) malloc (50 * sizeof (char))) == NULL)</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;return -1; </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;strcpy (nuevo_elemento->dato, dato); </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;nuevo_elemento->siguiente = NULL;</p> 
        <p> &nbsp;&nbsp;&nbsp;&nbsp;lista->inicio = nuevo_elemento; </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;lista->fin = nuevo_elemento;</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;lista->tamaño++;</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;return 0;</p>
        <p> }</p> 
   </div>
   `;
var insertar_lp =
    `<div>
        <p> int ins_inicio_lista (Lista *lista, char *dato){ </p> 
        <p> &nbsp;&nbsp;&nbsp;&nbsp;Element *nuevo_elemento;</p> 
        <p> &nbsp;&nbsp;&nbsp;&nbsp;if ((nuevo_elemento = (Element *) malloc (sizeof (Element))) == NULL)</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return -1; </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;if ((nuevo _elemento->dato = (char *) malloc (50 * sizeof (char))) == NULL)</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;return -1; </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;strcpy (nuevo_elemento->dato, dato); </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;nuevo_elemento->siguiente = lista->inicio;</p> 
        <p> &nbsp;&nbsp;&nbsp;&nbsp;lista->inicio = nuevo_elemento; </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;lista->tamaño++;</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;return 0;</p>
        <p> }</p> 
   </div>
   `;
var insertar_lf =
    `<div>
        <p> int ins_fin_lista (Lista *lista, Element *actual, char *dato){ </p> 
        <p> &nbsp;&nbsp;&nbsp;&nbsp;Element *nuevo_elemento;</p> 
        <p> &nbsp;&nbsp;&nbsp;&nbsp;if ((nuevo_elemento = (Element *) malloc (sizeof (Element))) == NULL)</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return -1; </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;if ((nuevo _elemento->dato = (char *) malloc (50 * sizeof (char))) == NULL)</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;return -1; </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;strcpy (nuevo_elemento->dato, dato); </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;actual->siguiente = nuevo_elemento;</p> 
        <p> &nbsp;&nbsp;&nbsp;&nbsp;nuevo_elemento->siguiente = NULL;</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;lista->fin = nuevo_elemento; </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;lista->tamaño++;</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;return 0;</p>
        <p> }</p> 
   </div>
   `;
var insertar_lpp =
    `<div>
        <p> int ins_lista (Lista *lista, char *dato, int pos){ </p> 
        <p> &nbsp;&nbsp;&nbsp;&nbsp;if (lista->tamaño < 2)</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return -1; </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;if (pos < 1 || pos >= lista->tamaño)</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return -1; </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;Element *actual;</p> 
        <p> &nbsp;&nbsp;&nbsp;&nbsp;Element *nuevo_elemento;</p> 
        <p> &nbsp;&nbsp;&nbsp;&nbsp;int i;</p> 
        <p> &nbsp;&nbsp;&nbsp;&nbsp;if ((nuevo_elemento = (Element *) malloc (sizeof (Element))) == NULL)</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return -1; </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;if ((nuevo _elemento->dato = (char *) malloc (50 * sizeof (char))) == NULL)</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;return -1; </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;actual->siguiente = nuevo_elemento;</p> 
        <p> &nbsp;&nbsp;&nbsp;&nbsp;for (i = 1; i < pos; ++i)</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actual = actual->siguiente;</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;if (actual->siguiente == NULL)</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return -1;</p> 
        <p> &nbsp;&nbsp;&nbsp;&nbsp;strcpy (nuevo_elemento->dato, dato);</p>   
        <p> &nbsp;&nbsp;&nbsp;&nbsp;nuevo_elemento->siguiente = actual->siguiente;</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;actual->siguiente = nuevo_elemento;</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;lista->tamaño++;</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;return 0;</p>
        <p> }</p> 
   </div>
   `;
var eliminar_ini =
    `<div>
        <p> int sup_inicio (Lista *lista){</p> 
        <p> &nbsp;&nbsp;&nbsp;&nbsp;if (lista->tamaño == 0)</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return -1; </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;Element *sup_elemento;</p>         
        <p> &nbsp;&nbsp;&nbsp;&nbsp;sup_element = lista->inicio;</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;lista->inicio = lista->inicio->siguiente;</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;if (lista->tamaño == 1) </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lista->fin = NULL;</p> 
        <p> &nbsp;&nbsp;&nbsp;&nbsp;free (sup_elemento->dato);</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;free (sup_elemento);</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;lista->tamaño--;</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;return 0;</p>
        <p> }</p> 
   </div>
   `;
var eliminar_lpp_end =
    `<div>
        <p> int sup_en_lista (Lista *lista, int pos){</p> 
        <p> &nbsp;&nbsp;&nbsp;&nbsp;if (lista->tamaño <= 1 || pos < 1 || pos >= lista->tamaño)</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return -1; </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;int i;</p>         
        <p> &nbsp;&nbsp;&nbsp;&nbsp;Element *actual;</p>         
        <p> &nbsp;&nbsp;&nbsp;&nbsp;Element *sup_elemento;</p>         
        <p> &nbsp;&nbsp;&nbsp;&nbsp;actual = lista->inicio;</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;for (i = 1; i < pos; ++i)</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actual = actual->siguiente;</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;sup_elemento = actual->siguiente;</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;actual->siguiente; = actual->siguiente->siguiente;</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;if (actual->siguiente == NULL) </p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lista->fin = actual;</p> 
        <p> &nbsp;&nbsp;&nbsp;&nbsp;free (sup_elemento->dato);</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;free (sup_elemento);</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;lista->tamaño--;</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;return 0;</p>
        <p> }</p> 
   </div>
   `;

var canvas = document.getElementById("list"); //define un nuevo objeto de diseño en el elemento canvas del documento en curso
var context = canvas.getContext("2d");
var width = window.innerWidth;
var height = window.innerHeight * .4;

//config canvas
canvas.width = width;
canvas.height = height;
canvas.style.background = "#ff8";

//constants
//var ancho = 70;
//var alto = 60;
var attempt = 0;

var xposx = 0;
var yposy = 0;

const yC = height / 2;
const xCoordinate = 3 / 2;

var arrowArray = new Array();
var rectArray = new Array();
class Rectangle {
    constructor(xpos, ypos, number) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.number = number;
        this.ancho = 0;
        this.alto = 0;
        this.show = 0;
        //this.dx = 8 - ((attempt) * (xCoordinate));
    }
    draw() {
        context.beginPath();
        context.textAlign = "center";
        context.textBaseline = "middle";
        //context.strokeStyle = "green";
        context.font = "20px Arial";
        if (this.show == 1) context.fillText(this.number, this.xpos + (this.ancho / 2), this.ypos + (this.alto / 2));
        context.lineWidth = 1;
        context.rect(this.xpos, this.ypos, this.ancho, this.alto);
        context.rect(this.xpos + this.ancho, this.ypos, this.ancho, this.alto);
        context.stroke();
    }
}

class Arrow {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.ready = 1;
        this.xanim = 0;
        this.yanim = 0;
    }
    draw() {
        context.beginPath();
        context.lineWidth = 2;
        //Linea principal
        context.moveTo(this.x1, this.y1);
        context.lineTo(this.x2 - 2, this.y2);

        //Linea superior de la flecha
        context.moveTo(this.x2 - 4, this.y2);
        context.lineTo(this.x2 - 9, this.y2 - 7);

        //Linea inferior de la flecha
        context.moveTo(this.x2 - 4, this.y2);
        context.lineTo(this.x2 - 9, this.y2 + 7);

        context.stroke();
    }
}

class Ground {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.xanim = 0;
        this.yanim = 0;
    }
    draw() {
        context.beginPath();
        context.lineWidth = 2;

        context.moveTo(this.x1, this.y1);
        context.lineTo(this.x2 + 60, this.y2);

        context.moveTo(this.x1 + 60, this.y1);
        context.lineTo(this.x2 + 60, 170);

        context.moveTo(this.x1 + 45, this.y1 + 40);
        context.lineTo(this.x2 + 75, this.y2 + 40);

        context.moveTo(this.x1 + 50, this.y1 + 44);
        context.lineTo(this.x2 + 70, this.y2 + 44);

        context.moveTo(this.x1 + 55, this.y1 + 48);
        context.lineTo(this.x2 + 65, this.y2 + 48);

        context.stroke();
    }
}

function insertEnd(code) {
    if (attempt != 6) {
        activeButton(true);
        if (attempt == 0)
            document.getElementById("code").innerHTML = code + insertar_lvacia;
        else
            document.getElementById("code").innerHTML = code + insertar_lf;

        let number = parseInt(document.getElementById("number").value);
        let xaux = xposx + (attempt * 200);

        let rect = new Rectangle(xaux, yposy, number);
        //Dibujar flecha
        if (attempt > 0) {
            deleteGround(rect);
            arrows(rect);
        }

        attempt++;

        //Dibujar rectangulo
        rect.draw(context);
        rectArray.push(rect);

        let updateRect = function() {
            if (rect.ancho == 70 && rect.alto == 60) {
                rect.show = 1; //una vez cargado el circulo muestra el numero
                cancelAnimationFrame(updateRect);
                activeButton(false);
            } else requestAnimationFrame(updateRect);
            update(rect);
            var rectF = rectArray[attempt - 1];
            ground(rectF);
        }
        updateRect();

        //localStorage.setItem("qcircle" + attempt, number);
    } else return alert("La lista esta llena y no es posible agregar más nodos.")
}


function update(rect) {
    context.clearRect(rect.xpos - 3, rect.ypos - 3, 140, 65);
    rect.draw();
    rect.alto += 6;
    rect.ancho += 7;
}

function invers(rect) {
    context.clearRect(rect.xpos - 3, rect.ypos - 1, 160, 75);
    rect.show = 0;
    rect.ypos -= 10;
    rect.draw(context);
}

function deleteFirst(code) {
    document.getElementById("code").innerHTML = code + eliminar_ini;
    let ar = arrowArray.length;
    if (attempt != 0) {
        rect = rectArray[0];
        let discardRect = function() {
            if (rect.ypos > -62) {
                activeButton(true);
                requestAnimationFrame(discardRect);
            } else {
                let r = rectArray.length;
                for (let x = 0; x < r; x++) {
                    if (x + 1 != r) {
                        rectArray[x] = rectArray[x + 1];
                    } else rectArray.pop();
                }
                if (ar == 0)
                    activeButton(false);
                else
                    arrowDelete();

                cancelAnimationFrame(discardRect);
            }
            invers(rect);
        }
        discardRect();
        //rectArray.pop();
        attempt--;
    } else return alert("Error. No hay nodos existentes");
}

function deleteEnd(code) {
    document.getElementById("code").innerHTML = code + eliminar_lpp_end;

    if (attempt != 0) {
        rect = rectArray[attempt - 1];
        let discardRect = function() {
            if (rect.ypos > -62) {
                activeButton(true);
                requestAnimationFrame(discardRect);
            } else {
                activeButton(false);
                cancelAnimationFrame(discardRect);
            }
            invers(rect);
        }
        discardRect();
        rectArray.pop();
        attempt--;
    } else return alert("Error. No hay nodos existentes");
}

function arrows(rect) {
    console.log(rect.xpos, rect.ypos);
    let xaux = rect.xpos,
        yaux = rect.ypos + 30,
        saux = xposx + (attempt * 200) - 95;
    // circle.xaux = xaux;
    let ar = new Arrow(saux, yaux, xaux, yaux);
    ar.draw();
    ar.ready = 0;
    arrowArray.push(ar);
}

function ground(rect) {
    let xaux = rect.xpos + 105,
        yaux = rect.ypos + 30,
        saux = xposx + (attempt * 200) - 95;

    let g = new Ground(saux, yaux, xaux, yaux);
    g.draw();
    g.ready = 0;
    arrowArray.push(g)
}

function deleteGround(rect) {
    let xaux = rect.xpos + 105,
        yaux = rect.ypos + 30,
        saux = xposx + (attempt * 200) - 58;
    context.clearRect(saux, yaux, 60, 90);
}

function arrowDelete() {
    let arr = arrowArray[0];
    arr.xanim = 1;
    arr.yanim = 30;
    let arrowDel = function() {
        if (arr.ready == 1) {
            // activeButton(false);
            let szc = arrowArray.length;

            for (let x = 0; x < szc; x++) {
                if (x + 1 != szc) {
                    arrowArray[x] = arrowArray[x + 1];
                } else arrowArray.pop();
            }

            updateAll();
            cancelAnimationFrame(arrowDel);
        } else {
            // activeButton(true);
            requestAnimationFrame(arrowDel);
        }
        arrowDeleteAnimation(arr);

    }
    arrowDel();
}

function arrowDeleteAnimation(arr) {
    context.clearRect(arr.x1 + 10, arr.y1 - 10, arr.xanim, arr.yanim);
    arr.xanim += 2;
    let distancia = arr.x2 - arr.x1 - 11;
    if (arr.xanim >= distancia)
        arr.ready = 1;
}


function updateAll() {
    // if(arrowArray.length == 0)
    let rect = rectArray[0];
    let xaux = rect.xpos - 200;
    let arrsz = arrowArray.length;
    let recsz = rectArray.length;

    let mover = function() {
        if (rect.xpos <= xaux) {
            activeButton(false);
            cancelAnimationFrame(mover);
        } else {
            requestAnimationFrame(mover);
        }

        context.clearRect(0, 0, width, height);

        for (let x = 0; x < recsz; x++) {
            rectArray[x].xpos -= 10;
            rectArray[x].alto = 60;
            rectArray[x].ancho = 70;
            rectArray[x].draw();
        }
        if (arrsz != 0) {
            for (let x = 0; x < arrsz; x++) {
                arrowArray[x].x1 -= 10;
                arrowArray[x].x2 -= 10;
                arrowArray[x].draw();

            }
        }
    }
    mover();

}

function activeButton(available) { //se desactivan los botones
    let button = document.getElementsByClassName("button");
    for (i = 0; i < button.length; i++) button[i].disabled = available;
}

function loadEvents() {
    xposx = 60;
    yposy = height / 2.5;
    var code = document.getElementById("code").innerHTML;
    let insert = document.getElementById("if");
    let delete_end = document.getElementById("eu");
    let delete_first = document.getElementById("ep");
    insert.addEventListener("click", function() { insertEnd(code); }, false);
    delete_end.addEventListener("click", function() { deleteEnd(code); }, false);
    delete_first.addEventListener("click", function() { deleteFirst(code); }, false);
}
window.addEventListener("load", loadEvents, false);