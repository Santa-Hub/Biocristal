import React from "react";

function NotificacionesModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-card text-white p-6 rounded-xl shadow-xl w-full max-w-md mx-auto relative">
        <button onClick={onClose} className="absolute top-3 right-4 text-xl hover:text-red-400">×</button>
        <h2 className="text-2xl font-bold mb-4 text-accent">🔔 Notificaciones</h2>
        <ul className="space-y-3 text-sm">
          <li className="bg-background p-3 rounded-lg shadow">📦 Pedido #1243 ha sido enviado</li>
          <li className="bg-background p-3 rounded-lg shadow">🧾 Nueva factura disponible</li>
          <li className="bg-background p-3 rounded-lg shadow">📢 Mantenimiento programado para mañana</li>
        </ul>
      </div>
    </div>
  );
}

export default NotificacionesModal;
