import { useParams } from "react-router-dom"
import { Saludo } from "../exercises/fase-01/Saludo"
import { Contador } from "../exercises/fase-01/Contador"

export function Ejercicio() {
  const { id } = useParams()

  const componentes = {
    'saludo': <Saludo nombre='NachoSAG'/>,
    'contador': <Contador/>
  }

  return (
    <div>
      {componentes[id] || <p>Ejercicio no encontrado o en desarrollo</p>}
    </div>
  )
}