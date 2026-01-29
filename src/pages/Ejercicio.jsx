import { useParams } from "react-router-dom"
import Saludo from "../exercises/fase-01/Saludo"

export function EjercicioDetalle() {
  const { id } = useParams()

  const componentes = {
    'saludo': <Saludo nombre='NachoSAG'/>
  }

  return (
    <div>
      {componentes[id] || <p>Ejercicio no encontrado o en desarrollo</p>}
    </div>
  )
}