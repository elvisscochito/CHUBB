import { Link, useNavigate } from "react-router-dom";
import icon1 from "../assets/icon1.png";
import icon10 from "../assets/icon10.png";
import icon11 from "../assets/icon11.png";
import icon12 from "../assets/icon12.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import icon7 from "../assets/icon7.png";
import icon8 from "../assets/icon8.png";
import icon9 from "../assets/icon9.png";
import styles from "../styles/Selection.module.css";

function Selection() {
    const navigate = useNavigate();
    return (
        <>
            <header className={styles.selectionHeader}>
                <nav>
                    <div className={styles.logo}>Grupo YUNFER</div>
                </nav>
            </header>

            <section className={styles.support}>
                <h2>¿En qué te encuentras apoyando hoy?</h2>
                <div className={styles.supportOptions}>
                    <div className={styles.optionFirst}>
                        <img src={icon1} alt="Robo Total" />
                        <p>Robo Total</p>
                    </div>
                    <div className={styles.optionFirst}>
                        <img src={icon2} alt="Grúa" />
                        <p>Grúa</p>
                    </div>
                    <div className={styles.optionFirst}>
                        <img src={icon3} alt="Daños a Terceros" />
                        <p>Daños a Terceros</p>
                    </div>
                    <div className={styles.optionFirst}>
                        <img src={icon4} alt="Gastos Médicos" />
                        <p>Gastos Médicos</p>
                    </div>
                    <div className={styles.optionFirst}>
                        <img src={icon5} alt="Asistencia Legal" />
                        <p>Asistencia Legal</p>
                    </div>
                    <div className={styles.optionFirst}>
                        <img src={icon6} alt="Autorelevo" />
                        <p>Autorelevo</p>
                    </div>
                    <div className={styles.optionFirst}>
                        <img src={icon7} alt="Rep. Líquidos" />
                        <p>Rep. Líquidos</p>
                    </div>
                    <div className={styles.optionFirst}>
                        <img src={icon8} alt="Incendio" />
                        <p>Incendio</p>
                    </div>
                    <div className={styles.optionFirst}>
                        <img src={icon9} alt="Servicio Técnico" />
                        <p>Servicio Técnico</p>
                    </div>
                    <div className={styles.optionFirst}>
                        <img src={icon10} alt="Mascotas" />
                        <p>Mascotas</p>
                    </div>
                    <div className={styles.optionFirst}>
                        <img src={icon11} alt="Financiamiento" />
                        <p>Financiamiento</p>
                    </div>
                    <div className={styles.optionFirst}>
                        <img src={icon12} alt="Objetos Personales" />
                        <p>Objetos Personales</p>
                    </div>
                </div>
            </section>
            <center><Link to="/chatbot" className={styles.visitButton}>Solo Visita</Link></center>
        </>
    )
}

export default Selection;
