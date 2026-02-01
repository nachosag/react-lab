import { useParams } from "react-router-dom"
import { Saludo } from "../exercises/fase-01/Saludo"
import { Contador } from "../exercises/fase-01/Contador"
import { Tareas } from "../exercises/fase-01/Tareas"
import { Usuarios } from "../exercises/fase-01/Usuarios"
import { Temporizador } from "../exercises/fase-02/Temporizador"

export function Ejercicio() {
  const { id } = useParams()

  const components = {
    'saludo': <Saludo nombre='NachoSAG'/>,
    'contador': <Contador/>,
    'tareas-estaticas': <Tareas/>,
    'tarjetas-usuarios': <Usuarios/>,
    'temporizador': <Temporizador/>
  }

  return (
    <div>
      {components[id] || <p>Ejercicio no encontrado o en desarrollo</p>}
    </div>
  )
}