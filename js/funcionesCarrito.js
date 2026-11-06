import { guardarCarritoStorage, obtenerCarritoStorage } from "./storage.js";
import { actualizarContador, mostrarMensaje } from "./ui.js";

export const agregarAlCarrito = (producto) => {
	const carrito = obtenerCarritoStorage();
	carrito.push(producto);
	guardarCarritoStorage(carrito);
	actualizarContador(carrito);
	mostrarMensaje("Agregado al carrito");
};

export const borrarDelCarrito = (indice) => {
	const carrito = obtenerCarritoStorage();
	carrito.splice(indice, 1);
	guardarCarritoStorage(carrito);
	actualizarContador(carrito);
	mostrarMensaje("Eliminado del carrito");
};
export const vaciarCarrito = () => {
	vaciarCarritoStorage();
	actualizarContador([]);
	mostrarMensaje("Carrito vaciado");
};
