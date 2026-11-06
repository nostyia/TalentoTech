import { obtenerCarritoStorage } from "./storage.js";
import { actualizarContador } from "./ui.js";
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
		listaProductos.append(producto);
		listaProductos.append(precio);
	}
	const total = document.createElement("p");
	total.textContent = `Total: $${precioTotal}`;
	listaProductos.append(total);
};
const carrito = obtenerCarritoStorage();
renderCarrito();
actualizarContador(carrito);
