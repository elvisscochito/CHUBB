import galeriaIcon from '../assets/galeria-icon.png';
import microfonoIcon from '../assets/microfono-icon.png';
import styles from '../styles/ChatBot.module.css';

function ChatBot() {
  return (
    <>
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
    </>
  );
}

export default ChatBot;
