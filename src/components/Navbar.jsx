import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <header className="navbarHeader">
            <nav>
                <div className="logo">ME.inchobs</div>
                <ul>
                    <li>
                        <NavLink to="/chatbot">
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/chob-points">
                            Chobs Points
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/conferences">
                            Conferencias
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cuadro-chobs">
                            Cuadro Chobs
                        </NavLink>
                    </li>
                    <li><a href="#">Mentores</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
