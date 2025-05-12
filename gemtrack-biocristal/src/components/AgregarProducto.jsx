import { useState } from "react";
import Formulario from "./Formulario";

export default function AgregarProducto({ onAgregarProducto }) {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handleClose = () => {
    setMostrarFormulario(false);
  };

  return (
    <>
      <button
        onClick={() => setMostrarFormulario(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
      >
        Agregar producto
      </button>

      {mostrarFormulario && (
        <Formulario
          onClose={handleClose}
          onAgregarProducto={onAgregarProducto}
        />
      )}
    </>
  );
}
