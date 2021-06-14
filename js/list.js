var canvas = document.getElementById("list"); //define un nuevo objeto de diseño en el elemento canvas del documento en curso
var context = canvas.getContext("2d");
var width = window.innerWidth;
var height = window.innerHeight * .4;
var flag=true;
//config canvas
canvas.width = width;
canvas.height = height;
canvas.style.background = "#ff8";

//constantes
var attempt = 0;
var xposx = 0;
var yposy = 0;

//arreglos
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
    }
    draw() {
        context.beginPath();
        context.textAlign = "center";
        context.textBaseline = "middle";
        //context.strokeStyle = "green";
        context.font = "20px Arial";
        if (this.show == 1) context.fillText(this.number, this.xpos + (this.ancho / 2), this.ypos + (this.alto / 2));
        context.lineWidth = 1;
        context.rect(this.xpos, this.ypos, this.ancho, this.alto); //primer rect
        context.rect(this.xpos + this.ancho, this.ypos, this.ancho, this.alto); //segundo rect
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

        //Linea pico superior de la flecha
        context.moveTo(this.x2 - 4, this.y2);
        context.lineTo(this.x2 - 9, this.y2 - 7);

        //Linea pico inferior de la flecha
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
        this.ready = 1;
        this.xanim = 0;
        this.yanim = 0;
    }
    draw() {
        context.beginPath();
        context.lineWidth = 2;

        //linea horizontal
        context.moveTo(this.x1, this.y1);
        context.lineTo(this.x2 + 60, this.y2);

        //linea vertical
        context.moveTo(this.x1 + 60, this.y1);
        context.lineTo(this.x2 + 60, 170);

        //tres lineas horizontales, dif tamaño.
        context.moveTo(this.x1 + 45, this.y1 + 40);
        context.lineTo(this.x2 + 75, this.y2 + 40);

        context.moveTo(this.x1 + 50, this.y1 + 44);
        context.lineTo(this.x2 + 70, this.y2 + 44);

        context.moveTo(this.x1 + 55, this.y1 + 48);
        context.lineTo(this.x2 + 65, this.y2 + 48);

        context.stroke();
    }
}

function insertEnd(code) { //INSERTA UN NODO AL FINAL DE LA LISTA
    deleteLocalS();
    if (attempt != 6) {
        activeButton(true);
        if (attempt == 0)
            document.getElementById("code").innerHTML = code + insertar_lvacia;
        else
            document.getElementById("code").innerHTML = code + insertar_lf;

        let number = parseInt(document.getElementById("number").value);
        let xaux = xposx + (attempt * 200); // coordenada x del rect

        let rect = new Rectangle(xaux, yposy, number);

        if (attempt > 0) {
            groundDelete(rect); //elimina tierra
            arrows(rect); //dibuja una flecha
        }
        attempt++; //aumenta número de nodos

        rect.draw(context); //Dibujar rectangulo
        rectArray.push(rect); //agrega el rect a un arreglo
         let bandera = false;
        let updateRect = function() { //función que hace crecer el rect
            if (rect.ancho == 70 && rect.alto == 60) {
                rect.show = 1; //una vez cargado el rect, muestra el numero
                activeButton(false);
                cancelAnimationFrame(updateRect);
                 bandera = true;

            } else requestAnimationFrame(updateRect);
            update(rect); //actualiza el tamaño del rect
            var rectF = rectArray[attempt - 1];
            ground(rectF); //se dibuja la tierra

            if(bandera) {
                for(let i=0; i<arrowArray.length; i++){
                    arrowArray[i].draw();
                }
            }

         
        }
        updateRect();
/*        if(bandera) {
            for(let i=0; i<rectArray;i++){
                arrows(rectArray[i]); //dibuja una flecha
            }
        }*/
        if (attempt == 0)
            groundDelete(rect);

        localStorage.setItem("qrect" + attempt, number);
    } else return alert("La lista esta llena y no es posible agregar más nodos.")
}

