import { useState } from 'react';
import foro1 from '../assets/foro1.png';
import foro2 from '../assets/foro2.png';
import foro3 from '../assets/foro3.png';
import foro4 from '../assets/foro4.png';
import foro5 from '../assets/foro5.png';
import foro6 from '../assets/foro6.png';
import user from '../assets/user.png';
import '../styles/Mentors.css';

function Mentors() {
  const [foros, setForos] = useState([
    {
      id: 1,
      title: 'Mejora como persona',
      image: foro1,
      selected: false
    },
    {
      id: 2,
      title: 'Técnicas para poder...',
      image: foro2,
      selected: false
    },
    {
      id: 3,
      title: '¿Cómo interactuar en...',
      image: foro3,
      selected: true
    },
    {
      id: 4,
      title: 'La industria de la em...',
      image: foro4,
      selected: false
    },
    {
      id: 5,
      title: 'Tendencias de la imi...',
      image: foro5,
      selected: false
    },
    {
      id: 6,
      title: '¿Saberes cotidianos i...',
      image: foro6,
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
              <div key={foro.id} className={foro.selected ? 'foroCardActive' : 'foroCard'}>
                <img src={foro.image} alt={foro.title} />
                <h2>{foro.title}</h2>
              </div>
            );
          })
        }
      </div>
      <div className='mentores'>
        <div className='comments'>
          <div className='comment'>
            <img src={user} alt='user' />
            <p className='message'>¡Hola amigos!, el dia de hoy les quiero compartir que, las inteacciones entre los proveedores y los clientes siempre importará, pues, la gratitud y atención es algo que nos caracteriza como empresa</p>
          </div>
        </div>
        <div className='chat'>
          <input type='text' placeholder='Escribe tu mensaje' />
        </div>
      </div>
    </div>
  );
}

export default Mentors;
