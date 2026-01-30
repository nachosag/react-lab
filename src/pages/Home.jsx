// src/pages/HomePage.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { roadmapData } from '../data/roadmap';

export function Home() {
  const [faseActiva, setFaseActiva] = useState(null);

  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Mi Laboratorio de React</h1>
      <p>Selecciona una fase para ver los ejercicios disponibles.</p>

      {roadmapData.map((fase, index) => (
        <section key={index} style={{ border: '1px solid #ccc', margin: '1rem 0', padding: '1rem', borderRadius: '8px' }}>
          <div
            onClick={() => setFaseActiva(faseActiva === index ? null : index)}
            style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <h2 style={{ margin: 0 }}>{fase.fase}: {fase.titulo}</h2>
            <span>{faseActiva === index ? '▲' : '▼'}</span>
          </div>

          {faseActiva === index && (
            <div style={{ marginTop: '1.5rem', paddingLeft: '1rem' }}>
              <ol style={{ lineHeight: '2.5' }}>
                {fase.ejercicios.map(ex => (
                  <li key={ex.id}>
                    <Link
                      to={`/ejercicio/${ex.id}`}
                      style={{ color: '#646cff', textDecoration: 'none', fontWeight: '500' }}
                    >
                      {ex.nombre}
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </section>
      ))}
    </main>
  );
}