import { obtenerCarritoStorage } from "./storage.js";
import { actualizarContador, mostrarMensaje } from "./ui.js";
import { vaciarCarrito } from "./funcionesCarrito.js";

const renderCarrito = () => {
	const carrito = obtenerCarritoStorage();
	if (carrito.length) {
		const main = document.querySelector("main");
		const listaProductos = document.createElement("div");
		listaProductos.id = "lista-productos";
		main.append(listaProductos);
		let precioTotal = 0;

		for (const prod of carrito) {
			precioTotal = parseFloat(precioTotal) + prod.price;
			const producto = document.createElement("li");
			producto.textContent = prod.title;
			const precio = document.createElement("span");
			precio.textContent = `$${prod.price}`;
			producto.append(precio);
			listaProductos.append(producto);
		}

		const total = document.createElement("p");
		total.textContent = `Total: $${precioTotal.toFixed(2)}`;
		listaProductos.append(total);
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
		listaProductos.append(grupoBotones);

		botonComprar.addEventListener("click", () => {
			if (carrito.length > 0) {
				vaciarCarrito();
				actualizarContador(carrito);
				renderCarrito();
				mostrarMensaje("gracias por comprar");
				listaProductos.innerHTML = "";
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
