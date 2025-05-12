// src/components/Categories.jsx

import React from "react";

function Categories() {
  return (
    <div className="flex-1 p-8 text-white bg-background min-h-screen">
      <h1 className="text-3xl font-bold text-accent mb-4">Categorías</h1>

      <div className="bg-card rounded-xl shadow p-6">
        <p className="text-muted">
          Aquí podrás gestionar las categorías de tus gemas, asignarlas, editarlas o eliminarlas.
        </p>

        <div className="mt-6">
          <ul className="space-y-2">
            <li className="p-2 bg-background rounded hover:bg-accent hover:text-white transition cursor-pointer">
              💎 Gema preciosa
            </li>
            <li className="p-2 bg-background rounded hover:bg-accent hover:text-white transition cursor-pointer">
              🔷 Piedra semipreciosa
            </li>
            <li className="p-2 bg-background rounded hover:bg-accent hover:text-white transition cursor-pointer">
              🪨 Cristal natural
            </li>
            <li className="p-2 bg-background rounded hover:bg-accent hover:text-white transition cursor-pointer">
              🧪 Gema sintética
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Categories;
