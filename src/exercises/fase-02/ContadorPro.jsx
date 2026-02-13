import { useReducer } from 'react';
import styles from './ContadorPro.module.css'

export function ContadorPro() {
  const initialState = { count: 0 }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'incrementar':
        return { count: state.count + 1 }
      case 'decrementar':
        return { count: state.count - 1 }
      case 'reset':
        return initialState
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contador useReducer</h1>

      <div className={styles.display}>
        {state.count}
      </div>

      <div className={styles.buttonGroup}>
        <button
          className={`${styles.button} ${styles.decrement}`}
          onClick={() => dispatch({ type: 'decrementar' })}
        >-</button>

        <button
          className={`${styles.button} ${styles.increment}`}
          onClick={() => dispatch({ type: 'incrementar' })}
        >+</button>
      </div>

      <button
        className={styles.resetButton}
        onClick={() => dispatch({ type: 'reset' })}
      >Reset</button>
    </div>
  );
} 