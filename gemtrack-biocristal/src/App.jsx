import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Formulario from "./components/Formulario";
import Gemstones from "./components/Gemstones";
import Categories from "./components/Categories";
import Sales from "./components/Sales";
import Customers from "./components/Customers";
import Ubicacion from "./components/Ubicacion";
import ProtectedRoute from "./components/ProtectedRoute"; // Asegúrate que esté bien importado
import { CartProvider } from "./context/CartContext";

function App() {
  const withLayout = (Component) => (
    <div className="flex bg-background min-h-screen text-text">
      <Sidebar />
      <Component />
    </div>
  );

  return (
    <CartProvider>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Rutas protegidas */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              {withLayout(Dashboard)}
            </ProtectedRoute>
          }
        />
        <Route
          path="/gemstones"
          element={
            <ProtectedRoute>
              {withLayout(Gemstones)}
            </ProtectedRoute>
          }
        />
        <Route
          path="/categories"
          element={
            <ProtectedRoute>
              {withLayout(Categories)}
            </ProtectedRoute>
          }
        />
        <Route
          path="/sales"
          element={
            <ProtectedRoute>
              {withLayout(Sales)}
            </ProtectedRoute>
          }
        />
        <Route
          path="/customers"
          element={
            <ProtectedRoute>
              {withLayout(Customers)}
            </ProtectedRoute>
          }
        />
        <Route
          path="/formulario"
          element={
            <ProtectedRoute>
              {withLayout(Formulario)}
            </ProtectedRoute>
          }
        />
        <Route
          path="/ubicacion"
          element={
            <ProtectedRoute>
              <Ubicacion />
            </ProtectedRoute>
          }
        />
      </Routes>
    </CartProvider>
  );
}

export default App;
