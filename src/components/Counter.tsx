import { useState } from "react"
import styles from './Counter.module.scss'

export const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(prev => prev + 1)
  }

  return (
    <>
      <h1>{count}</h1>
      <div>
        <button className={styles.button} onClick={increment}>increment</button>
      </div>
    </>
  )
}