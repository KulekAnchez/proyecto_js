//ACA CREO UN BOTON CON FUNCION DE SCROLL A LA SECCION DE PRODUCTOS, LO APLIQUÉ ACA Y NO EN INSTRUMENTOS
//YA QUE POR ALGUNA RAZON CUALQUIER COSA DE JQUERY INTERNA QUE APLIQUE ME ROMPE LAS CARDS, TENDRIA QUE RE-ESTRUCTURAR TODO

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

        const insumosArr = [];
        insumosArr.push(insumos)
        console.log(insumosArr)

        const li = document.createElement("li")
        if ((insumo.id > 14) && (insumo.id < 18)) {
            li.innerHTML = `
            <img src=${insumo.img} >
            <h3 class="centrado">${insumo.tipo}</h3>
            <h4 class="centrado">${insumo.marca} ${insumo.modelo}</h4>
            <p class="centrado">Precio: $${insumo.precio}</p>
            <button id="btnAñadir(${insumo.id})">Añadir al carrito</button>
        `

            $("#lista-productos-cables").append(li)



        } else if ((insumo.id > 19) && (insumo.id < 23)) {
            li.innerHTML = `
            <img src=${insumo.img} >
            <h3 class="centrado">${insumo.tipo}</h3>
            <h4 class="centrado">${insumo.marca} ${insumo.modelo}</h4>
            <p class="centrado">Precio: $${insumo.precio}</p>
            <button id="btnAñadir(${insumo.id})">Añadir al carrito</button>
        `



            $("#lista-productos-correas").append(li)


        } else if (insumo.id > 24) {
            li.innerHTML = `
            <img src=${insumo.img} >
            <h3 class="centrado">${insumo.tipo}</h3>
            <h4 class="centrado">${insumo.marca} ${insumo.modelo}</h4>
            <p class="centrado">Precio: $${insumo.precio}</p>
            <button id="btnAnadir(${insumo.id})">Añadir al carrito</button>
            `



            $("#lista-productos-varios").append(li)



        }

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



// =====================================