import styles from "../styles/Login.module.css";

function Login() {
  return (
    <div className={styles.grid}>
      <header className={styles.header}>
        <h1>CHUBB</h1>
      </header>
      <div className={styles.main}>
        <h1>¡Bienvenida!</h1>
        <span>Ingrese sus datos a continuación</span>
        <form className={styles.form}>
          <input type="text" placeholder="Usuario" className={styles.input} />
          <input type="password" placeholder="Contraseña" className={styles.input} />
          <button className={styles.button}>Iniciar sesión</button>
        </form>
      </div>
      <footer className={styles.footer}>
        <span>CHUBB hace de su conocimiento que al iniciar sesión, acepta los Términos de servicio y las Políticas de Privacidad</span>
      </footer>
    </div>
  );
}

export default Login;
