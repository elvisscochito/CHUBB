import fire from '../assets/fire.png';
import stars from '../assets/stars.png';
import user from '../assets/user.png';
import watch from '../assets/watch.png';
import styles from './User.module.css';

function User() {
  return (
    <div className={styles.user}>
      <div className={styles.userInfo}>
        <div className={styles.userContact}>
          <img src={user} alt="User" />
          <span className={styles.userName}>Carlos Sebastián Pérez Santillán</span>
        </div>
        <div className={styles.userStatics}>
          <div className={styles.firstStatic}>
            <span>Tu puntuación actual</span>
            <img src={stars} alt="Stars" />
          </div>
          <div className={styles.secondStatic}>
            <span>Tu racha de 5 estrellas</span>
            <img src={fire} alt="Fire" />
            <span>3</span>
          </div>
          <div className={styles.thirdStatic}>
            <span>Conferencias vistas</span>
            <img src={watch} alt="Watch" />
            <span>8</span>
          </div>
        </div>
      </div>

      <div className={styles.userDetails}>
        <span>Nombre completo:</span>
        <span>Carlos Sebastián Pérez Santillán</span>
      </div>
    </div>
  )
}

export default User;
