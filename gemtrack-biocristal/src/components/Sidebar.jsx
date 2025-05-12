import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ObservacionesModal from "./ObservacionesModal";
import NotificacionesModal from "./NotificacionesModal";
import RegistroDevolucionGarantiaModal from "./RegistroDevolucionGarantiaModal";
import ImportExportModal from "./ImportExportModal";
import RegistroTablasModal from "./RegistroTablasModal";
import { label } from "framer-motion/client";






function Sidebar() {
  const [openSections, setOpenSections] = useState({
    herramientas: false,
    informes: false,
    configuracion: false,
    almacen: false,
  });

  const [showImportExport, setShowImportExport] = useState(false);
  const [showObservaciones, setShowObservaciones] = useState(false);
  const [showNotificaciones, setShowNotificaciones] = useState(false);
  const [showRegistroModal, setShowRegistroModal] = useState(false);
  const [showRegistroTablasModal, setShowRegistroTablasModal] = useState(false);
  const navigate = useNavigate();




  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const Section = ({ title, items, id, icon }) => (
    <div className="mb-4">
      <button
        onClick={() => toggleSection(id)}
        className="flex items-center gap-2 w-full text-left font-semibold hover:text-accent"
      >
        {openSections[id] ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        {icon && <span>{icon}</span>}
        {title}
      </button>

      <AnimatePresence initial={false}>
        {openSections[id] && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="ml-6 mt-2 space-y-1 text-sm text-muted overflow-hidden"
          >
            {items.map((item, index) => (
              <li
                key={index}
                onClick={item?.action || undefined}
                className={`hover:text-accent cursor-pointer ${item?.action ? "font-medium" : ""}`}
              >
                {typeof item === "string" ? item : item.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <div className="w-64 bg-card text-white shadow-lg p-4 rounded-r-2xl overflow-y-auto scrollbar-hide">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-accent flex items-center justify-center gap-2">
          BioCristal <span className="text-cyan-400">💎</span>
        </h1>
      </div>

      <Section
        title="Herramientas"
        id="herramientas"
        items={[
          { label: "Observaciones", action: () => setShowObservaciones(true) },
          { label: "Notificaciones", action: () => setShowNotificaciones(true) },
          { label: "Registro devolución", action: () => setShowRegistroModal(true) },
          { label: "Registro tablas", action: () => setShowRegistroTablasModal(true) },
          { label: "Importar / Exportar", action: () => setShowImportExport(true) },
        ]}
      />

      <Section
        title="Informes"
        id="informes"
        items={[
          "Ingresos",
          "Tipo moneda",
          "Historial de compras",
          "Actualizaciones",
        ]}
      />

      <Section
        title="Configuración"
        id="configuracion"
        items={[
          "Usuario",
          { label: "Ubicación", action: () => navigate("/ubicacion") },
          "Colección exclusiva",
          "Alertas",
          "Productos disponibles",
          "Kits o combos",
          "Contabilidad",
          "Copia de seguridad",
          "Editar",
          "Precios",
          "Tiempo de un producto",
          "Descargas",
        ]}
      />

      <Section
        title="Almacén"
        id="almacen"
        icon="🏷"
        items={[
          "Tipos",
          "Niveles stock",
          "Generar documento",
          "Ubicaciones de almacenes",
          "Recordatorios",
          "Órdenes de compra",
        ]}
      />

      {/* Modales */}
      {showImportExport && (
        <ImportExportModal onClose={() => setShowImportExport(false)} />
      )}

      {showObservaciones && (
        <ObservacionesModal onClose={() => setShowObservaciones(false)} />
      )}

      {showNotificaciones &&(
        <NotificacionesModal onClose={() => setShowNotificaciones(false)} />
      )}

      {showRegistroModal && (
        <RegistroDevolucionGarantiaModal onClose={() => setShowRegistroModal(false)} />
      )}

      {showRegistroTablasModal && (
        <RegistroTablasModal onClose={() => setShowRegistroTablasModal(false)} />
      )}
 

    </div>
  );
}

export default Sidebar;
