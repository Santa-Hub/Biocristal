export default function Formulario({ onClose, onAgregarProducto }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoProducto = {
      name: e.target.nombre.value,
      descripcion: e.target.descripcion.value,
      precio: parseFloat(e.target.precio.value),
      stock: parseInt(e.target.cantidad.value),
      imagen: e.target.imagen.files[0]?.name || "",
    };

    onAgregarProducto(nuevoProducto);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-[#1e3a8a] p-8 rounded-xl shadow-2xl w-full max-w-md relative text-white">
        <h2 className="text-2xl font-bold text-center mb-6">Agregar producto</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Nombre</label>
            <input
              type="text"
              name="nombre"
              className="w-full p-3 rounded-md bg-[#f0f8ff] text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Descripción</label>
            <input
              type="text"
              name="descripcion"
              className="w-full p-3 rounded-md bg-[#f0f8ff] text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Precio</label>
            <input
              type="number"
              name="precio"
              className="w-full p-3 rounded-md bg-[#f0f8ff] text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Cantidad</label>
            <input
              type="number"
              name="cantidad"
              className="w-full p-3 rounded-md bg-[#f0f8ff] text-black"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-1 font-semibold">Imagen</label>
            <input
              type="file"
              name="imagen"
              className="w-full p-1 rounded-md bg-white text-black"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
