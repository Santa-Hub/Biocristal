function RegistroTablasModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-card text-white p-6 rounded-2xl shadow-xl w-full max-w-md relative">
        {/* Botón Cerrar (X) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white text-xl"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-accent mb-2">📋 Registro de Tablas</h2>
        <p className="text-muted mb-4">Visualiza o administra registros de tablas predefinidas del sistema.</p>

        <div className="space-y-3">
          <div className="bg-background p-3 rounded-xl">
            <p className="font-semibold text-sky-400">Tabla: Tipos de Gema</p>
            <p className="text-sm text-muted">Última actualización: 2025-05-10</p>
          </div>
          <div className="bg-background p-3 rounded-xl">
            <p className="font-semibold text-sky-400">Tabla: Estados de Pedido</p>
            <p className="text-sm text-muted">Última actualización: 2025-05-07</p>
          </div>
          <div className="bg-background p-3 rounded-xl">
            <p className="font-semibold text-sky-400">Tabla: Categorías</p>
            <p className="text-sm text-muted">Última actualización: 2025-05-03</p>
          </div>
        </div>

        {/* Botón cerrar inferior */}
        <button
          onClick={onClose}
          className="mt-6 w-full bg-accent text-white py-2 rounded-lg font-bold hover:bg-opacity-90"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default RegistroTablasModal;
