import { useState } from 'react'
import styles from './Usuarios.module.css'

function Card({ name, age }) {
  return (
    <section className={styles.card}>
      <strong className={styles.user}>Usuario: {name}</strong>
      <span className={styles.age}>Edad: {age}</span>
    </section>
  )
}

export function Usuarios() {
  const users = [
    { id: '1', name: 'Ana', age: 25 },
    { id: '2', name: 'Luis', age: 31 },
    { id: '3', name: 'Carla', age: 22 }
  ]

  const [isVisible, setIsVisible] = useState(false)

  const handleClick = () => setIsVisible(prev => !prev)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Usuarios registrados:</h1>
      <button onClick={handleClick}>
        {isVisible ? 'Ocultar' : 'Ver'} ({users.length})
      </button>
      {isVisible && (
        <div className={styles.cards}>
          {
            users.map(user => (
              <Card key={user.id} name={user.name} age={user.age} />
            ))
          }
        </div>
      )}
    </div>
  )
}