function insertBeginning(code) { // INSERTA UN NODO AL PRINCIPIO DE LA LISTA
    deleteLocalS();
    if (attempt != 6) {
        activeButton(true);
        if (attempt == 0)
            document.getElementById("code").innerHTML = code + insertar_lvacia;
        else
            document.getElementById("code").innerHTML = code + insertar_lp;

        let number = parseInt(document.getElementById("number").value);
        let xaux = xposx; // coordenada x del rect -> 60
        let rect = new Rectangle(xaux, yposy, number);
        rect.draw(context); //Dibujar rectangulo

        attempt++; //aumenta número de nodos

        rectArray.unshift(rect);

        if (attempt > 1) {
            toRight();
        }
        var a = false;
        let updateRect = function() { //función que hace crecer el rect
            if (rect.ancho == 70 && rect.alto == 60) {
                rect.show = 1; //una vez cargado el rect, muestra el numero
                cancelAnimationFrame(updateRect);
                activeButton(false);
                a = true;
            } else requestAnimationFrame(updateRect);
            update(rect); //actualiza el tamaño del rect
            if (a && attempt > 1) {
                arrowsB(rect);
            }
            if (attempt == 1) {
                ground(rect); //se dibuja la tierra
            }
        }
        updateRect();
        if (attempt == 0)
            groundDelete(rect);

    localStorage.setItem("qrect" + attempt, number);
    auxArray = [];
    auxArray.push(number);
    for (let i = 1; i < 7; i++) {
        if (null != localStorage.getItem("qrect" + i)) {
            let localAux = localStorage.getItem("qrect" + i);
            auxArray.push(localAux);
        } else break;
    }
    for (let i = 1; i < auxArray.length; i++) {
        localStorage.setItem("qrect" + i, auxArray[(i - 1)]);
    }
    } else return alert("La lista esta llena y no es posible agregar más nodos.");
}

function insert(code) { // INSERTA UN NODO EN X PARTE DE LA LISTA
    deleteLocalS();
    let rezs = rectArray.length;
    let position = parseInt(document.getElementById("pos").value) - 1;
    if (attempt != 6) {
        if (rezs == 0 || position > rezs || position < 0) {
            alert("Error: posición inexistente");
            return 0;
        }
        activeButton(true);
        if (attempt == 0)
            document.getElementById("code").innerHTML = code + insertar_lvacia;
        else
            document.getElementById("code").innerHTML = code + insertar_lpp;

        let number = parseInt(document.getElementById("number").value);

        let rect_aux = rectArray[position];
        let xaux = rect_aux.xpos; // coordenada x del rect -> 60
        let rect = new Rectangle(xaux, yposy, number);
        console.log(position);
        console.log(rect_aux);
        toRightP(position, rect);

    auxArray = [];
    //position == 1   insertando en 2
    for (let i = 1; i < 7 ; i++) {
        if (null != localStorage.getItem("qrect" + i)) {
            let localAux = localStorage.getItem("qrect" + i);
            if(i == (position + 1)) auxArray.push(number);
            auxArray.push(localAux);
        } else break;
    } //rc1 
    //auxArray.push(number);//ingresar el numero rc2
    // rc1 rc2 rc3
       //1 2 3 
    for (let i = 1; i <= auxArray.length; i++) {
        localStorage.setItem("qrect" + i, auxArray[(i - 1)]);
    }
    } else return alert("La lista esta llena y no es posible agregar más nodos.")
}

function deleteFirst(code) { //ELIMINA UN NODO AL PRINCIPIO DE LA LISTA
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

                if (attempt == 0)
                    context.clearRect(0, 0, width, height);
                cancelAnimationFrame(discardRect);
            }
            invers(rect);
        }
        discardRect();
        localStorage.removeItem("qrect1");
        for (let i = 1; i < attempt; i++) {
            localStorage.setItem("qrect" + i, localStorage.getItem("qrect" + (i + 1)));
        }
        localStorage.removeItem("qrect" + attempt);
        attempt--;
    } else return alert("Error: No hay nodos existentes");
}

