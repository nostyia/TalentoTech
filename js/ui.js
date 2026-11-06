import { obtenerProductos } from "./api.js";
import {
	agregarAlCarrito,
	borrarDelCarrito,
	vaciarCarrito,
} from "./funcionesCarrito.js";

export const actualizarContador = (carrito) => {
	const contador = document.getElementById("contador-carrito");
	contador.innerHTML = "";
	if (contador) {
		const productos = document.createElement("i");
		productos.classList.add("fa", "fa-cart-plus");
		productos.ariaHidden = true;
		productos.textContent = carrito.length || "";
		contador.append(productos);
	}
};

export const mostrarMensaje = (mensaje) => {
	const contenedor = document.querySelector("main");
	const popup = document.createElement("div");
	popup.classList.add("carrito-popup");
	popup.textContent = mensaje;
	contenedor.append(popup);
	setTimeout(() => {
		popup.remove();
	}, 1000);
};
export const mostrarProductos = async () => {
	obtenerProductos().then((respuesta) => {
		for (const prod of respuesta) {
			// console.log(producto.title);
			// articulo de cada producto
			const contenedorProductos = document.getElementById(
				"contenedor-productos",
			);
			const producto = document.createElement("article");
			producto.classList.add("producto");
			// imagen de cada producto
			const imagen = document.createElement("img");
			imagen.src = prod.thumbnail;

			// titulo de cada producto
			const titulo = document.createElement("h2");
			titulo.innerText = prod.title;
			// descripcion de cada producto
			const descripcion = document.createElement("p");
			descripcion.innerText = prod.description;
			// boton agregar al carrito
			const comprar = document.createElement("button");
			comprar.innerText = "Agreagr al carrito";
			comprar.addEventListener("click", () => {
				agregarAlCarrito(prod);
			});
			producto.append(imagen);
			producto.append(titulo);
			producto.append(descripcion);
			producto.append(comprar);
			contenedorProductos.append(producto);
		}
	});
};
