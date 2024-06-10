import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import styles from "../styles/Login.module.css";

function Login() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/selection");
  };
  return (
    <div className={styles.grid}>
      <header className={styles.header}>
        <img src={logo} alt="logo" className={styles.logo} />
      </header>
      <div className={styles.main}>
        <h2>¡Bienvenida!</h2>
        <span>Ingrese sus datos a continuación</span>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="text" placeholder="Matricula" className={styles.input} />
          <input type="password" placeholder="Contraseña" className={styles.input} />
          <button className={styles.button}>Iniciar sesión</button>
        </form>
      </div>
      <footer className={styles.footer}>
        <p>Inchobs hace de su conocimiento que al iniciar sesión, acepta los <span>Términos de servicio</span> y las <span>Políticas de Privacidad</span></p>
      </footer>
    </div>
  );
}

export default Login;