function deleteEnd(code) { //ELIMINA EL ÚLTIMO NODO DE LA LISTA
    document.getElementById("code").innerHTML = code + eliminar_lpp_end;
    let ar = arrowArray.length;
    if (attempt != 0) {
        rect = rectArray[attempt - 1];
        let discardRect = function() {
            if (rect.ypos > -62) {
                activeButton(true);
                requestAnimationFrame(discardRect);
            } else {
                if (ar == 0)
                    activeButton(false);
                else
                    lastArrowDelete();
                cancelAnimationFrame(discardRect);
            }
            invers(rect);
        }
        groundDelete(rect);
        discardRect();
        rectArray.pop();
        localStorage.removeItem("qrect"+attempt);

        attempt--;
    } else return alert("Error. No hay nodos existentes");
}

function deletePosition(code) {
    document.getElementById("code").innerHTML = code + eliminar_lpp_end;
    let arzs = arrowArray.length;
    let rezs = rectArray.length;

    var code = document.getElementById("code").innerHTML;
    let indice = parseInt(document.getElementById("epos").value) - 1;

    if (attempt != 0) {
        if (rezs == 0 || indice > (rezs - 1) || indice < 0) {
            alert("Error: posición inexistente");
            return 0;
        }

        rect = rectArray[indice];

        if (rectArray.length == (indice + 1))
            deleteEnd(code);
        else {
            let discardRect = function() {
                if (rect.ypos > -62) {
                    activeButton(true);
                    requestAnimationFrame(discardRect);
                } else {
                    rectArray.splice(indice, 1);
                    if (arzs == 0)
                        activeButton(false);
                    else
                        arrowDeleteXPos(indice);

                    cancelAnimationFrame(discardRect);
                    attempt--;
                }
                invers(rect);
            }
            discardRect();
        }

        auxArray = [];
        //position == 1   insertando en 2
        for (let i = 1; i < 7 ; i++) {
            if (null != localStorage.getItem("qrect" + i)) {
                let localAux = localStorage.getItem("qrect" + i);
                if(i != (indice + 1)) auxArray.push(localAux);
                //auxArray.push(localAux);
            } else break;
        } //rc1 

        for (let i = 1; i < 7 ; i++) {
            if (null != localStorage.getItem("qrect" + i)) {
                localStorage.removeItem("qrect" + i);
            } else break;
        } //rc1 
        //auxArray.push(number);//ingresar el numero rc2
        // rc1 rc2 rc3
        //1 2 3 
        for (let i = 1; i <= auxArray.length; i++) {
            localStorage.setItem("qrect" + i, auxArray[(i - 1)]);
        }


    } else return alert("Error. No hay nodos existentes");
}

function deleteValue(code) {
    let indice = parseInt(document.getElementById("epos").value) - 1;
    let value = parseInt(document.getElementById("evl").value);
    let arsz = rectArray.length;
    //var code = document.getElementById("code").innerHTML;

    if (attempt != 0) {
        for (let x = 0; x < arsz; x++) {
            if (rectArray[x].number == value) {
                document.getElementById("epos").value = "" + (x + 1);
                deletePosition(code);
                return 0;
            }
            if (x == arsz - 1) {
                alert("No existe ese valor");
            }
        }
    } else return alert("Error. No hay nodos existentes");
}
// FUNCIONES AUXILIARES

function update(rect) { // actualiza el tamaño de un rect nuevo
    context.clearRect(rect.xpos - 2, rect.ypos - 2, 140, 65);
    rect.draw();
    rect.alto += 6;
    rect.ancho += 7;
}

function invers(rect) { //animación que elimina un nodo
    context.clearRect(rect.xpos - 3, rect.ypos - 1, 158, 68);
    rect.show = 0;
    rect.ypos -= 10;
    rect.draw(context);
}

