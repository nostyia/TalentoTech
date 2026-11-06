import { obtenerCarritoStorage } from "./storage.js";
import { actualizarContador } from "./ui.js";
import { vaciarCarrito } from "./funcionesCarrito.js";
const renderCarrito = () => {
	const carrito = obtenerCarritoStorage();
	const listaProductos = document.getElementById("lista-productos");
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
		vaciarCarrito();
		actualizarContador(carrito);
		renderCarrito();
		listaProductos.innerHTML = "";
		const iconoCarrito = document.querySelector("#contador-carrito ");
		iconoCarrito.remove();
	});
	const grupoBotones = document.createElement("div");
	grupoBotones.classList.add("botones-carrito");
	const botonComprar = document.createElement("button");
	botonComprar.innerText = "Finalizar Compra";
	grupoBotones.append(botonReset);
	grupoBotones.append(botonComprar);
	listaProductos.append(grupoBotones);
};
const carrito = obtenerCarritoStorage();
actualizarContador(carrito);
renderCarrito();
