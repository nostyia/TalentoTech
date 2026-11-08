import { obtenerProductos } from "./api.js";
import {
	agregarAlCarrito,
	borrarDelCarrito,
	vaciarCarrito,
} from "./funcionesCarrito.js";

export const actualizarContador = (carrito) => {
	const main = document.querySelector("main");
  const contadorExiste = document.querySelector("#contador-carrito");

	if (carrito.length > 0) {
		if (contadorExiste) {
			contadorExiste.remove();
		}
		const contador = document.createElement("a");
		contador.href = "./pages/carrito.html";
		contador.id = "contador-carrito";
		contador.classList.add("fa", "fa-cart-plus");
		contador.remove();
		contador.textContent = carrito.length || "";
		main.append(contador);
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
      imagen.alt = prod.title;

			// titulo de cada producto
			const titulo = document.createElement("h2");
			titulo.innerText = prod.title;
			// descripcion de cada producto
			const descripcion = document.createElement("p");
			descripcion.innerText = prod.description;
			// boton agregar al carrito
			const comprar = document.createElement("button");
			comprar.innerText = "Agregar al carrito";
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
