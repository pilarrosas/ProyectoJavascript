 
class celulares {
    constructor(id, modelo, color, cantidadCamara, memoria, precio, imagen) {
        this.id = id,
            this.modelo = modelo,
            this.color = color,
            this.cantidadCamara = cantidadCamara,
            this.memoria = memoria,
            this.precio = precio,
            this.imagen = imagen

    }
}

const celular0 = new celulares(0, "Samsung Galaxy 8+", "Negro", "3 Cámaras", "64GB", 149, "https://http2.mlstatic.com/D_NQ_NP_625935-MLA51376774713_092022-V.jpg");
const celular1 = new celulares(1, "Samsung Galaxy S21 Ultra", "Plateado", "4 Cámaras", "128GB", 1249, "https://celutronic.com/wp-content/uploads/2021/04/s21-ultra-4.jpg");
const celular2 = new celulares(2, "Iphone XR", "Rojo", "2 Cámaras", "256GB", 730, "https://media.game.es/COVERV2/3D_L/205/205909.png");
const celular3 = new celulares(3, "Samsung Galaxy 20 Plus", "Rosado", "5 Cámaras", "128GB", 986, "https://images.samsung.com/is/image/samsung/latin-galaxy-s20-plus-g985-bts-sm-g985fzpjgto-frontbpurple-thumb-261222598");
const celular4 = new celulares(4, "Iphone 13", "Blanco", "3 Cámaras", "512GB", 999, "https://http2.mlstatic.com/D_NQ_NP_2X_932957-MLA47782545553_102021-V.webp");
const celular5 = new celulares(5, "Iphone 14 Max Pro", "Violeta", "4 Cámaras", "126GB", 1099, "https://http2.mlstatic.com/D_NQ_NP_605126-MLM51559383638_092022-O.jpg")
const celular6 = new celulares(6, "Motorola G Power", "Gris", "4 Cámaras", "64GB", 130, "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71MiNDiFz1L._AC_SL1500_.jpg")
const celular7 = new celulares(7, "Iphone 11", "Negro", "3 Cámaras", "64GB", 287, "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/31PpUfTCiFL._AC_.jpg")
const celular8 = new celulares(8, "Samsung Galaxy S10e", "Negro", "2 Cámaras", "64GB", 122, "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71bK3oKRCOL._AC_SL1500_.jpg");
const celular9 = new celulares(9, "Samsung Galaxy S22 Ultra", "Negro Fantasma", "5 Cámaras", "512GB", 911, "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61U6oC65TTL._AC_SL1500_.jpg");
const celular10 = new celulares(10, "Google Pixel 7-5G", "Nieve", "3 Cámaras", "128GB", 499, "https://cdn.andro4all.com/andro4all/2022/10/Pixel-7-Pro-blanco.jpg?height=600");
const celular11 = new celulares(11, "One Plus 10 Pro", "Esmeralda", "4 Cámaras", "256GB", 550, "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71V3nk2-+GL._AC_SL1500_.jpg");

const producto = [celular0, celular1, celular2, celular3, celular4, celular5, celular6, celular7, celular8, celular9, celular10, celular11];
const productosFrente = document.getElementById("productosFrente");

producto.forEach(prodArray => {
    productosFrente.innerHTML += `
    <div class="col-md-4">
    <div id=${prodArray.id} class="productbox">
        <div class="fadeshop">
        <span class="maxproduct"><img src=${prodArray.imagen} alt="galaxy8" style="height: 250px; width: 220px; margin-left: 75px"></span>
        </div>
        <div class="product-details">
        <h3>${prodArray.modelo}</h3>
        <p>Color: ${prodArray.color}</p>
        <p>Camaras: ${prodArray.cantidadCamara}</p>
        <p>Memoria Interna de: ${prodArray.memoria}</p>
        <p>Precio: uSd ${prodArray.precio}</p>
        <button id="${prodArray.id}" type="button" class="btn btn-info">Agregar</button>
        </div>
    </div>
</div>
    `
});


let botonCompra = document.querySelectorAll(".btn-info");
const numerito = document.querySelector("#numerito")

let carritoDeCompras;
let carritoDeComprasLS = localStorage.getItem("carritoDeCompras")

if (carritoDeComprasLS) {
    carritoDeCompras = JSON.parse(carritoDeComprasLS)
    actualizarNumerito()
} else {
    carritoDeCompras = []
}

botonCompra.forEach(boton => {
    boton.onclick = () => {
        const totalCarrito = producto.find(prod => prod.id === parseInt(boton.id));
        const productosCarrito = { ...totalCarrito, cantidad: 1 };
        const indexCarrito = carritoDeCompras.findIndex((prod) => prod.id === productosCarrito.id);
        if (indexCarrito === -1) {
            carritoDeCompras.push(productosCarrito)
        }
        else {
            carritoDeCompras[indexCarrito].cantidad++
        }
        Swal.fire ({
            icon: 'success',
            text: 'Producto Agregado!'
        })
        actualizarNumerito() 
        localStorage.setItem("carritoDeCompras", JSON.stringify(carritoDeCompras));
        console.log(carritoDeCompras)
}
})

const miCarrito = document.querySelector("#miCarrito");
miCarrito.onclick = () => {
    const valor = carritoDeCompras.map(prod => prod.precio * prod.cantidad);
    let totalCompra = 0;
    valor.forEach(valores => {
        totalCompra += valores
    })
    
}

function actualizarNumerito() {
    let nuevoNumerito = carritoDeCompras.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito
}