import { useState } from "react";
import emailjs from "@emailjs/browser";

function Recuperar() {
  const [correo, setCorreo] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleRecuperar = (e) => {
    e.preventDefault();

    emailjs.send("TU_SERVICE_ID", "TU_TEMPLATE_ID", {
      correo,
    }, "TU_PUBLIC_KEY")
      .then(() => {
        setEnviado(true);
        setTimeout(() => setEnviado(false), 4000);
      })
      .catch((err) => {
        console.error("Error al enviar el correo:", err);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-background text-white">
      <form onSubmit={handleRecuperar} className="bg-card p-6 rounded-2xl shadow-lg w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-accent text-center">Recuperar Contraseña</h2>
        <input
          type="email"
          placeholder="Correo registrado"
          className="w-full p-2 rounded bg-slate-700 text-white"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-accent hover:bg-blue-700 py-2 rounded font-bold">
          Enviar enlace
        </button>
        {enviado && <p className="text-green-400 text-sm text-center mt-2">✅ ¡Correo enviado correctamente!</p>}
      </form>
    </div>
  );
}

export default Recuperar;
