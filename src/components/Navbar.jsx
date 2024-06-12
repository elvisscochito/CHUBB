import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <header className='navbarHeader'>
            <nav className='navbar'>
                <div className='logo'>ME.inchobs</div>
                <ul className='ul'>
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
                    <li>
                        <NavLink to="/mentors">
                            Mentores
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            Nosotros
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/more">
                            Más
                        </NavLink>
                    </li>
                </ul>
                <NavLink to="/contact-us" className='contact'>
                    Contacto
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar
