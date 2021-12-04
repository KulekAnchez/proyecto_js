//ACA CREO UN BOTON CON FUNCION DE SCROLL A LA SECCION DE PRODUCTOS, LO APLIQUÉ ACA Y NO EN INSTRUMENTOS
//YA QUE POR ALGUNA RAZON CUALQUIER COSA DE JQUERY INTERNA QUE APLIQUE ME ROMPE LAS CARDS, TENDRIA QUE RE-ESTRUCTURAR TODO
// usas todo estructurado, muy pocas llamadas a funciones

//APARECE EN HIDE Y VA APARECIENDO EN UNA SUSECION DE 2 SEGUNDOS Y MEDIO
$("#btnInsumos").hide()
$("#btnInsumos").fadeIn(2500)


//ESTE ES EL CODIGO CON EVENTO CLICK PARA QUE SCROLEE HASTA EL OFFSET TOP DE LA SECCIÓN PRODCUTOS
$("#btnInsumos").click(() => {
    $("html, body").animate({
        scrollTop: $("#seccion-productos").offset().top

    }, 1500);
})


//ESTE FOR EACH ES IDENTICO AL USADO EN INSTRUMENTOS SOLO QUE APLIQUE SELECTOR DE JQUERY PARA CREAR LAS CARDDS
//ME SERVÍ DE UN STOCK CREADO EN JSON, DANDOLÉ CONDICIONALES SEGUN LOS ID PARA ORGANIZARLOS EN CADA UL SELECCIONADA


$.getJSON("/stock.json", (insumos) => {


    insumos.forEach((insumo) => {



        const li = document.createElement("li")
        if ((insumo.tipo == "Cable")) {
            li.innerHTML = `
            <img src=${insumo.img} >
            <h3 class="centrado">${insumo.tipo}</h3>
            <h4 class="centrado">${insumo.marca} ${insumo.modelo}</h4>
            <p class="centrado">Precio: $${insumo.precio}</p>
            <button class="botonazo" id="btnAñadir(${insumo.id})">Añadir al carrito</button>
            <input type="number" id="cantidad" min="0" max="10">

        `

            $("#lista-productos-cables").append(li)



        } else if ((insumo.tipo == "Correa")) {

            li.innerHTML = `
            <img src=${insumo.img} >
            <h3 class="centrado">${insumo.tipo}</h3>
            <h4 class="centrado">${insumo.marca} ${insumo.modelo}</h4>
            <p class="centrado">Precio: $${insumo.precio}</p>
            <button class="botonazo" id="btnAñadir${insumo.id}">Añadir al carrito</button>
            <input type="number" id="cantidad" min="0" max="10">
            
            `



            $("#lista-productos-correas").append(li)


        } else if (insumo.id > 24) {
            li.innerHTML = `
            <img src=${insumo.img} >
            <h3 class="centrado">${insumo.tipo}</h3>
            <h4 class="centrado">${insumo.marca} ${insumo.modelo}</h4>
            <p class="centrado">Precio: $${insumo.precio}</p>
            <button class="botonazo" id="btnAnadir${insumo.id}">Añadir al carrito</button> 
            <input type="number" id="cantidad" min="0" max="10">
            `



            $("#lista-productos-varios").append(li)



        }
        insumosArr.push(insumo)
    })




    // EN LA HOJA DE ESTILOS LE DI UN POINTTER A LOS DE LAS UL SPAN Y HIDE A LOS LI,
    //A LOS SPAN LES DI EVENTO CLICK Y QUE LES HAGA UN TOGGLE A LOS LI QUE CONTENGA, QUEDA RE BELLO

    /* CABLES */
    $("#lista-productos-cables li").hide()
    $("#span-cables").click(() => {

            $("#lista-productos-cables li").slideToggle(3500);

        })
        /* CORREAS */
    $("#lista-productos-correas li").hide()
    $("#span-correas").click(() => {

            $("#lista-productos-correas li").slideToggle(3500);

        })
        /* VARIOS */
    $("#lista-productos-varios li").hide()
    $("#span-varios").click(() => {

        $("#lista-productos-varios li").slideToggle(3500);

    })
})


insumosArr = [];
carrito = [];

// =====================================
document.onreadystatechange = () => {
    let botonesAnadir = document.querySelectorAll(".botonazo")

    botonesAnadir.forEach((anadir) => {

            anadir.addEventListener("click", agregarItem);

            function agregarItem() {
                let insumoAgregado = insumosArr.find((el) => el.id === insuId)
                carrito.push(insumoAgregado)
                mostrarCompra()
            }
        }

    );
}

const mostrarCompra = () => {
    let tableBody = document.getElementById("tablaCarrito")


    carrito.forEach((insumo) => {
        const trInsu = document.createElement("tr")
        tr.innerHTML = `
        <td>${insumo.id}</td>
        <td>${insumo.tipo}</td>
        <td>${insumo.marca}</td>
        <td>${insumo.modelo}</td>
        <td>${insumo.precio}</td>
        <td id="tablaConBoton"><button id="botonBorre-${insumo.id}"><p>Eliminar Producto</p></button></td>
        `

        tableBody.appendChild(trInsu)



    })

    let JSONcarrito = JSON.stringify(carrito)

    localStorage.setItem("InsumosSeleccionados", JSONcarrito)
}