import mision from '../assets/mision.png';
import objetivo from '../assets/objetivo.png';
import styles from '../styles/About.module.css';
function About() {
  /* change */
  return (
    <div className={styles.about}>
      <div className={styles.firstSectionContainer}>
        <section className={styles.firstSection}>
          <div className={styles.mision}>
            <h2>Nuestra misión</h2>
            <p>
              Somos una empresa con experiencia que ofrece soluciones en aire comprimido basadas en la calidad y confiabilidad, garantizando la satisfacción de nuestros clientes.
            </p>
          </div>
          <div className='vision'>
            <h2>Nuestra visión</h2>
            <p>
              Consolidarnos como empresa líder en soluciones en aire comprimido proporcionando la tecnología más avanzada al alcance de nuestros clientes, esto es pensar en
              YUNFER.
            </p>
          </div>
          <div className='valores'>
            <h2>Valores en Grupo YUNFER</h2>
            <ul>
              <li>Excelencia</li>
              <li>Honestidad</li>
              <li>Integridad</li>
              <li>Excelencia en el servicio al cliente</li>
              <li>Trabajo en equipo</li>
            </ul>
          </div>
        </section>
        <img src={objetivo} alt='Mision' />
      </div>
      <div className={styles.secondSectionContainer}>
        <section className={styles.secondSection}>
          <div className='objetivo'>
            <h2>¿Nuestro objetivo?</h2>
            <p>
              Consolidarse como la principal aseguradora en Latinoamérica mediante la promoción de una cultura organizacional innovadora y orientada al mercado, a través de un ecosistema digital integral que incluya a colaboradores tanto internos como externos y de todas las edades, impulse la transformación digital y fortalezca el liderazgo.
            </p>
          </div>
          <div className='retos'>
            <h2>Principales retos de la industria</h2>
            <p>
              <span>La transformación hacia lo digital</span>, pues  se ha convertido en una tendencia clave dentro de la industria de seguros, centrada en mejorar la experiencia del cliente y aumentar la eficiencia operativa.
            </p>
            <p>
              <span>Innovación en productos</span>, pues las aseguradoras están desarrollando productos novedosos que aprovechan el análisis predictivo y los algoritmos de aprendizaje automático para mejorar la evaluación de riesgos.
            </p>
            <p>
              <span>Crecimiento y desarrollo</span>, debido a que el sector asegurador en México ha mostrado un crecimiento constante en los últimos años lo que representa mayor competencia y por lo tanto mayor necesidad de innovar.
            </p>
          </div>
        </section>
        <img src={mision} alt='Mision' />
      </div>
    </div>
  )
}

export default About;
