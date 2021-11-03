// tomo el div donde voy a crear mi saludo
const saludo = document.getElementById("placa-bienvenida")


//Creo el elemento <p> donde va a entrar la información,
let parra = document.createElement("p")

// YA SE QUE SE CANCELARON LOS USOS DE PROMPT PERO ME SIRVE PARA HACER UN SESSION STORAGE DE QUIEN ENTRO A LA PAGINA,
//QUEDA SUPER BONITO (?)

let nombre = prompt("Como te llamás?");

//con InnerHTML ingreso la información dentro de la etiqueta <p> valiendomé de la variable creada arriba,
parra.innerHTML = `
    Bienvenidx ${nombre}.<br> Disfrutá el paisaje.
`


//Y por ultimo agrego la información brindada por el usuario en el prompt con un appendchild dentro de la
//Constante "saludo" que sería el div que cree primero desde mi etiqueta <div> en html de id "placa-bienvenida" 
saludo.appendChild(parra)

//ACA RECUPERO EL NOMBRE CON CLAVE "INGRESÓ", TOMARIA POR SESION A CADA PERSONA QUE INGRESA, PODRIA SER EL PRINCIPIO
//DE UN LOGIN
sessionStorage.setItem("Ingresó", nombre)