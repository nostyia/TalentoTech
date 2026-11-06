const KEY = "miCarrito";
export const guardarCarritoStorage = (carrito) => {
	localStorage.setItem(KEY, JSON.stringify(carrito));
};

export const obtenerCarritoStorage = () => {
	return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const vaciarCarritoStorage = () => {
	localStorage.removeItem(KEY);
};
