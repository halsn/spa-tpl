import React from 'react'
import styles from './index.less'

class Button extends React.Component {
  render () {
    return (
      <div className={styles.btn}>
        <button>{this.props.loading ? '...' : this.props.title}</button>
      </div>
    )
  }
}

export default Button
