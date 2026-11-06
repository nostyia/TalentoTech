import { obtenerProductos } from "./api.js";

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
			producto.append(imagen);
			// titulo de cada producto
			const titulo = document.createElement("h2");
			titulo.innerText = prod.title;
			producto.append(titulo);
			// descripcion de cada producto
			const descripcion = document.createElement("p");
			descripcion.innerText = prod.description;
			producto.append(descripcion);
			// boton agregar al carrito
			const comprar = document.createElement("button");
			comprar.innerText = "Agreagr al carrito";
			producto.append(comprar);
			contenedorProductos.append(producto);
		}
	});
};
