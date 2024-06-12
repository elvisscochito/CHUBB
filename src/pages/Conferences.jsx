/* import conference from "../assets/conference.png"; */
import image from "../assets/image.png";
import styles from "../styles/Conferences.module.css";

function Conferences() {
  return (
    <div className={styles.conference}>
      <img src={image} alt="conferences" className={styles.conferences} />
      <span className={styles.timer}>08:14:02</span>
      <span className={styles.title}>Inteligencia Emocional</span>
    </div>
  );
}

export default Conferences;
