import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button } from '../../components'
<<<<<<< HEAD
import { Helmet } from 'react-helmet'
import './index.less'

const User = ({ children, dispatch, user, loading }) => {
  console.log('here is user')
  return (
    <div>
      <Helmet>
        <title>Site</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Helmet>
      <Button loading={loading.global} title='User is here' />
=======
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
>>>>>>> e8c3cc888a12e101c258eab989ce5eaf020c61c8
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
