import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import user from '../assets/user.png';
import '../styles/Navbar.css';


const Navbar = () => {
    const navigate = useNavigate();

    const handleSignOut = (e) => {
        navigate("/");
    };
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
                <div className='container'>
                    <Link to="/contact-us" className='contact'>
                        Contacto
                    </Link>
                    <Link to="/user" className='user'>
                        <img src={user} alt="user" />
                    </Link>
                    <FontAwesomeIcon icon={faRightFromBracket} onClick={handleSignOut} className='icon' />
                </div>
            </nav>
        </header>
    )
}

export default Navbar
