import { useState } from "react"

export function Contador() {
  const [amount, setAmount] = useState(0)

  const handleIncrement = () => setAmount(amount + 1)
  const handleDecrement = () => setAmount(amount - 1)

  return (
    <div>
      <h1>Contador</h1>
      <h2> {amount} </h2>
      <div style={{ display: "flex", flexDirection: 'row', gap: '10px' }}>
        <button onClick={handleIncrement}>Aumentar</button>
        <button onClick={handleDecrement}>Disminuir</button>
      </div>
    </div>
  )
}