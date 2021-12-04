//Aca recupero el UL para luego colgar mis elementos dentro de el
const listaGuitarras = document.getElementById("lista-productos-guitarras")
const listaBajos = document.getElementById("lista-productos-bajos")


//LIMPIÉ UN POCO EL CODIGO DESDE UN SOLO ARRAY HICE UN FOR EACH DIVIDIENDO A DONDE PUSHEAR LOS ELEMENTOS
//EN BASE AL ID, LE DI ID´S < 9 A LOS BAJOS Y > 9 A LAS GUITARRAS Y LAS PUSHIÉ POR SEPARADO, ME QUEDO TO MAS BELLO

$.getJSON("/stock.json", (instrumentos) => {

    instrumentos.forEach((instrumento) => {
        const li = document.createElement("li")
        if ((instrumento.tipo == "Guitarra")) {

            li.innerHTML = `
        <img src=${instrumento.img} >
        <h3 class="centrado">${instrumento.tipo}</h3>
        <h4 class="centrado">${instrumento.marca} ${instrumento.modelo}</h4>
        <p class="centrado">Precio: $${instrumento.precio}</p>
        <button onclick="agregarAlCarrito(${instrumento.id})">Añadir al carrito</button>
        `
            listaGuitarras.append(li)

        } else if ((instrumento.tipo == "Bajo")) {



            li.innerHTML = `
        <img src=${instrumento.img} >
        <h3 class="centrado">${instrumento.tipo}</h3>
        <h4 class="centrado">${instrumento.marca} ${instrumento.modelo}</h4>
        <p class="centrado">Precio: $${instrumento.precio}</p>
        <button onclick="agregarAlCarrito(${instrumento.id})">Añadir al carrito</button>
        `
            listaBajos.appendChild(li)

        }
        instrumentos.forEach((instrumento) => {
            instrumentosArr.push(instrumento)
        })

    })
})




//CREO MI ARRAY CARRITO DONDE PUSHEAR LOS OBJETOS QUE CREE Y VOY A RECUPERAR A CONTINUACION

const instrumentosArr = [];
const carrito = [];


//A ESTA FUNCION CON PARAMETRO LE PIDO QUE ME DEVUELVA UN INSTRUMENTO SEGUN EL ID DE CADA BOTON INDEPENDIENTE QUE SE GENERÓ
function actualizarLS() {
    localStorage.setItem('InstrumentosSeleccionados', JSON.stringify(carrito));
}
// viene del botón onClick, se recibe como parametro id desde la card.
function agregarAlCarrito(instId) {

    let instrumentoAgregado = instrumentosArr.find((el) => el.id === instId)
    carrito.push(instrumentoAgregado)
    actualizarLS();
    mostrarCompra()
}
//Y A ESTA ARROW FUNCTION LE DIGO QUE TOME UNA TABLA QUE CREE EN HTML


const mostrarCompra = () => {
    let tableBody = document.getElementById("tablaCarrito")


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



    })



    let JSONcarrito = JSON.stringify(carrito)

    localStorage.setItem("InstrumentosSeleccionados", JSONcarrito)




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
    <td id="tablaConBoton">
        <button class="btnDelete" id="botonBorre-${instrumento.id}"> Eliminar Producto </button>
    </td>
    `
}

const allBtnDelete = document.querySelectorAll('.btnDelete');


function borrar() {

    e.target.parentElement.parentElement.parentElement.remove()


}


//SEBA, ACA POR ALGUNA RAZÓN NO ME DEJA APLICAR EVENTO, ME TIRA QUE EL ADDEVENTLISTENER ES NULL.. HICE LO QUE PUDE (?)