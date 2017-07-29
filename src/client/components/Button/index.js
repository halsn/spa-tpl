import React from 'react'
import styles from './index.less'

export default ({ loading, title, onClick }) => {
  return (
    <div className={styles.btn}>
      <button onClick={onClick}>{loading ? '...' : title}</button>
    </div>
  )
}
