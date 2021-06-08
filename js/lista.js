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
var eliminar_lpp =
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

var canvas = document.getElementById("lista"); //define un nuevo objeto de diseño en el elemento canvas del documento en curso
var context = canvas.getContext("2d");
var width = window.innerWidth;
var height = window.innerHeight * .4;

//config canvas
canvas.width = width;
canvas.height = height;
canvas.style.background = "#ff8";

//constants
var ancho = 70;
var alto = 60;
var attempt = 0;

const yC = height / 2;
const xCoordinate = 3 / 2;

var rectArray = new Array();
class Rectangle {
    constructor(xpos, ypos, number) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.number = number;
        this.dx = 8 - ((attempt) * (xCoordinate));
    }
    draw(context) {
        context.beginPath();
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.strokeStyle = "green";
        context.font = "20px Arial";
        context.fillText(this.number, this.xpos + (ancho / 2), this.ypos + (alto / 2));
        context.rect(this.xpos, this.ypos, ancho, alto);
        context.rect(this.xpos + ancho, this.ypos, ancho, alto);
        context.stroke();
    }
}

function draw(code) {
    let myRect = new Rectangle(10, 100, 'a');
    myRect.draw(context)
}

function activeButton(available) { //se desactivan los botones
    let button = document.getElementsByClassName("div-opt");
    for (i = 0; i < button.length; i++) button[i].disabled = available;
}

function loadEvents() {
    var code = document.getElementById("listcode").innerHTML;
    let insert = document.getElementById("if");
    insert.addEventListener("click", function() { draw(code); }, false);
}
window.addEventListener("load", loadEvents, false);