function arrows(rect) { //dibuja una flecha en las coordenadas planteadas
    console.log(rect.xpos, rect.ypos);
    let xaux = rect.xpos,
        yaux = rect.ypos + 30,
        saux = xposx + (attempt * 200) - 95;
    // circle.xaux = xaux;
    let ar = new Arrow(saux, yaux, xaux, yaux);
    ar.draw();
    ar.ready = 0;
    arrowArray.push(ar); //se agrega la flecha creada a un arreglo
}
//---------------------------------------------------------------------------------------------
function arrowsBD(rect, p) { //dibuja una flecha en las coordenadas planteadas
    console.log(rect.xpos, rect.ypos);
    let saux = 105 + rect.xpos;
    let xaux = saux + 95,
        yaux = rect.ypos + 30;

    // circle.xaux = xaux;
    let ar = new Arrow(saux, yaux, xaux, yaux);
    ar.draw();
    ar.ready = 0;
    arrowArray.splice(p, 0, ar); //se agrega la flecha creada a un arreglo
}

function arrowsB(rect) { //dibuja una flecha en las coordenadas planteadas
    console.log(rect.xpos, rect.ypos);
    let xaux = 260,
        yaux = rect.ypos + 30,
        saux = 165;
    // circle.xaux = xaux;
    let ar = new Arrow(saux, yaux, xaux, yaux);
    ar.draw();
    ar.ready = 0;
    arrowArray.unshift(ar); //se agrega la flecha creada a un arreglo
}


function ground(rect) { //dibuja la tierra
    let xaux = rect.xpos + 105,
        yaux = rect.ypos + 30,
        saux = xposx + (attempt * 200) - 95;

    let g = new Ground(saux, yaux, xaux, yaux);
    g.draw();
}

function groundB(rect) { //auxiliar de dibujar la tierra
    let xaux = rect.xpos + 100,
        yaux = rect.ypos + 30,
        saux = xposx + 40 + rect.xpos;

    let g = new Ground(saux, yaux, xaux, yaux);
    g.draw();
}

function groundDelete(rect) { //borra la tierra
    let xaux = rect.xpos + 105,
        yaux = rect.ypos + 28,
        saux = xposx + (attempt * 200) - 58;
    context.clearRect(saux, yaux, 70, 95);
}

function arrowDelete() { //borra una flecha
    let arr = arrowArray[0];
    arr.xanim = 1;
    arr.yanim = 30;
    let arrowDel = function() {
        if (arr.ready == 1) {
            activeButton(false);
            let szc = arrowArray.length;
            for (x = 0; x < szc; x++) {
                if (x + 1 != szc) {
                    arrowArray[x] = arrowArray[x + 1];
                } else arrowArray.pop();
            }
            console.log(arrowArray);
            updateAll();

            cancelAnimationFrame(arrowDel);
        } else {
            activeButton(true);
            requestAnimationFrame(arrowDel);
        }
        arrowDeleteAnimation(arr);
    }
    arrowDel();
}

function lastArrowDelete() { //elimina una flecha ubicada al final de la lista
    let i = arrowArray.length - 1;
    //console.log(i);
    let arr = arrowArray[i];
    //console.log(arr);
    arr.xanim = 1;
    arr.yanim = 30;
    let arrowDel = function() {
        if (arr.ready == 1) {
            activeButton(false);
            //console.log(arrowArray);
            arrowArray.splice(i, 1);
            //console.log(arrowArray);
            groundRelocate();
            cancelAnimationFrame(arrowDel);
            return 0;
        } else {
            // activeButton(true);
            requestAnimationFrame(arrowDel);
        }
        arrowDeleteAnimation(arr);
    }
    arrowDel();
}

function arrowDeleteAnimation(arr) { //animación de la eliminación de una flecha
    console.log(arr.x1);
    context.clearRect(arr.x1 + 36, arr.y1 - 10, arr.xanim, arr.yanim);
    arr.xanim += 2;
    let distancia = arr.x2 - arr.x1 - 35;
    if (arr.xanim >= distancia)
        arr.ready = 1;
}

