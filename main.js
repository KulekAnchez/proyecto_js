// VOY A LLAMAR DE MI OTRO ARCHIVO JS (stock.js) CADA UNO DE LOS ELEMENTOS DEL
//ARRAY CON UN FOR OF E INCORPORARLOS AL HTML EN UN UL MANIPULANDO EL DOM,



//Aca recupero el UL para luego colgar mis elementos dentro de el
const listaGuitarras = document.getElementById("lista-productos-guitarras")
const listaBajos = document.getElementById("lista-productos-bajos")


//USO UN FOR OF QUE PASE POR EL STOCK DEL OTRO SCRIPT Y POR CADA UNO QUE PASA CARGA 
//EL INNERHTML CON TODAS LAS PROPIEDADES LLAMADAS CON ETIQUETAS DISTINTAS
//CON CSS LES DI FORMA EN UN CONTENEDOR PARA QUE SEA MAS ESTÉTICO TODO :)

for (const guitarra of guitarras) {
    const li = document.createElement("li")

    li.innerHTML = `
    <img src=${guitarra.img} >
    <h5 class="centrado">ID producto: ${guitarra.id}</h5>
    <h3 class="centrado">${guitarra.tipo}</h3>
    <h4 class="centrado">${guitarra.marca} ${guitarra.modelo}</h4>
    <p class="centrado">Precio: $${guitarra.precio}</p>
    <button onclick="agregarAlCarrito()">Añadir al carrito</button>
    `
    listaGuitarras.appendChild(li)
}

for (const bajo of bajos) {
    const li = document.createElement("li")

    li.innerHTML = `
    <img src=${bajo.img} >
    <h5 class="centrado">ID producto: ${bajo.id}</h5>
    <h3 class="centrado">${bajo.tipo}</h3>
    <h4 class="centrado">${bajo.marca} ${bajo.modelo}</h4>
    <p class="centrado">Precio: $${bajo.precio}</p>
    <button onclick="agregarAlCarrito()">Añadir al carrito</button>
    `
    listaBajos.appendChild(li)
}

function agregarAlCarrito() {
    console.log("agregaste algo al carrito")
}