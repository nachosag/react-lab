import { useEffect, useState } from 'react'
import styles from './Temporizador.module.css'

export function Temporizador() {
  const [isActive, setIsActive] = useState(false)

  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setTime({
      ...time,
      [name]: Number(value),
    })
  }

  const [totalSeconds, setTotalSeconds] = useState(0)

  // TODO: Fix reset logic
  const handleSubmit = (e) => {
    e.preventDefault()

    if (totalSeconds === 0) {
      const calculatedSeconds =
        time.hours * 3600 + time.minutes * 60 + time.seconds

      if (calculatedSeconds !== 0) {
        setTotalSeconds(calculatedSeconds)
        setIsActive(true)
      }
    } else {
      setIsActive(true)
    }
  }

  useEffect(() => {
    if (!isActive) return

    const interval = setInterval(() => {
      setTotalSeconds((prev) => {
        if (prev <= 1) {
          setIsActive(false)
          return 0
        }

        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isActive])

  const handlePause = () => {
    setIsActive(false)
  }

  const handleReset = () => {
    setIsActive(false)
    setTotalSeconds(0)
    setTime({ hours: 0, minutes: 0, seconds: 0 })
  }

  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  const formatTime = (num) => num.toString().padStart(2, '0')

  return (
    <section className={styles.container}>
      <header>
        <h1 className={styles.title}>Establecer temporizador</h1>
      </header>

      <form className={styles.settings} onSubmit={handleSubmit}>
        <fieldset className={styles.inputGroup}>
          <legend className="sr-only">Configuración de tiempo</legend>

          <div className={styles.field}>
            <label htmlFor="hours-input">Horas</label>
            <input
              name="hours"
              type="number"
              id="hours-input"
              min="0"
              value={time.hours}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="minutes-input">Minutos</label>
            <input
              name="minutes"
              type="number"
              id="minutes-input"
              min="0"
              max="59"
              value={time.minutes}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="seconds-input">Segundos</label>
            <input
              name="seconds"
              type="number"
              id="seconds-input"
              min="0"
              max="59"
              value={time.seconds}
              onChange={handleChange}
            />
          </div>
        </fieldset>

        <output className={styles.display}>
          <time dateTime={`${hours}h ${minutes}m ${seconds}s`}>
            {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
          </time>
        </output>

        <div className={styles.controls}>
          {isActive ? (
            <>
              <button
                type="button"
                className={styles.btnPause}
                onClick={handlePause}
              >
                Pausar
              </button>
              <button
                type="button"
                className={styles.btnReset}
                onClick={handleReset}
              >
                Reiniciar
              </button>
            </>
          ) : (
            <button type="submit" className={styles.btnStart}>
              {totalSeconds > 0 ? 'Reanudar' : 'Iniciar'}
            </button>
          )}
        </div>
      </form>
    </section>
  )
}
