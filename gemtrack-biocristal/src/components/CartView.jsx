import { useCart } from "../context/CartContext";
import { Trash2 } from "lucide-react";

function CartView() {
  const { cart, clearCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.precio * item.grams,
    0
  );

  return (
    <div className="p-6 text-white max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-accent">🛒 Carrito de compras</h2>

      {cart.length === 0 ? (
        <p className="text-muted">Tu carrito está vacío.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-card p-4 rounded-xl flex items-center justify-between shadow"
            >
              <div>
                <h3 className="text-xl font-bold text-sky-400">{item.name}</h3>
                <p className="text-sm text-muted">
                  Gramos: {item.grams} x ${item.precio} = ${item.precio * item.grams}
                </p>
              </div>
              <img
                src={item.imagen}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md"
              />
            </div>
          ))}

          <div className="text-right mt-6">
            <p className="text-xl font-semibold">
              Total: <span className="text-accent">${total.toLocaleString()}</span>
            </p>
            <button
              onClick={clearCart}
              className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <Trash2 size={18} /> Vaciar carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartView;
