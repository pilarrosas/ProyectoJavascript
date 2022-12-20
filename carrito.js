let carritoDeCompras = localStorage.getItem("carritoDeCompras");
carritoDeCompras = JSON.parse(carritoDeCompras);
const contenido = document.getElementById("#itemContent");
const carritoSinProductos = document.getElementById("carritoSinProductos");
let botonEliminar = document.querySelectorAll(".eliminarProducto");
const botonVaciar = document.querySelector("#empty-button");
const contenedorTotal = document.getElementById("#totalFinal");
const botonDeCompra = document.getElementById("purchase-button")


function productosSeleccionados() {
    if (carritoDeCompras && carritoDeCompras.length > 0) {
        carritoDeCompras.forEach(prodArray => {
            itemContent.innerHTML += `
   <div class="card" style="margin-left: 25%;">
   <div class="edd_cart_item_image">
       <img width="25" height="25" src="${prodArray.imagen} " alt="${prodArray.imagen}">
    </div>
   <h4 class="card-header" style="color:black">${prodArray.modelo} de color ${prodArray.color} </h4>
   <div class="card-body">
   <h5 class="card-title">Cantidad: ${prodArray.cantidad} unidades</h5>
     <h5 class="card-title">Precio por unidad: uSd ${prodArray.precio} </h5>
   </br>
   <h4 class="card-title" style="color: #000;">Subtotal Compra de ${prodArray.modelo}: uSd ${prodArray.precio * prodArray.cantidad} </h4>
   <input class="eliminarProducto" id="${prodArray.id} " style="background-color: transparent; color: red; border: none; font-size:10px;" type="submit" name="edd-purchase"
		value="Eliminar Producto">
   </div>
 </div>
 <div class="wow-hr type_short">
	<span class="wow-hr-h">
			<i style="color:#00bba7" class="fa fa-star"></i>
			<i style="color:#00bba7" class="fa fa-star"></i>
		<i style="color:#00bba7" class="fa fa-star"></i>
	</span>
</div>

`
        })

    } else {
        carritoSinProductos.classList.remove("disabled")
    }
    actualizaBotonEliminar()
    actualizarTotal ()
}

productosSeleccionados()

function actualizaBotonEliminar() {
    botonEliminar = document.querySelectorAll(".eliminarProducto");
    botonEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito)
    })
}

function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = carritoDeCompras.findIndex(producto => producto.id === idBoton);
    carritoDeCompras.splice(index, 1)
    Swal.fire ({
        icon: 'success',
        text: 'Elimiaste este Producto'
    })
    setTimeout(() => {
        window.location.href = "./checkout.html";
    }, 3000);
    productosSeleccionados()
    localStorage.setItem("carritoDeCompras", JSON.stringify(carritoDeCompras))
}

botonVaciar.addEventListener("click", vaciarCarrito)

function vaciarCarrito() {
    carritoDeCompras.length = 0;
    localStorage.setItem("carritoDeCompras", JSON.stringify(carritoDeCompras));
    Swal.fire ({
        icon: 'success',
        text: 'Vaciaste tu Carrito de Compras'
    })
    setTimeout(() => {
        window.location.href = "./checkout.html";
    }, 3000);
      
      productosSeleccionados()
    
}

function actualizarTotal () {
    const totalCalculado = carritoDeCompras.reduce ((acc, producto) => acc + (producto.precio*producto.cantidad),0);
    totalFinal.innerText = `Total: uSd ${totalCalculado} `
}

botonDeCompra.addEventListener("click", graciasPorTuCompra)
function graciasPorTuCompra () {
    Swal.fire({
        icon: 'success',
        title: 'Gracias por tu compra!',
        showConfirmButton: false,
      })
      
}





