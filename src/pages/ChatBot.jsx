import galeriaIcon from '../assets/galeria-icon.png';
import microfonoIcon from '../assets/microfono-icon.png';
import styles from '../styles/ChatBot.module.css';

function ChatBot() {
  return (
    <>
      <header className={styles.navbarHeader}>
        <nav>
          <div className={styles.logo}>ME.inchobs</div>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Chobs Points</a></li>
            <li><a href="#">Conferencias</a></li>
            <li><a href="#">Cuadro Chobs</a></li>
            <li><a href="#">Mentores</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Más</a></li>
            <li><a href="#" className={styles.contacto}>Contacto</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className={styles.hero}>
          <h1>¡Bienvenido, Usuario!</h1>
          <h2>¿En qué puedo ayudarte?</h2>
          <div className={styles.options}>
            <div className={styles.option}>¿Cómo dar un buen servicio?</div>
            <div className={styles.option}>¿Cómo debo presentarme?</div>
            <div className={styles.option}>¿Qué son los ChobPoints?</div>
            <div className={styles.option}>¿Cómo entro al cuadro de honor?</div>
            <div className={styles.option}>Lineamientos de la empresa</div>
          </div>
          <div className={styles.searchContainer}>
            <input type="text" placeholder="Pregúntale al chatBot..." />
            <button><img src={microfonoIcon} alt="Microfono" /></button>
            <button><img src={galeriaIcon} alt="Galeria" /></button>
          </div>
        </section>
      </main>
    </>
  );
}

export default ChatBot;
