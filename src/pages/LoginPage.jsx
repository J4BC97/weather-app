import { useState } from 'react';
import '../styles/LoginPage.css'
import { useDispatch } from 'react-redux';
import { loginUser } from '../store';
import { useNavigate } from 'react-router';

export const LoginPage = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser({ username, password })); // Despacha la acción asíncrona
      navigate('/'); // Redirige al usuario después del inicio de sesión
    } catch (error) {
      setError(error.message); // Muestra un mensaje de error si falla el inicio de sesión
    }
  };

  return (
    <div className="login-page">
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Nombre de usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
      {error && <p className="error">{error}</p>}
      <p>
        ¿No tienes una cuenta? <a href="/signup">Regístrate aquí</a>.
      </p>
    </div>
  );
};