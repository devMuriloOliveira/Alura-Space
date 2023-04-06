import React from 'react'
import styles from './Tags.module.scss'

export default function Tags({ tags, filtraFotos, setItens }) {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__lista}>
        {tags.map(tag => {
          return <li key={tag} onClick={() => filtraFotos(tag)}>{tag}</li>
        })}
        <li>Todas</li>
      </ul>
    </div>
  )
}
