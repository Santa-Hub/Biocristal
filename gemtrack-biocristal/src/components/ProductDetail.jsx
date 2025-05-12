import { useState } from "react";
import { X } from "lucide-react";

export default function ProductDetail({ product, onClose }) {
  const [grams, setGrams] = useState(1);
  const [showComparison, setShowComparison] = useState(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-card text-white rounded-2xl p-6 w-[700px] shadow-2xl flex gap-6 relative">
        {/* Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-muted hover:text-red-400"
        >
          <X size={22} />
        </button>

        {/* Imagen */}
        <div className="w-1/2 flex flex-col items-center">
          <img
            src={product.imagen}
            alt={product.name}
            className="w-full h-[240px] object-cover rounded-xl mb-4"
          />
          <div className="flex gap-4 text-accent">
            <button title="Editar"><i className="fas fa-edit"></i></button>
            <button title="Eliminar"><i className="fas fa-trash-alt text-red-400"></i></button>
          </div>
        </div>

        {/* Info */}
        <div className="w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-accent mb-2">{product.name}</h2>
            <p className="text-muted text-sm mb-3">{product.descripcion}</p>
            <p className="mb-1">💵 Precio por gramo: ${product.precio}</p>
            <p className="mb-4">📦 Stock disponible: {product.stock}</p>
          </div>

          <div className="mb-3">
            <label>Gramos:</label>
            <div className="flex items-center gap-2 mt-2">
              <button onClick={() => setGrams(g => Math.max(1, g - 1))} className="bg-sky-500 text-white px-3 py-1 rounded">➖</button>
              <input type="number" value={grams} readOnly className="w-16 p-1 text-center bg-slate-700 rounded text-white" />
              <button onClick={() => setGrams(g => g + 1)} className="bg-sky-500 text-white px-3 py-1 rounded">➕</button>
            </div>
          </div>

          <button
            onClick={() => setShowComparison(!showComparison)}
            className="bg-sky-600 text-white font-bold py-2 px-4 rounded hover:bg-sky-700"
          >
            Comparar precio
          </button>

          {showComparison && (
            <div className="mt-4 text-sm text-cyan-300">
              <p>💠 Sistema 1: $118,000</p>
              <p>💠 Sistema 2: $121,500</p>
              <p>💠 Sistema 3: $119,900</p>
              <p>💠 Sistema 4: $120,000</p>
              <p>💠 Sistema 5: $122,300</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
