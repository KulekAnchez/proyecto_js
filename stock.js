//ESTE JS ES EXCLUSIVO DEL STOCK DE LOS PRODUCTOS QUE VOY A OFRECER



//Con esta clase más su función constructora le doy estructura a cada uno de los objetos de mi stock
class Instrumento {
    constructor(tipo, marca, modelo, precio, img) {
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.img = img;

    }
}

//A continuación, cada uno de los productos especificados siguiendo la logica de la función constructora,
//Despues de establecerlos, creo el array y pusheo dentro del mismo cada uno de los objetos creados,

const instru1 = new Instrumento("Guitarra", "Fender", "Stratocaster", 10000, "/media/productos/fender-stratocaster.jpg");
const instru2 = new Instrumento("Guitarra", "Gibson", "LesPaul", 15000, "/media/productos/gibson-lespaul.jpg");
const instru3 = new Instrumento("Guitarra", "Washburn", "X10", 7000, "/media/productos/x10.jpg");
const instru4 = new Instrumento("Bajo", "Fender", "JazzBass", 20000, "/media/productos/jazzbass.jpg");
const instru5 = new Instrumento("Bajo", "Musicman", "Stingray", 25000, "/media/productos/stingray.jpg");
const instru6 = new Instrumento("Bajo", "Sx", "Precision", 10000, "/media/productos/pbass.jpg");

const guitarras = [];
const bajos = [];
guitarras.push(instru1, instru2, instru3);
bajos.push(instru4, instru5, instru6);