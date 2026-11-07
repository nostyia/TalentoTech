import { obtenerCarritoStorage } from "./storage.js";
import { actualizarContador, mostrarMensaje } from "./ui.js";
import { vaciarCarrito, borrarDelCarrito } from "./funcionesCarrito.js";

const renderCarrito = () => {
	const carrito = obtenerCarritoStorage();
	const main = document.querySelector("main");
	const listaProductos = document.createElement("div");
	if (carrito.length) {
		listaProductos.id = "lista-productos";
		main.append(listaProductos);
		let precioTotal = 0;

		for (const prod of carrito) {
			const eliminar = document.createElement("button");
			eliminar.classList.add("fa", "fa-times");
			eliminar.addEventListener("click", () => {
				listaProductos.remove();
				borrarDelCarrito(prod);
				actualizarContador(carrito);
				renderCarrito();
				mostrarMensaje("Producto eliminado");
			});
			const producto = document.createElement("li");
			const prodtitulo = document.createElement("span");
			prodtitulo.textContent = prod.title;
			const precio = document.createElement("span");
			precioTotal = parseFloat(precioTotal) + prod.price;
			precio.textContent = `$${prod.price}`;
			producto.append(eliminar);
			producto.append(prodtitulo);
			producto.append(precio);
			listaProductos.append(producto);
		}

		const total = document.createElement("p");
		total.textContent = `Total: $${precioTotal.toFixed(2)}`;

		const botonReset = document.createElement("button");
		botonReset.innerText = "Borrar";
		botonReset.addEventListener("click", () => {
			if (carrito.length > 0) {
				vaciarCarrito();
				actualizarContador(carrito);
				renderCarrito();
				listaProductos.innerHTML = "";
				listaProductos.remove();
				const iconoCarrito = document.querySelector("#contador-carrito");
				if (iconoCarrito) {
					iconoCarrito.remove();
				}
				setTimeout(() => {
					location.reload();
				}, 1000);
			} else {
				mostrarMensaje("Nada que vaciar");
			}
		});

		const grupoBotones = document.createElement("div");
		grupoBotones.classList.add("botones-carrito");
		const botonComprar = document.createElement("button");
		botonComprar.innerText = "Finalizar Compra";
		grupoBotones.append(botonReset);
		grupoBotones.append(botonComprar);
		grupoBotones.append(total);
		listaProductos.append(grupoBotones);

		botonComprar.addEventListener("click", () => {
			if (carrito.length > 0) {
				vaciarCarrito();
				actualizarContador(carrito);
				renderCarrito();
				mostrarMensaje("Gracias por Comprar");
				listaProductos.remove();
				setTimeout(() => {
					location.reload();
				}, 1000);
			} else {
				mostrarMensaje("Antes de finalizar la compra, agregue los productos");
			}
		});
	} else {
		const main = document.querySelector("main");
		const subtitulo = document.querySelector("h1");
		subtitulo.textContent = "Tu carrito está esperando";
		const vacio = document.createElement("p");
		vacio.textContent =
			"Todavía no hay nada aquí, pero lo que buscas está a un par de clics. Empieza por lo que más te gusta.";
		main.append(subtitulo);
		main.append(vacio);
	}
};
const carrito = obtenerCarritoStorage();
actualizarContador(carrito);
renderCarrito();
