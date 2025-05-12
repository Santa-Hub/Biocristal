import { motion, AnimatePresence } from "framer-motion";

export default function ImportExportModal({ onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-card p-6 rounded-xl w-full max-w-xl text-white shadow-lg"
        >
          <h2 className="text-xl font-bold text-accent mb-6">Exportar / Importar Ventas</h2>

          {/* Exportar */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-sky-400 mb-3">Exportar datos</h3>
            <label className="block mb-1">Selecciona una fecha:</label>
            <input type="date" className="w-full bg-slate-700 text-white rounded p-2 mb-4" />
            <label className="block mb-1">Tipo de archivo:</label>
            <select className="w-full bg-slate-700 text-white rounded p-2">
              <option value="pdf">PDF</option>
              <option value="excel">Excel</option>
            </select>
            <button className="mt-4 bg-accent text-white px-4 py-2 rounded hover:bg-opacity-90">
              Exportar
            </button>
          </div>

          {/* Importar */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-sky-400 mb-3">Importar datos</h3>
            <p className="text-sm text-muted mb-2">Sube un archivo .xlsx o .xls:</p>
            <input
              type="file"
              className="w-full bg-slate-700 text-white p-2 rounded"
              accept=".xlsx, .xls"
            />
            <button className="mt-4 bg-accent text-white px-4 py-2 rounded hover:bg-opacity-90">
              Importar
            </button>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded font-bold"
          >
            Cerrar
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
