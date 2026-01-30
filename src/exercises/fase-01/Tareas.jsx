
export function Tareas() {
  const tasks = [
    { id: '1', text: 'Comprar pan' },
    { id: '2', text: 'Lavar la ropa' },
    { id: '3', text: 'Leer' },
    { id: '4', text: 'Estudiar' },
    { id: '5', text: 'Aprender un idioma' }
  ];

  return (
    <>
      <h1>Mis tareas:</h1>
      <ol>
        {
          tasks.map(task => (
            <li key={task.id}> {task.text} </li>
          ))
        }
      </ol>
    </>
  )
}