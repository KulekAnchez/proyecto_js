//Aca recupero el UL para luego colgar mis elementos dentro de el
const listaGuitarras = document.getElementById("lista-productos-guitarras")
const listaBajos = document.getElementById("lista-productos-bajos")


//USO UN FOR EACH QUE PASE POR EL STOCK DEL OTRO SCRIPT Y POR CADA UNO QUE PASA CARGA 
//EL INNERHTML CON TODAS LAS PROPIEDADES LLAMADAS CON ETIQUETAS DISTINTAS
//CON CSS LES DI FORMA EN UN CONTENEDOR PARA QUE SEA MAS ESTÉTICO TODO :)


instrumentos.forEach((instrumento) => {
    const li = document.createElement("li")
    if (instrumento.id < 9) {
        li.innerHTML = `
        <img src=${instrumento.img} >
        <h3 class="centrado">${instrumento.tipo}</h3>
        <h4 class="centrado">${instrumento.marca} ${instrumento.modelo}</h4>
        <p class="centrado">Precio: $${instrumento.precio}</p>
        <button onclick="agregarAlCarrito(${instrumento.id})">Añadir al carrito</button>
    `
        listaGuitarras.append(li)

    } else if (instrumento.id > 9) {

        li.innerHTML = `
        <img src=${instrumento.img} >
        <h3 class="centrado">${instrumento.tipo}</h3>
        <h4 class="centrado">${instrumento.marca} ${instrumento.modelo}</h4>
        <p class="centrado">Precio: $${instrumento.precio}</p>
        <button onclick="agregarAlCarrito(${instrumento.id})">Añadir al carrito</button>
    `
        listaBajos.appendChild(li)

    }

})


//                         -------------- DESESTIMAR CODIGO COMENTADO  -------------

// guitarras.forEach((guitarra) => {
//         const li = document.createElement("li")

//         li.innerHTML = `
//     <img src=${guitarra.img} >
//     <h3 class="centrado">${guitarra.tipo}</h3>
//     <h4 class="centrado">${guitarra.marca} ${guitarra.modelo}</h4>
//     <p class="centrado">Precio: $${guitarra.precio}</p>
//     <button onclick="agregarAlCarritoG(${guitarra.id})">Añadir al carrito</button>
//     `
//         listaGuitarras.appendChild(li)
//     }) //AL BOTON ACA ARRIBA LE DI VALOR DESDE EL ID DE CADA UNO DE MIS OBJETOS, LO QUE ME CREO BOTONES INDEPENDIENTES EN CADA CARD,


// bajos.forEach((bajo) => {
//     const li = document.createElement("li")

//     li.innerHTML = `
//     <img src=${bajo.img} >
//     <h3 class="centrado">${bajo.tipo}</h3>
//     <h4 class="centrado">${bajo.marca} ${bajo.modelo}</h4>
//     <p class="centrado">Precio: $${bajo.precio}</p>
//     <button onclick="agregarAlCarritoB(${bajo.id})">Añadir al carrito</button>
//     `
//     listaBajos.appendChild(li)
// })




//CREO MI ARRAY CARRITO DONDE PUSHEAR LOS OBJETOS QUE CREE Y VOY A RECUPERAR A CONTINUACION
const carrito = [];


//A ESTA FUNCION CON PARAMETRO LE PIDO QUE ME DEVUELVA UNA GUITARRA SEGUN EL ID DE CADA BOTON INDEPENDIENTE QUE SE GENERÓ
function agregarAlCarrito(instId) {

    let instrumento = instrumentos.find((el) => el.id === instId)
    carrito.push(instrumento)


    mostrarCompra()
}
//Y A ESTA ARROW FUNCTION LE DIGO QUE TOME UNA TABLA QUE CREE EN HTML 
const mostrarCompra = () => {
    let tableBody = document.getElementById("tablaCarrito")

    tableBody.innerHTML = ""
        //ASIGNO LA VARIABLE Y DOY UN CUERPO DE TABLA VACIO PARA LUEGO LLENARLO ABAJO CON UN TR 
        //HACIENDO OTRO FOR EACH EL CUAL ME DEVUELVE TD´S ADENTRO CON LOS VALORES DE CADA GUITARRA
    carrito.forEach((instrumento) => {
        const tr = document.createElement("tr")
        tr.innerHTML = `
        <td>${instrumento.id}</td>
        <td>${instrumento.tipo}</td>
        <td>${instrumento.marca}</td>
        <td>${instrumento.modelo}</td>
        <td>${instrumento.precio}</td>
        <td id="tablaConBoton"><button id="botonBorre-${instrumento.id}"><p>Eliminar Producto</p></button></td>
        `

        tableBody.appendChild(tr)

        /*Y ACA ABAJO, CON MI ULTIMA NEURONA SANA GENERO UN LOCAL STORAGE DESDE EL CARRITO PASADO POR JSON
        EL CUAL ME ACUMULA EN UN ARRAY TODOS LOS OBJETOS QUE YO HAYA DECIDIDO AGREGAR AL CARRITO
        SE ALMACENAN EN STORAGE PERO LA TABLA NO ME QUEDA GUARDADA, PROMETO CONCENTRAR EN ESO
        POR LO PRONTO YA CUMPLO LOS REQUISITOS DE LA SEGUNDA PRE-ENTREGA :)*/
        let JSONcarrito = JSON.stringify(carrito)

        localStorage.setItem("InstrumentosSeleccionados", JSONcarrito)



    })

}


let tablaPersistente = localStorage.getItem("InstrumentosSeleccionados")

let tablaParseada = JSON.parse(tablaPersistente)

let tablaCarrito = document.getElementById("tablaCarrito")

for (instrumento of tablaParseada) {
    tablaCarrito.innerHTML += `
    <td>${instrumento.id}</td>
    <td>${instrumento.tipo}</td>
    <td>${instrumento.marca}</td>
    <td>${instrumento.modelo}</td>
    <td>${instrumento.precio}</td>
    <td id="tablaConBoton"><button id="botonBorre-${instrumento.id}"><p>Eliminar Producto</p></button></td>
    `


}



let boton = document.getElementById("botonBorre-${instrumento.id}")

boton.addEventListener("click", borrar)

function borrar() {
    console.log("laconchademivieja")
}