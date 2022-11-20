// profe en este caso puse los objetos en una clase moldeadora constructora
class celulares {
  constructor(iD, modelo, color, cantidadCamara, memoria, precio) {
    this.iD = iD,
      this.modelo = modelo,
      this.color = color,
      this.cantidadCamara = cantidadCamara,
      this.memoria = memoria,
      this.precio = precio
  }

}

// aca mismo instancie los objetos declarnado una variable constante 
const celular0 = new celulares(0, "Samsung 8+", "Negro", "3 Cámaras", "25GB", 600);
const celular1 = new celulares(1, "Samsung 12+", "Plateado", "3 Cámaras", "50GB", 700);
const celular2 = new celulares(2, "Iphone Z", "Dorado", "4 Cámaras", "60GB", 950);
const celular3 = new celulares(3, "Samsung 20 Plus", "Blanco", "5 Cámaras", "120GB", 1150);
const celular4 = new celulares(4, "Iphone 13", "Negro", "4 Cámaras", "96GB", 1340);
const celular5 = new celulares(5, "Iphone 14 Max Pro", "Azul", "5 Cámaras", "150GB", 1800)


// aqui los mismos almacenados en un array
const producto = [celular0, celular1, celular2, celular3, celular4, celular5];
// aqui cree esta constante en un array donde se almacenará los productos elejidos por los usuarios
const carritoDeCompras = []
let usuario = prompt("Como te llamas?");
let catalogo = prompt("Bienvenido " + usuario + " este es nuestro catálogo, elija el numero de producto que desee");

// cree esta funcion con un for of y sumandole un while de "agregar" en la cual se muestra el catalogo luego de la bienvenida a el usuario con valores dinamicos todo a traves de prompt
// con un metodo de busqueda y filtrado del array donde se muestra el catalogo y el usuario deberia de elejir el prducto
// ingresando solo valores numericos donde utomaticamente se agregan los produdcots elegidos con un .push al carrito de compras final.
// con el valor de isNaN para que corrija en caso de que el usuario NO ingrese un valor numerico
function agregar() {
  for (celular of producto) {
    catalogo += ` \n ${celular.iD} - ${celular.modelo} de color ${celular.color} con ${celular.cantidadCamara}, ${celular.memoria} de memoria interna a ${celular.precio} uSd`
  }
  catalogo += ` \n 6 - "Continuar al Carrito" para finalizar la compra `;
  let respuesta = parseInt(prompt(catalogo));
  while (isNaN(respuesta)) {
    alert("Por favor ingrese un número válido asignado al producto");
    respuesta = parseInt(prompt(catalogo));
  }
  while (respuesta != 6) { 

    let buscar = producto.find(e => e.iD == respuesta)
    if (buscar != undefined) {
      carritoDeCompras.push(buscar)
      alert(`${buscar.modelo} agregado exitosamente`);
    }
    respuesta = parseInt(prompt(catalogo));
  }
  alert(`Se agregaron tus productos!`);
  totalCarrito()
};

// aqui se muestra un resumen de los productos elegidos ya una vez ejecutado el metodo push

let totalProductos = `Resumen del carrito:`;
let totalFinal = 0;

agregar()

//aqui cree otra funcion de totalCarrito donde se muestra los celulares elegidos en el carrito donde suma los modelos elejidos y con el total de la compra 


function totalCarrito() {
  for (celularElegido of carritoDeCompras) {
    totalProductos += `\n ${celularElegido.modelo}`;
    totalFinal += celularElegido.precio;
  }
  alert(`\n ${totalProductos} \n por un total de ${totalFinal} uSd`);
}

