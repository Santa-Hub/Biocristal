import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [bienvenido, setBienvenido] = useState(false);
  const navigate = useNavigate();

  const users = [
    { username: "sneider", password: "1020111", role: "admin" },
    { username: "santa", password: "1214", role: "worker" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      setError("");
      setBienvenido(true);
      localStorage.setItem("rol", user.role);
      localStorage.setItem("auth", "true");
      setTimeout(() => navigate("/dashboard"), 1500);
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="relative min-h-screen bg-background flex items-center justify-center text-text">
      {/* Mensaje de bienvenida */}
      {bienvenido && (
        <div className="absolute top-10 bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-bold animate-bounce shadow-xl">
          ¡Bienvenido!
        </div>
      )}

      {/* Formulario de inicio de sesión */}
      <form
        onSubmit={handleSubmit}
        className="bg-card p-8 rounded-2xl shadow-md w-96"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-accent">
          Iniciar Sesión
        </h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-4">
          <label className="block mb-1">Usuario</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-background border border-muted"
            placeholder="Ingresa tu usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <label className="block mb-1">Contraseña</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full p-2 pr-10 rounded bg-background border border-muted"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2 text-muted hover:text-accent"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <div className="text-right mb-4">
          <button
            type="button"
            onClick={() => navigate("/recuperar")}
            className="text-sm text-accent hover:underline"
          >
            ¿Olvidaste tu contraseña?
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-accent text-white p-2 rounded hover:bg-opacity-90 transition"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
