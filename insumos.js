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


//ESTE FOR EACH ES IDENTICO SOLO QUE APLIQUE SELECTOR DE JQUERY PARA CREAR LAS CARDDS

insumos.forEach((insumo) => {
    const li = document.createElement("li")
    if (insumo.id > 9) {
        li.innerHTML = `
        <img src=${insumo.img} >
        <h3 class="centrado">${insumo.tipo}</h3>
        <h4 class="centrado">${insumo.marca} ${insumo.modelo}</h4>
        <p class="centrado">Precio: $${insumo.precio}</p>
        <button onclick="agregarAlCarrito(${insumo.id})">Añadir al carrito</button>
    `

        $("#lista-productos-cables").append(li)
    }
})

// EN LA HOJA DE ESTILOS LE DI UN POINTTER A LOS SPAN Y HIDE A LOS LI, POR LO PRONTO SOOLO HICE LOS CABLES,
//A LOS SPAN LES DI EVENTO CLICK Y QUE LES HAGA UN TOGGLE A LOS LI QUE CONTENGA, QUEDA RE BELLO
$("#lista-productos-cables li").hide()
$("span").click(() => {

    $("li").slideToggle(3500);

})







// =====================================