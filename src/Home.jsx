import { useState, useRef } from 'react';
import './Home.css';

export default function Home({ username, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [cartaActual, setCartaActual] = useState(null);
  const [textoEditable, setTextoEditable] = useState('');
  const [bloqueadoModal, setBloqueadoModal] = useState(false);
  const cartaRef = useRef(null);

  const cartas = [
    { id: 1, titulo: 'Primera Cartita En este formato', mensaje: 'Todavía no he actualizado la cartita, preciosa, perdoname.', fecha: '06/11', fechaCompleta: '2025-11-27' },
    // { id: 2, titulo: 'Recuerdo Especial 🌟', mensaje: 'Escribe sobre ese momento que nunca olvidarás...', fecha: '07/11', fechaCompleta: '2025-11-07' },
    // { id: 3, titulo: 'Promesa Eterna 💍', mensaje: 'Escribe tus promesas más sinceras...', fecha: '08/11', fechaCompleta: '2025-11-08' },
    // { id: 4, titulo: 'Momento Mágico ✨', mensaje: 'Describe ese instante perfecto...', fecha: '09/11', fechaCompleta: '2025-11-09' },
    // { id: 5, titulo: 'Dulce Sorpresa 🎁', mensaje: 'Escribe una sorpresa especial...', fecha: '10/11', fechaCompleta: '2025-11-10' },
    // { id: 6, titulo: 'Mi Corazón ❤️', mensaje: 'Expresa todo lo que sientes...', fecha: '11/11', fechaCompleta: '2025-11-11' },
    // { id: 7, titulo: 'Pensando en Ti 🌙', mensaje: 'Cada noche pienso en ti...', fecha: '12/11', fechaCompleta: '2025-11-12' },
    // { id: 8, titulo: 'Nuestro Futuro 🌈', mensaje: 'Sueño con nuestro futuro juntos...', fecha: '13/11', fechaCompleta: '2025-11-13' },
  ];

  // Función para verificar si una carta está desbloqueada
  const estaDesbloqueada = (fechaCompleta) => {
    // Obtener fecha actual en formato YYYY-MM-DD
    const hoy = new Date();
    const año = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const dia = String(hoy.getDate()).padStart(2, '0');
    const fechaHoyStr = `${año}-${mes}-${dia}`;
    
    // Comparar strings directamente (más confiable)
    const desbloqueada = fechaHoyStr >= fechaCompleta;
    
    console.log('Fecha hoy:', fechaHoyStr);
    console.log('Fecha carta:', fechaCompleta);
    console.log('¿Desbloqueada?:', desbloqueada);
    
    return desbloqueada;
  };

  const abrirCarta = (carta) => {
    if (!estaDesbloqueada(carta.fechaCompleta)) {
      setCartaActual(carta);
      setBloqueadoModal(true);
      return;
    }

    setCartaActual(carta);
    setTextoEditable(carta.mensaje);
    setModalOpen(true);
  };

  const cerrarModal = () => {
    setModalOpen(false);
    setCartaActual(null);
  };

  const cerrarBloqueado = () => {
    setBloqueadoModal(false);
    setCartaActual(null);
  };

  const guardarComoImagen = async () => {
    // Importar html2canvas dinámicamente
    const html2canvas = (await import('https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/+esm')).default;
    
    if (cartaRef.current) {
      const canvas = await html2canvas(cartaRef.current, {
        backgroundColor: '#ffffff',
        scale: 2,
        logging: false,
      });
      
      const link = document.createElement('a');
      link.download = `carta-${cartaActual.id}-${Date.now()}.jpg`;
      link.href = canvas.toDataURL('image/jpeg', 0.95);
      link.click();
    }
  };

  return (
    <div className="home-container">
      {/* Header con menú desplegable */}
      <header className="home-header">
        <h1 className="header-title">Cartitas para mi noviecita</h1>
        
        <div className="menu-container">
          <button 
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="1"/>
              <circle cx="12" cy="5" r="1"/>
              <circle cx="12" cy="19" r="1"/>
            </svg>
          </button>
          
          {menuOpen && (
            <div className="dropdown-menu">
              <button className="menu-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                Te amo, preciosa
              </button>
              <div className="menu-divider"></div>
              <button className="menu-item logout-item" onClick={onLogout}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                  <polyline points="16 17 21 12 16 7"/>
                  <line x1="21" y1="12" x2="9" y2="12"/>
                </svg>
                Cerrar Sesión
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Contenido principal */}
      <div className="home-content">
        <div className="welcome-section">
          <h2 className="welcome-title">¡Hola Mi vida! 💜</h2>
          <p className="welcome-subtitle">Lo lograsteeeee :D</p>
        </div>

        {/* Grid de sobres */}
        <div className="cartas-grid">
          {cartas.map((carta) => {
            const desbloqueada = estaDesbloqueada(carta.fechaCompleta);
            return (
              <div 
                key={carta.id} 
                className={`carta-sobre ${!desbloqueada ? 'carta-bloqueada' : ''}`} 
                onClick={() => abrirCarta(carta)}
              >
                <div className="sobre-wrapper">
                  {!desbloqueada && (
                    <div className="candado-overlay">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                    </div>
                  )}
                  <div className="sobre-flap">
                    <div className="flap-decoration"></div>
                  </div>
                  <div className="sobre-body">
                    <div className="sobre-sello">
                      <span className="sello-fecha">{carta.fecha}</span>
                    </div>
                    <div className="sobre-lineas">
                      <div className="linea"></div>
                      <div className="linea"></div>
                      <div className="linea"></div>
                    </div>
                    <div className="sobre-content">
                      <h3 className="carta-titulo">{carta.titulo}</h3>
                      <button className="leer-button">
                        {desbloqueada ? 'Abrir Carta' : 'Bloqueada'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal de carta bloqueada */}
      {bloqueadoModal && (
        <div className="modal-overlay" onClick={cerrarBloqueado}>
          <div className="modal-bloqueado" onClick={(e) => e.stopPropagation()}>
            <div className="bloqueado-icono">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <h2 className="bloqueado-titulo">Carta Bloqueada 🔒</h2>
            <p className="bloqueado-mensaje">
              Esta carta se desbloqueará {/*el <strong>{cartaActual?.fecha}</strong>*/} prontito preciosa.
            </p>
            <p className="bloqueado-submensaje">
              ¡Ten paciencia mi amor! 💜
            </p>
            <button className="bloqueado-button" onClick={cerrarBloqueado}>
              Entendido
            </button>
          </div>
        </div>
      )}

      {/* Modal de carta normal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={cerrarModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            {/* Carta para capturar */}
            <div className="carta-container" ref={cartaRef}>
              <div className="carta-papel">
                <div className="carta-header">
                  <h2 className="carta-titulo-modal">{cartaActual?.titulo}</h2>
                  <div className="carta-decoracion">
                    <span>❤</span>
                    <span>✨</span>
                    <span>💕</span>
                  </div>
                </div>
                
                <textarea
                  className="carta-texto"
                  value={textoEditable}
                  onChange={(e) => setTextoEditable(e.target.value)}
                  placeholder="Escribe tu carta aquí..."
                  rows="12"
                />
                
                <div className="carta-footer">
                  <p className="carta-firma">Con amor, {username} 💜</p>
                  <div className="carta-fecha">
                    {new Date().toLocaleDateString('es-ES', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="modal-actions">
              <button className="action-button save-button" onClick={guardarComoImagen}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Guardar como Imagen
              </button>
              <button className="action-button cancel-button" onClick={cerrarModal}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}