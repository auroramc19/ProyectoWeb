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
