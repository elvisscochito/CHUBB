import { useState } from 'react';
import '../styles/Mentors.css';

function Mentors() {
  const [foros, setForos] = useState([
    {
      id: 1,
      name: 'Foro 1',
      description: 'Este es el foro 1.',
      selected: true
    },
    {
      id: 2,
      name: 'Foro 2',
      description: 'Este es el foro 2.',
      selected: false
    },
    {
      id: 3,
      name: 'Foro 3',
      description: 'Este es el foro 3.',
      selected: false
    },
    {
      id: 4,
      name: 'Foro 4',
      description: 'Este es el foro 4.',
      selected: false
    },
    {
      id: 5,
      name: 'Foro 5',
      description: 'Este es el foro 5.',
      selected: false
    }
  ]);
  return (
    <div className='mentors'>
      <div className='foros'>
        <h1>Foros</h1>
        {
          foros.map((foro) => {
            return (
              <div key={foro.id}>
                <h2>{foro.name}</h2>
                <p>{foro.description}</p>
              </div>
            );
          })
        }
      </div>
      <div className='mentores'>
        <div className='comments'>
          <h1>Discusión</h1>
          <h2>Carlos</h2>
          <p>Mensaje de Carlos</p>
          <h2>María</h2>
          <p>Mensaje de Maria.</p>
        </div>
        <div className='chat'>
          <input type='text' placeholder='Escribe tu mensaje' />
        </div>
      </div>
    </div>
  );
}

export default Mentors;
