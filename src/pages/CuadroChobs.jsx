import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.png";
import styles from "../styles/CuadroChobs.module.css";

function CuadroChobs() {
  return (
    <div className={styles.cuadroChobs}>
      <h1 className={styles.title}>Las experiencias son lo más importante en esta vida, ¡haz que valgan!</h1>

      <div className={styles.people}>
        <div className={styles.personContainer}>
          <figure className={styles.person}>
            <img src={person1} alt="person1" />
            <figcaption>Mariela Nambo Orozco</figcaption>
          </figure>
          <span className={styles.description}>Por su destacada participación en los foros de discusión</span>
        </div>
        <div className={styles.personContainer}>
          <figure className={styles.person}>
            <img src={person2} alt="person1" />
            <figcaption>Pablo Aranda Flores</figcaption>
          </figure>
          <span className={styles.description}>Por su destacada atención al cliente</span>
        </div>
        <div className={styles.personContainer}>
          <figure className={styles.person}>
            <img src={person3} alt="person1" />
            <figcaption>Jerónimo De la Torre</figcaption>
          </figure>
          <span className={styles.description}>Por su destacada aportación de iniciativas organizacionales</span>
        </div>
        <div className={styles.personContainer}>
          <figure className={styles.person}>
            <img src={person4} alt="person1" />
            <figcaption>Braulio González Esquivel</figcaption>
          </figure>
          <span className={styles.description}>Por su destacada atención al cliente</span>
        </div>
      </div>
    </div>
  );
}

export default CuadroChobs;