function updateAll() { //desplaza toda la lista hacia la izquierda
    let rect = rectArray[0];
    let xaux = xposx;
    let arrsz = arrowArray.length;
    let recsz = rectArray.length;
    let xd = true;
    let mover = function() {
        if (rect.xpos <= xaux) {
            activeButton(false);
            cancelAnimationFrame(mover);
            //groundB(rectArray[rectArray.length - 1]);
            xd = false;
            return 0;
        } else {
            requestAnimationFrame(mover);
        }
        if (xd) {
            context.clearRect(0, 0, width, height);

            for (let x = 0; x < recsz; x++) {
                groundB(rectArray[rectArray.length - 1]);
                rectArray[x].xpos -= 10;
                rectArray[x].alto = 60;
                rectArray[x].ancho = 70;
                rectArray[x].draw();
                //console.log(rectArray[rectArray.length - 1]);
            }

            if (arrsz != 0) {
                for (let x = 0; x < arrsz; x++) {
                    arrowArray[x].x1 -= 10;
                    arrowArray[x].x2 -= 10;
                    arrowArray[x].draw();
                }
            }
        }

    }
    mover();
}

function groundRelocate() { //reubica la tierra al último nodo de la lista
    console.log(rectArray.length);
    let rect = rectArray[rectArray.length - 1];
    console.log(rect);
    let xaux = rect.xpos + 230;

    let mover = function() {
        if (rect.xpos <= xaux) {
            activeButton(false);
            cancelAnimationFrame(mover);
        } else {
            requestAnimationFrame(mover);
        }
        ground(rect);
    }
    mover();
}

function toRight() { //desplaza toda la lista hacia la derecha
    let rect = rectArray[rectArray.length - 1];
    let xaux = xposx + 200;
    let recsz = rectArray.length;
    let arrsz = arrowArray.length;
    console.log(rectArray);

    let mover = function() {
        if (rectArray[1].xpos >= xaux) {
            activeButton(false);
            cancelAnimationFrame(mover);
            groundRelocate(rect);
            return 0;
        } else {
            requestAnimationFrame(mover);
        }

        context.clearRect(0, 0, width, height);

        for (let x = 1; x < recsz; x++) {
            rectArray[x].xpos += 20;
            rectArray[x].alto = 60;
            rectArray[x].ancho = 70;
            rectArray[x].draw();
        }

        if (arrsz != 0) {
            for (let x = 0; x < arrsz; x++) {
                arrowArray[x].x1 += 20;
                arrowArray[x].x2 += 20;
                arrowArray[x].draw();
            }
        }
    }
    mover();
}

function toRightP(position, rectAux) { //desplaza toda la lista hacia la derecha
    let rect = rectArray[position];
    let xaux = rect.xpos + 200;
    let recsz = rectArray.length;
    let arrsz = arrowArray.length;
    console.log(rect);
    let moverL = function() {
        if (rect.xpos >= xaux) {
            activeButton(false);
            attempt++; //aumenta número de nodos
            console.log(rectArray);

            rectArray.splice(position, 0, rectAux);
            rectAux.draw(context); //Dibujar rectangulo
            console.log(rectArray);
            var abc = false;
            let updateRect = function() { //función que hace crecer el rect
                if (rectAux.ancho == 70 && rectAux.alto == 60) {
                    rectAux.show = 1; //una vez cargado el rect, muestra el numero
                    activeButton(false);
                    cancelAnimationFrame(updateRect);
                    // rectAux.draw(context);
                    console.log(rectArray);
                    abc = true;
                    //return 0;
                } else requestAnimationFrame(updateRect);
                update(rectAux); //actualiza el tamaño del rect
                if (abc) arrowsBD(rectAux, position);
                if (attempt == 1) {
                   ground(rectAux); //se dibuja la tierra
                } else groundRelocate(rectAux);

            }
            updateRect();
            cancelAnimationFrame(moverL);
            return 0;
            //groundRelocate(rect);
        } else {
            requestAnimationFrame(moverL);
        }
        context.clearRect(rect.xpos - 1, 0, width, height);

        for (let x = position; x < recsz; x++) {
            rectArray[x].xpos += 20;
            rectArray[x].alto = 60;
            rectArray[x].ancho = 70;
            rectArray[x].draw();
        }
        if (arrsz != 0) {
            for (let x = position; x < arrsz; x++) {
                arrowArray[x].x1 += 20;
                arrowArray[x].x2 += 20;
                arrowArray[x].draw();
            }
        }
    }
    moverL();
}

