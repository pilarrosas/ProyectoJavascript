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

const producto = [celular0, celular1, celular2, celular3, celular4, celular5];
const productosFrente = document.getElementById("productosFrente");

producto.forEach(prodArray => {
    productosFrente.innerHTML += `
    <div id=producto ${prodArray.id} class="col-md-4">
    <div class="productbox">
        <div class="fadeshop">
        <span class="maxproduct"><img src=${prodArray.imagen} alt="galaxy8" style="height: 250px; width: 220px; margin-left: 55px"></span>
        </div>
        <div class="product-details">
        <h3>${prodArray.modelo}</h3>
        <p>Color: ${prodArray.color}</p>
        <p>Camaras: ${prodArray.cantidadCamara}</p>
        <p>Memoria Interna de: ${prodArray.memoria}</p>
        <p>Precio: uSd ${prodArray.precio}</p>
        <button id="${prodArray.id}" type="button" class="btn btn-info">Comprar</button>
        </div>
    </div>
</div>
    `
})

const carritoDeCompras = JSON.parse(localStorage.getItem("carritoDeCompras")) || [];
console.log(carritoDeCompras)
const botonCompra = document.querySelectorAll(".btn-info");

botonCompra.forEach(boton => {
    boton.onclick = () => {
        const totalCarrito = producto.find(prod => prod.id === parseInt(boton.id));
        const productosCarrito = { ...totalCarrito, cantidad: 1 };
        const indexCarrito = carritoDeCompras.findIndex(prod => prod.id === carritoDeCompras.id);
        if (indexCarrito === -1) {
            carritoDeCompras.push(productosCarrito)
        } else {
            carritoDeCompras[indexCarrito].cantidad++
        }
        localStorage.setItem("carritoDeCompras", JSON.stringify(carritoDeCompras));
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

