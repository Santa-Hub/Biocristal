import { useState } from "react";
import emailjs from "emailjs-com";
import { useCart } from "../context/CartContext";

function CheckoutForm({ onClose }) {
  const { cart, clearCart } = useCart();
  const [formData, setFormData] = useState({
    nombre: "",
    direccion: "",
    correo: "",
    celular: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      ...formData,
      mensaje: cart.map(item =>
        `${item.name} - ${item.grams}g x $${item.precio} = $${item.grams * item.precio}`
      ).join("\n"),
      total: cart.reduce((sum, i) => sum + i.precio * i.grams, 0),
    };

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_USER_ID"
      );
      alert("Recibo enviado con éxito");
      clearCart();
      onClose();
    } catch (error) {
      console.error("Error al enviar", error);
      alert("Error al enviar el recibo");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
      <input name="nombre" type="text" placeholder="Nombre completo" required value={formData.nombre} onChange={handleChange} className="w-full p-2 rounded bg-background border border-muted text-white" />
      <input name="direccion" type="text" placeholder="Dirección" required value={formData.direccion} onChange={handleChange} className="w-full p-2 rounded bg-background border border-muted text-white" />
      <input name="correo" type="email" placeholder="Correo electrónico" required value={formData.correo} onChange={handleChange} className="w-full p-2 rounded bg-background border border-muted text-white" />
      <input name="celular" type="text" placeholder="Celular" required value={formData.celular} onChange={handleChange} className="w-full p-2 rounded bg-background border border-muted text-white" />

      <button type="submit" className="w-full bg-accent text-white font-bold py-2 rounded hover:bg-opacity-90">
        Realizar compra y enviar recibo
      </button>
    </form>
  );
}

export default CheckoutForm;
