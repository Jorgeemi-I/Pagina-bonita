import { useState } from 'react';
import './App.css';

// Credenciales válidas (puedes cambiarlas como quieras)
const VALID_CREDENTIALS = {
  usuario: 'Mi princesita hermosa',
  pin: '1124'
};

const mensajesError = [
    'Prueba otra vez, hermosa ;) ❤️',
    'Casi casi... ¡Tú puedes mi amor! 💕',
    'Pista. ¿Domingo...? :)',
    '¿Hoy en 8 días más? 💜',
    ': <-- ¿solo eso? jsjsjs',
    '27',
    'Respira, piensa y vuelve a intentar ❤️',
    '¡Vamos mi princesita! ¡Casi lo tienes! ;) guiño guiño 💖',
    'Uy, ese no era... ¡Ya no tardas, hermosa! 💘',
    'JAJAJAJAJAJA, TE AMO! ❤️‍🔥'
  ];

export default function RomanticLogin({ onLoginSuccess }) {
  const [usuario, setUsuario] = useState('');
  const [pin, setPin] = useState('');
  const [showInfo, setShowInfo] = useState({ usuario: false, pin: false });
  const [error, setError] = useState('');
  const [intentos, setIntentos] = useState(0);

  const handleSubmit = () => {
    setError('');
    
    if (!usuario || !pin) {
      setError('Por favor completa todos los campos ❤️');
      return;
    }

    // Validar credenciales
    if (usuario === VALID_CREDENTIALS.usuario && pin === VALID_CREDENTIALS.pin) {
      onLoginSuccess(usuario);
    } else {
      const mensajeAleatorio = mensajesError[intentos % mensajesError.length];
      setError(mensajeAleatorio);
      setIntentos(intentos + 1);
      if (intentos >= mensajesError.length - 1) {
        setIntentos(0);
      }
      setPin('');
      setUsuario('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="container">
      {/* Corazones flotantes de fondo */}
      <div className="hearts-background">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="floating-heart"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            <svg width="40" height="40" viewBox="0 0 100 100">
              <path
                d="M50,90 C50,90 10,60 10,40 C10,25 20,15 30,15 C40,15 50,25 50,25 C50,25 60,15 70,15 C80,15 90,25 90,40 C90,60 50,90 50,90 Z"
                fill="#f8b5c5"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Contenedor principal */}
      <div className="main-content">
        {/* Lado izquierdo - Corazón grande */}
        <div className="left-side">
          <div className="big-heart">
            <svg width="300" height="280" viewBox="0 0 100 100">
              <path
                d="M50,90 C50,90 10,60 10,40 C10,25 20,15 30,15 C40,15 50,25 50,25 C50,25 60,15 70,15 C80,15 90,25 90,40 C90,60 50,90 50,90 Z"
                fill="#c94a4a"
              />
            </svg>
          </div>
          <h1 className="title">Te Amo &lt;3</h1>
        </div>

        {/* Lado derecho - Formulario */}
        <div className="right-side">
          <div className="form-card">
            <h2 className="form-title">
              ESPEREMOS QUE NO TE TOME<br />MUCHO TIEMPO &lt;3
            </h2>

            <div className="form-content">
              {/* Mensaje de error */}
              {error && (
                <div className="error-message">
                  {error}
                </div>
              )}

              {/* Campo Usuario */}
              <div className="input-group">
                <div className="input-wrapper">
                  <input
                    type="text"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Usuario:"
                    className="input-field"
                  />
                  <button
                    onClick={() => setShowInfo({ ...showInfo, usuario: !showInfo.usuario })}
                    className="info-button"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/>
                    <line x1="12" y1="16" x2="12" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    <circle cx="12" cy="8" r="0.1" fill="currentColor"/>
                  </svg>

                  </button>
                </div>
                {showInfo.usuario && (
                  <div className="info-tooltip">
                    Que bueno que te guste mucho ❤️
                  </div>
                )}
              </div>

              {/* Campo Pin */}
              <div className="input-group">
                <div className="input-wrapper">
                  <input
                    type="password"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Pin:"
                    className="input-field"
                  />
                  <button
                    onClick={() => setShowInfo({ ...showInfo, pin: !showInfo.pin })}
                    className="info-button"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/>
                    <line x1="12" y1="16" x2="12" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    <circle cx="12" cy="8" r="0.1" fill="currentColor"/>
                  </svg>
                  </button>
                </div>
                {showInfo.pin && (
                  <div className="info-tooltip">
                    Meno, solo son 4 numeritos ❤️
                  </div>
                )}
              </div>

              {/* Botón Iniciar */}
              <button onClick={handleSubmit} className="submit-button">
                INICIAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}