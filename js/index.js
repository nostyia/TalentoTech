import { obtenerCarritoStorage } from "./storage.js";
import { actualizarContador, mostrarProductos } from "./ui.js";

import {} from "./ui.js";

if (document.getElementById("contenedor-productos")) {
	const carrito = obtenerCarritoStorage();
	mostrarProductos();
	actualizarContador(carrito);
}
