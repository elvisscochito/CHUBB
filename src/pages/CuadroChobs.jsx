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
            <figcaption>Iván Alejandro García Ramírez </figcaption>
          </figure>
          <span className={styles.description}>Por su destacada participación en los foros de discusión</span>
        </div>
        <div className={styles.personContainer}>
          <figure className={styles.person}>
            <img src={person2} alt="person1" />
            <figcaption>Adrián Cortés Bernal</figcaption>
          </figure>
          <span className={styles.description}>Por su destacada atención al cliente</span>
        </div>
        <div className={styles.personContainer}>
          <figure className={styles.person}>
            <img src={person3} alt="person1" />
            <figcaption>Nicolas Meza Boileve</figcaption>
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
