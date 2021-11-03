//Aca recupero el UL para luego colgar mis elementos dentro de el
const listaGuitarras = document.getElementById("lista-productos-guitarras")
const listaBajos = document.getElementById("lista-productos-bajos")


//USO UN FOR EACH QUE PASE POR EL STOCK DEL OTRO SCRIPT Y POR CADA UNO QUE PASA CARGA 
//EL INNERHTML CON TODAS LAS PROPIEDADES LLAMADAS CON ETIQUETAS DISTINTAS
//CON CSS LES DI FORMA EN UN CONTENEDOR PARA QUE SEA MAS ESTÉTICO TODO :)


/*instrumentos.forEach((guitarras, bajos) => {
    const li = document.createElement("li")
    if (guitarras) {
        li.innerHTML = `
        <img src=${guitarras.img} >
        <h3 class="centrado">${guitarras.tipo}</h3>
        <h4 class="centrado">${guitarras.marca} ${guitarras.modelo}</h4>
        <p class="centrado">Precio: $${guitarras.precio}</p>
        <button onclick="agregarAlCarritoG(${guitarras.id})">Añadir al carrito</button>
    `
        listaGuitarras.appendChild(li)

    } else if (bajos) {
        const li = document.createElement("li")

        li.innerHTML = `
        <img src=${bajos.img} >
        <h3 class="centrado">${bajos.tipo}</h3>
        <h4 class="centrado">${bajos.marca} ${bajos.modelo}</h4>
        <p class="centrado">Precio: $${bajos.precio}</p>
        <button onclick="agregarAlCarritoB(${bajos.id})">Añadir al carrito</button>
    `
        listaBajos.appendChild(li)

    }

})*/

guitarras.forEach((guitarra) => {
        const li = document.createElement("li")

        li.innerHTML = `
    <img src=${guitarra.img} >
    <h3 class="centrado">${guitarra.tipo}</h3>
    <h4 class="centrado">${guitarra.marca} ${guitarra.modelo}</h4>
    <p class="centrado">Precio: $${guitarra.precio}</p>
    <button onclick="agregarAlCarritoG(${guitarra.id})">Añadir al carrito</button>
    `
        listaGuitarras.appendChild(li)
    }) //AL BOTON ACA ARRIBA LE DI VALOR DESDE EL ID DE CADA UNO DE MIS OBJETOS, LO QUE ME CREO BOTONES INDEPENDIENTES EN CADA CARD,


bajos.forEach((bajo) => {
    const li = document.createElement("li")

    li.innerHTML = `
    <img src=${bajo.img} >
    <h3 class="centrado">${bajo.tipo}</h3>
    <h4 class="centrado">${bajo.marca} ${bajo.modelo}</h4>
    <p class="centrado">Precio: $${bajo.precio}</p>
    <button onclick="agregarAlCarritoB(${bajo.id})">Añadir al carrito</button>
    `
    listaBajos.appendChild(li)
})




//CREO MI ARRAY CARRITO DONDE PUSHEAR LOS OBJETOS QUE CREE Y VOY A RECUPERAR A CONTINUACION
const carrito = [];


//A ESTA FUNCION CON PARAMETRO LE PIDO QUE ME DEVUELVA UNA GUITARRA SEGUN EL ID DE CADA BOTON INDEPENDIENTE QUE SE GENERÓ
function agregarAlCarritoG(guitId) {

    let guitarra = guitarras.find((el) => el.id === guitId)
    carrito.push(guitarra)


    mostrarCompraG()
}
//Y A ESTA ARROW FUNCTION LE DIGO QUE TOME UNA TABLA QUE CREE EN HTML 
const mostrarCompraG = () => {
    let tableBody = document.getElementById("tablaCarrito")

    tableBody.innerHTML = ""
        //ASIGNO LA VARIABLE Y DOY UN CUERPO DE TABLA VACIO PARA LUEGO LLENARLO ABAJO CON UN TR 
        //HACIENDO OTRO FOR EACH EL CUAL ME DEVUELVE TD´S ADENTRO CON LOS VALORES DE CADA GUITARRA
    carrito.forEach((guitarra) => {
        const tr = document.createElement("tr")
        tr.innerHTML = `
        <td>${guitarra.id}</td>
        <td>${guitarra.tipo}</td>
        <td>${guitarra.marca}</td>
        <td>${guitarra.modelo}</td>
        <td>${guitarra.precio}</td>
        `
            //LOS ASIGNO COMO HIJOS DEL BODY ANTERIOR
        tableBody.appendChild(tr)

        //Y ACA ABAJO, CON MI ULTIMA NEURONA SANA GENERO UN LOCAL STORAGE DESDE EL CARRITO PASADO POR JSON
        //EL CUAL ME ACUMULA EN UN ARRAY TODOS LOS OBJETOS QUE YO HAYA DECIDIDO AGREGAR AL CARRITO
        //SE ALMACENAN EN STORAGE PERO LA TABLA NO ME QUEDA GUARDADA, PROMETO CONCENTRAR EN ESO
        //POR LO PRONTO YA CUMPLO LOS REQUISITOS DE LA SEGUNDA PRE-ENTREGA :)
        let JSONcarrito = JSON.stringify(carrito)

        localStorage.setItem("InstrumentosSeleccionados", JSONcarrito)




    })

}


//SEBA, ACA ABJO ES EXACTAMENTE LO MISMO CON PEQUEÑOS CAMBIOS DE RECONOCIMIENTO, TUVE QUE HACERLO DOS VECES
//PORQUE ESTOY TRABAJANDO EN DOS ARRAYS DISTINTOS, TODO POR CUESTION DE ORDEN, 

function agregarAlCarritoB(bajoId) {

    let bajo = bajos.find((el) => el.id === bajoId)
    carrito.push(bajo)


    mostrarCompraB()
}

const mostrarCompraB = () => {
    let tableBody = document.getElementById("tablaCarrito")

    tableBody.innerHTML = ""

    carrito.forEach((bajo) => {
        const tr = document.createElement("tr")
        tr.innerHTML = `
        <td>${bajo.id}</td>
        <td>${bajo.tipo}</td>
        <td>${bajo.marca}</td>
        <td>${bajo.modelo}</td>
        <td>${bajo.precio}</td>
        `

        tableBody.appendChild(tr)

        let JSONcarrito = JSON.stringify(carrito)

        localStorage.setItem("InstrumentosSeleccionados", JSONcarrito)
    })

}