import '../styles/About.css';
function About() {
  return (
    <div className='about'>
      <h1>Nosotros</h1>
      <div className='aboutContainer'>
        <div>
          <h2>Mision y visión</h2>
          <p>Nuestra Misión es ofrecer excelencia en el servicio a través de nuestros empleados y agentes de seguros, siempre atendiendo a nuestra filosofía que esta sustentada en tres principios:

            Servicio al cliente.
            Respeto a las personas y a la competencia.
            Búsqueda de la excelencia.</p>
        </div>
        <div className='valores'>
          <h2>Valores</h2>
          <p>
            Los valores de nuestra empresa son los siguientes:
            <ul className='valoresList'>
              <li>Integridad, respeto y confianza.</li>
              <li>Enfoque al cliente y al mercado.</li>
              <li>Innovación, visión de negocio.</li>
              <li>Competitividad.</li>
              <li>Enfoque a resultados, motivación y dirección a otros.</li>
              <li>Colaboración.</li>
              <li>Negociación y relación con pares.</li>
              <li>Profesionalismo</li>
              <li>Planeación, organización, y toma de decisiones de calidad.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;
