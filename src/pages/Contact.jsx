import facebook from "../assets/facebook.png";
import twitter from "../assets/gorjeo.png";
import instagram from "../assets/instagram.png";
import whatsapp from "../assets/whatsapp.png";
import styles from "../styles/Contact.module.css";

function Contact() {
  return (
    <section class={styles.contactSection}>
      <div class={styles.contactInfo}>
        <h3>UBICACIÓN</h3>
        <p>México 95D km 104, Real del Puente, 62790 Mor.</p>
        <h3>SÍGUENOS</h3>
        <div class={styles.socialMedia}>
          <a href="https://www.facebook.com/"><img src={facebook} alt="Facebook" /></a>
          <a href="https://x.com/bybrau"><img src={twitter} alt="Twitter" /></a>
          <a href="https://www.instagram.com/antony_lova/"><img src={instagram} alt="Instagram" /></a>
          <a href="https://www.whatsapp.com/"><img src={whatsapp} alt="Whatsapp" /></a>
        </div>
        <p>© 2024 Política de privacidad</p>
      </div>
      <div class={styles.contactForm}>
        <h3>FORMULARIO DE CONTACTO</h3>
        <form action="#" method="post">
          <input type="text" name="name" placeholder="Ingrese su nombre" required />
          <input type="email" name="email" placeholder="Ingrese su correo" required />
          <textarea name="message" rows="5" placeholder="Escriba detalladamente su consulta" required></textarea>
          <button type="submit">ENVIAR</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
