import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button } from '../../components'
import styles from './index.less'

const User = ({ children, dispatch, user, loading }) => {
  const { name, list } = user
  const btnProps = {
    loading: loading.global,
    title: name,
    onClick (evt) {
      console.log('click me')
    }
  }
  return (
    <div className={styles.user}>
      <Button {...btnProps} />
      {list.map(el => (<p>{el}</p>))}
    </div>
  )
}

User.propTypes = {
  children: PropTypes.element.isRequired,
  dispatch: PropTypes.func,
  user: PropTypes.object,
  loading: PropTypes.object
}

export default connect(({ user, loading }) => ({ user, loading }))(User)
