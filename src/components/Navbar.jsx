import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
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
    )
}

export default Navbar
