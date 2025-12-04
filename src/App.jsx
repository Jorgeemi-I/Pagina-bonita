import { useState, useEffect, useMemo } from 'react';
import './App.css';

// --- COMPONENTE DE GLOBOS (Nuevo) ---
const Globos = () => {
  // Usamos useMemo para que los globos no se recalculen en cada render
  const balloons = useMemo(() => {
    const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#FF9F43', '#54A0FF', '#ff7675'];
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      color: colors[Math.floor(Math.random() * colors.length)],
      left: Math.floor(Math.random() * 100) + '%',
      duration: (Math.floor(Math.random() * 5) + 5) + 's',
      delay: Math.floor(Math.random() * 5) + 's',
      scale: (Math.floor(Math.random() * 4) + 8) / 10
    }));
  }, []);

  return (
    <div className="balloon-container">
      {balloons.map((b) => (
        <div
          key={b.id}
          className="balloon"
          style={{
            backgroundColor: b.color,
            left: b.left,
            animationDuration: b.duration,
            animationDelay: b.delay,
            transform: `scale(${b.scale})`,
            boxShadow: 'inset -5px -5px 10px rgba(0,0,0,0.1)'
          }}
        >
          <div className="string"></div>
        </div>
      ))}
    </div>
  );
};

// --- TU CÓDIGO ORIGINAL ---

const VALID_CREDENTIALS = {
  usuario: 'Mi princesita hermosa',
  pin: '1124'
};

const mensajesError = [
    '¿Intenta de nuevo preciosa? ❤️',
    '¿En algo te equivocaste, mi amor? 💕'
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

    if (usuario === VALID_CREDENTIALS.usuario && pin === VALID_CREDENTIALS.pin) {
      // Si tienes una función externa, úsala, si no, puedes quitar el if
      if(onLoginSuccess) onLoginSuccess(usuario);
      else alert("¡Bienvenida mi amor!"); 
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
      
      {/* 1. AQUÍ AGREGAMOS LOS GLOBOS */}
      <Globos />

      {/* Corazones flotantes de fondo (Tu código original) */}
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
        
        {/* Fuegos artificiales (Tu código original) */}
        {[...Array(8)].map((_, i) => (
            <div
                key={`firework-${i}`}
                className="firework"
                style={{
                    left: `${10 + Math.random() * 80}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${4 + Math.random() * 3}s` 
                }}
            >
                <div className="firework-rocket"></div> 
                {[...Array(12)].map((_, j) => (
                    <div
                        key={`spark-${j}`}
                        className="spark"
                        style={{
                            transform: `rotate(${j * 30}deg)`
                        }}
                    />
                ))}
            </div>
        ))}

        {/* Círculos de brillo de fondo */}
        <div className="background-burst" style={{ top: '20%', left: '15%', animationDelay: '0s' }}></div>
        <div className="background-burst" style={{ bottom: '10%', right: '25%', animationDelay: '3s' }}></div>
        <div className="background-burst" style={{ top: '60%', right: '10%', animationDelay: '6s' }}></div>
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
          <h1 className="title">Feliz cumple &lt;3</h1>
        </div>

        {/* Lado derecho - Formulario */}
        <div className="right-side">
          <div className="form-card">
            <h2 className="form-title">
              Feliz cumpleaños a la niña<br />más increible del mundo &lt;3
            </h2>

            <div className="form-content">
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
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <line x1="12" y1="16" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
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
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <line x1="12" y1="16" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
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