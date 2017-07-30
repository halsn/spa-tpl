import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button } from '../../components'
import styles from './index.less'

const User = ({ children, dispatch, user, loading }) => {
  const { userList } = user
  let value = ''
  const btnProps = {
    loading: loading.effects['user/post'],
    title: '添加',
    onClick () {
      const payload = { name: value }
      dispatch({ type: 'user/post', payload })
    }
  }
  const handleInput = (e) => {
    value = e.target.value
  }

  return (
    <div className={styles.user}>
      <input type='text' onChange={handleInput} />
      <Button {...btnProps} />
      {userList.map(user => (<p>{user.name}</p>))}
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
