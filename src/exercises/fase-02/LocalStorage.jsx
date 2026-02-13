import { useState, useEffect } from "react"

export function LocalStorage() {
  const useLocalStorage = (key, value) => {
    const [storedValue, setStoredValue] = useState(() => {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : value
    })

    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(storedValue))
    }, [key, storedValue])

    return [storedValue, setStoredValue]
  }

  const [name, setName] = useLocalStorage('name', '')

  return (
    <div>
      <h1>Hola, {name || 'desconocido'}</h1>

      <input type="text" placeholder="Escribe tu nombre..." onChange={(e) => setName(e.target.value)} value={name}/>
      
    </div>
  )
}