//UNA VEZ CREADOS LOS LI, VOY A INTRODUCIR INFORMACIÓN AL HTML DESDE UN PROMPT

alert("Bienvenido a Asincopados!")


// tomo el div donde voy a crear mi saludo
const saludo = document.getElementById("placa-bienvenida")

//Solicito por prompt el nombre que va a salir en el saludo
let bienvenida = prompt("¿Como te llamás?");

//Creo el elemento <p> donde va a entrar la información,
let parra = document.createElement("p")


//con InnerHTML ingreso la información dentro de la etiqueta <p> valiendomé de la variable creada arriba,
parra.innerHTML = `
    Bienvenidx ${bienvenida}. <br> Disfrutá el paisaje.
`

//Y por ultimo agrego la información brindada por el usuario en el prompt con un appendchild dentro de la
//Constante "saludo" que sería el div que cree primero desde mi etiqueta <div> en html de id "placa-bienvenida" 
saludo.appendChild(parra)