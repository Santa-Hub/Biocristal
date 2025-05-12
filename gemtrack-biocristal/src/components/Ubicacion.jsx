import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Ubicacion() {
  const [bodega, setBodega] = useState("1");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const mostrarBodega = () => {
    setMensaje(`Productos encontrados en la bodega ${bodega}:`);
    const navigate = useNavigate();

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-white px-4">
      <div className="bg-card p-8 rounded-2xl shadow-lg w-full max-w-2xl">
        <button
          onClick={() => navigate("/dashboard")}
          className="mb-6 bg-accent hover:bg-opacity-90 text-white px-4 py-2 rounded font-semibold"
        >
          ← Regresar
        </button>

        <h2 className="text-3xl font-bold text-accent mb-6 text-center">Ubicaciones</h2>

        <div className="flex items-center justify-center gap-4 mb-6">
          <label htmlFor="bodega" className="text-lg font-medium">Selecciona la bodega:</label>
          <select
            id="bodega"
            value={bodega}
            onChange={(e) => setBodega(e.target.value)}
            className="bg-slate-700 text-white p-2 rounded"
          >
            <option value="1">Bodega 1</option>
            <option value="2">Bodega 2</option>
            <option value="3">Bodega 3</option>
          </select>
          <button
            onClick={mostrarBodega}
            className="bg-accent hover:bg-opacity-90 text-white px-4 py-2 rounded font-bold"
          >
            Mostrar
          </button>
        </div>

        <hr className="border-slate-600 my-4" />

        <p className="text-center text-muted italic">{mensaje || "Espacio reservado para mostrar productos de la bodega."}</p>
      </div>
    </div>
  );
}

export default Ubicacion;
