import React from "react";

function RegistroDevolucionGarantiaModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-card p-6 rounded-xl text-white shadow-xl w-full max-w-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-accent">Registro de devolución y garantía</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-500 text-2xl"
          >
            &times;
          </button>
        </div>

        <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
          <div className="bg-background p-3 rounded-lg shadow">
            <p className="text-sm">🧾 Producto: <strong>Esmeralda</strong></p>
            <p className="text-sm">🕒 Fecha: 2025-05-12</p>
            <p className="text-sm">📦 Motivo: Daño en transporte</p>
          </div>
          <div className="bg-background p-3 rounded-lg shadow">
            <p className="text-sm">🧾 Producto: Rubí</p>
            <p className="text-sm">🕒 Fecha: 2025-05-11</p>
            <p className="text-sm">📦 Motivo: Garantía por defecto</p>
          </div>
          <div className="bg-background p-3 rounded-lg shadow">
            <p className="text-sm">🧾 Producto: Amatista</p>
            <p className="text-sm">🕒 Fecha: 2025-05-10</p>
            <p className="text-sm">📦 Motivo: Solicitud de cambio</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-bold"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default RegistroDevolucionGarantiaModal;
