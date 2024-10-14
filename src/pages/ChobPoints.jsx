import logoPoints from '../assets/logoPoints.png';
import '../styles/ChobPoints.css';
function ChobPoints() {
  return (
    <section className="buttons">
      <div className="button">
        <img src={logoPoints} alt="Registro de actividad" />
        <h3>Actividad</h3>
        <p>Navegar</p>
      </div>
      <div className="button">
        <img src={logoPoints} alt="Obtener más" />
        <h3>Obtener más</h3>
        <p>Ganar</p>
      </div>
      <div className="button">
        <img src={logoPoints} alt="Tus Chobs Points" />
        <h3>Tus Yunfer Points</h3>
        <p>Canjear</p>
      </div>
    </section>
  )
};

export default ChobPoints;
