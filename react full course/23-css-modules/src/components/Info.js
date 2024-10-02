import './Info.css'
import styles from './Info.module.css'

console.log(styles)

function Info() {
  return (
    <div className={styles.info}>
      <h1>Info component</h1>
      <button className={styles.otherButton}>Click</button>
    </div>
  )
}

export default Info