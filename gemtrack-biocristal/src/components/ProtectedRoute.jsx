import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuth = localStorage.getItem('rol'); // ← antes decía "auth"
  return isAuth ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