//Sobrecarga de metodos
function arrowDeleteXPos(indice) { //borra una flecha
    let arr = arrowArray[indice];
    arr.xanim = 1;
    arr.yanim = 30;
    let arrowDelx = function() {
        if (arr.ready == 1) {
            activeButton(false);
            arrowArray.splice(indice, 1)
            console.log(arrowArray);
            updateAllXPos(indice);
            cancelAnimationFrame(arrowDelx);
            return 0;
        } else {
            activeButton(true);
            requestAnimationFrame(arrowDelx);
        }
        arrowDeleteAnimation(arr);
    }
    arrowDelx();
}

function updateAllXPos(indice) { //desplaza toda la lista hacia la izquierda
    let rect = rectArray[indice];
    let xaux = rect.xpos - 200;
    let arrsz = arrowArray.length;
    let recsz = rectArray.length;

    let xd = true;
    let mover = function() {
        if (rect.xpos <= xaux) {
            activeButton(false);
            cancelAnimationFrame(mover);
            xd = false;
            return 0;
        } else {
            requestAnimationFrame(mover);
        }
        if (xd) {
            context.clearRect(rect.xpos - 1, 0, width, height);

            for (let x = indice; x < recsz; x++) {
                groundB(rectArray[rectArray.length - 1]);
                rectArray[x].xpos -= 10;
                rectArray[x].alto = 60;
                rectArray[x].ancho = 70;
                rectArray[x].draw();
                //console.log(rectArray[rectArray.length - 1]);
            }
            if (arrsz != 0) {
                for (let x = indice; x < arrsz; x++) {
                    arrowArray[x].x1 -= 10;
                    arrowArray[x].x2 -= 10;
                    arrowArray[x].draw();
                }
            }
        }
    }
    mover();
}
function loadList() {
    context.clearRect(0, 0, width, height);
    attempt = 0;
    //nueva instancia
    flag=false;
    rectArray = [];
    arrowArray = [];
    for (let j = 1; j < 7; j++) {
        if (localStorage.getItem("qrect" + j)) {
            document.getElementById("number").value = parseInt(localStorage.getItem("qrect" + j));
            insertEnd();
        } else break;
    }
}

function deleteLocalS(){
    if(attempt==0 && flag)  for(let i = 0; i < 7; i++)  localStorage.removeItem("qrect" + i);
}

function activeButton(available) { //activación/desactivación de botones
    let button = document.getElementsByClassName("div-option");
    for (i = 0; i < button.length; i++) button[i].disabled = available;
}

function loadEvents() {
    xposx = 60;
    yposy = height / 2.5;
    var code = document.getElementById("code").innerHTML;
    let insert_f = document.getElementById("if");
    let insert_b = document.getElementById("ip");
    let insert_l = document.getElementById("ipp");
    let delete_end = document.getElementById("eu");
    let delete_b = document.getElementById("ep");
    let delete_p = document.getElementById("epp");
    let delete_val = document.getElementById("ev");
    let localS = document.getElementById("ls");
    insert_f.addEventListener("click", function() { insertEnd(code); }, false);
    insert_b.addEventListener("click", function() { insertBeginning(code); }, false);
    insert_l.addEventListener("click", function() { insert(code); }, false);
    delete_end.addEventListener("click", function() { deleteEnd(code); }, false);
    delete_b.addEventListener("click", function() { deleteFirst(code); }, false);
    delete_p.addEventListener("click", function() { deletePosition(code); }, false);
    delete_val.addEventListener("click", function() { deleteValue(code); }, false);
    localS.addEventListener("click", function() { loadList(); }, false);
}
window.addEventListener("load", loadEvents, false);

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