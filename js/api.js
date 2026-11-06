const API_URL = "https://dummyjson.com/products";
export async function obtenerProductos() {
	try {
		const respuesta = await fetch(API_URL);

		if (!respuesta.ok) {
			throw new Error(`ERROR HTTP: ${respuesta.status}`);
		}

		const datos = await respuesta.json();
		return datos.products;
	} catch (error) {
		console.error("Error al obtener productos:", error);
	}
}
